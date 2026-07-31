import { motion } from "framer-motion"

import { WhatsAppIcon } from "@/components/ui/icons"
import { whatsappLink } from "@/config/site"

/** Floating WhatsApp chat button — the fastest way clients reach Blazibyte. */
export function WhatsAppButton() {
	return (
		<motion.a
			href={whatsappLink("Hello Blazibyte! I’d like to know more about your services.")}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Chat with us on WhatsApp"
			className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift"
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{ delay: 1, type: "spring", stiffness: 260, damping: 18 }}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
		>
			<WhatsAppIcon className="h-7 w-7" />
		</motion.a>
	)
}
