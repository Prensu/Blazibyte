import { motion } from "framer-motion"
import { Outlet, useLocation } from "react-router-dom"

import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { ScrollToTop } from "@/components/layout/ScrollToTop"
import { WhatsAppButton } from "@/components/layout/WhatsAppButton"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { Testimonials } from "@/components/sections/Testimonials"

/**
 * Site shell: navbar on top, page content (with a soft fade-in on every
 * route change), then — on every page — testimonials + CTA banner just
 * before the footer.
 */
export function Layout() {
	const location = useLocation()

	return (
		<div className="flex min-h-screen flex-col">
			<ScrollToTop />
			<Navbar />
			<motion.main
				key={location.pathname}
				initial={{ opacity: 0, y: 14 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, ease: "easeOut" }}
				className="flex-1"
			>
				<Outlet />
			</motion.main>
			<Testimonials />
			<CtaBanner />
			<Footer />
			<WhatsAppButton />
		</div>
	)
}
