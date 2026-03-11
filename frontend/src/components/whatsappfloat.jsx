

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
    return (
        <a
            href="https://wa.me/+971581485428"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-10 left-6 z-50 flex items-center gap-3
            bg-[#059669] text-white px-3 py-3 rounded-full
            shadow-lg hover:bg-[#047857] hover:scale-105 transition duration-300 font-[Inter]"
        >
            {/* Icon */}
            <FaWhatsapp size={30} />
        </a>
    );
}