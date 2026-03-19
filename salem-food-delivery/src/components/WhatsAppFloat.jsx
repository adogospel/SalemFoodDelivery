import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/237657184629"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Commander sur WhatsApp"
    >
      <span className="wave wave-1"></span>
      <span className="wave wave-2"></span>
      <span className="wave wave-3"></span>
      <MessageCircle size={28} />
    </a>
  );
}