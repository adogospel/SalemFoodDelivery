export const WHATSAPP_NUMBER = "237657184629";

export function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildOrderMessage(dishName = "") {
  return dishName
    ? `Bonjour Salem Food Delivery, je souhaite commander : ${dishName}.`
    : "Bonjour Salem Food Delivery, je souhaite commander.";
}