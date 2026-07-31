export const WHATSAPP_NUMBER = "524491112700";
export const WHATSAPP_DISPLAY = "+52 449 111 2700";

export function buildWhatsAppUrl({ name = "", email = "", message = "" } = {}) {
  const lines = [
    "Hola, me contacto desde la web de Uniformes Candi.",
    name && `Nombre: ${name}`,
    email && `Email: ${email}`,
    message && `Mensaje: ${message}`,
  ].filter(Boolean);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}
