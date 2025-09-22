// scripts/optimize-images.js
import { promises as fs } from 'fs';
import path from 'path';
import { globby } from 'globby';
import sharp from 'sharp';

const projectRoot = process.cwd();
const assetsDir = path.join(projectRoot, 'src', 'assets');
const supportedExts = new Set(['.jpg', '.jpeg', '.png']);

function formatBytes(bytes) {
  if (bytes === 0) return '0B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
}

async function compressFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!supportedExts.has(ext)) return { skipped: true };

  const original = await fs.readFile(filePath);

  // Choose pipeline based on input extension
  let pipeline = sharp(original);

  // Keep original format to avoid content-type mismatches
  if (ext === '.png') {
    pipeline = pipeline.png({ compressionLevel: 9, palette: true, effort: 7 });
  } else {
    pipeline = pipeline.jpeg({ quality: 72, mozjpeg: true, chromaSubsampling: '4:2:0' });
  }

  // Strip metadata, auto-orient
  pipeline = pipeline.rotate();

  const optimized = await pipeline.toBuffer();

  // Only overwrite if smaller by at least 2%
  if (optimized.length < original.length * 0.98) {
    await fs.writeFile(filePath, optimized);
    return {
      changed: true,
      before: original.length,
      after: optimized.length,
    };
  }

  return { changed: false, before: original.length, after: optimized.length };
}

async function run() {
  const patterns = [
    path.join(assetsDir, '**/*.{jpg,jpeg,png}')
  ];
  const files = await globby(patterns, { gitignore: true });
  if (files.length === 0) {
    console.log('No images found to optimize.');
    return;
  }

  let totalBefore = 0;
  let totalAfter = 0;
  let changedCount = 0;

  console.log(`Optimizing ${files.length} files in ${assetsDir}\n`);

  for (const file of files) {
    try {
      const result = await compressFile(file);
      if (result.skipped) continue;
      totalBefore += result.before || 0;
      totalAfter += result.after || 0;
      if (result.changed) {
        changedCount += 1;
        console.log(`✓ ${path.relative(projectRoot, file)}  ${formatBytes(result.before)} → ${formatBytes(result.after)}`);
      } else {
        console.log(`- ${path.relative(projectRoot, file)}  no change (${formatBytes(result.before)})`);
      }
    } catch (err) {
      console.error(`✗ ${path.relative(projectRoot, file)}  error: ${err.message}`);
    }
  }

  const saved = totalBefore - totalAfter;
  console.log(`\nDone. Optimized ${changedCount} files. Saved ${formatBytes(saved)} total.`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
