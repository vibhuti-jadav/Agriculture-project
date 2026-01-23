import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/contact";

const FloatingWhatsApp = () => {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-4 rounded-full shadow-strong hover:scale-105 transition-transform duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-medium hidden sm:inline group-hover:inline transition-all">
        Chat with us
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
