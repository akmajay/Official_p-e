import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
    const handleClick = () => {
        window.open(
            "https://wa.me/919955850353?text=Hello! I'm interested in your construction materials.",
            "_blank"
        );
    };

    return (
        <button
            onClick={handleClick}
            className="whatsapp-float group"
            aria-label="Chat on WhatsApp"
            title="Chat with us on WhatsApp"
        >
            <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />

            {/* Tooltip */}
            <span className="absolute right-full mr-3 px-3 py-2 bg-white text-gray-800 text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Chat with us!
            </span>
        </button>
    );
};

export default WhatsAppFloat;
