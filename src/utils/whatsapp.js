export const WHATSAPP_NUMBER = "521234567890";
export const WHATSAPP_DISPLAY = "+52 123 456 7890";

export function buildWhatsAppUrl({ name = "", email = "", message = "" } = {}) {
  const lines = [
    "Hola, me contacto desde la web de Uniformes Candi.",
    name && `Nombre: ${name}`,
    email && `Email: ${email}`,
    message && `Mensaje: ${message}`,
  ].filter(Boolean);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}
