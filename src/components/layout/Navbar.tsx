import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { NavLink } from "react-router-dom"

import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { Logo } from "@/components/ui/Logo"
import { CloseIcon, MenuIcon } from "@/components/ui/icons"
import { navLinks } from "@/config/site"
import { useScrolled } from "@/hooks/useScrolled"
import { cn } from "@/lib/utils"

export function Navbar() {
	const scrolled = useScrolled(24)
	const [mobileOpen, setMobileOpen] = useState(false)

	return (
		<motion.header
			initial={{ y: -80, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className={cn(
				"sticky top-0 z-50 w-full transition-all duration-300",
				scrolled
					? "border-b border-ink/5 bg-white/90 shadow-card backdrop-blur-sm"
					: "bg-transparent",
			)}
		>
			<Container className="flex h-16 items-center justify-between lg:h-20">
				<Logo />

				{/* Desktop nav */}
				<nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
					{navLinks.map((link) => (
						<NavLink
							key={link.to}
							to={link.to}
							end={link.to === "/"}
							className={({ isActive }) =>
								cn(
									"rounded-full px-4 py-2 text-sm font-medium transition-colors",
									isActive
										? "bg-brand-50 text-brand-600"
										: "text-ink-soft hover:bg-brand-50/60 hover:text-ink",
								)
							}
						>
							{link.label}
						</NavLink>
					))}
				</nav>

				<div className="hidden lg:block">
					<Button to="/contact">Get a Quote</Button>
				</div>

				{/* Mobile menu toggle */}
				<button
					type="button"
					className="flex h-10 w-10 items-center justify-center rounded-xl text-ink hover:bg-brand-50 lg:hidden"
					aria-label={mobileOpen ? "Close menu" : "Open menu"}
					aria-expanded={mobileOpen}
					onClick={() => setMobileOpen((open) => !open)}
				>
					{mobileOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
				</button>
			</Container>

			{/* Mobile nav */}
			<AnimatePresence>
				{mobileOpen ? (
					<motion.nav
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.25, ease: "easeOut" }}
						className="overflow-hidden border-b border-ink/5 bg-white shadow-card lg:hidden"
						aria-label="Mobile navigation"
					>
						<Container className="flex flex-col gap-1 py-4">
							{navLinks.map((link) => (
								<NavLink
									key={link.to}
									to={link.to}
									end={link.to === "/"}
									onClick={() => setMobileOpen(false)}
									className={({ isActive }) =>
										cn(
											"rounded-xl px-4 py-3 text-base font-medium",
											isActive ? "bg-brand-50 text-brand-600" : "text-ink-soft hover:bg-brand-50/60",
										)
									}
								>
									{link.label}
								</NavLink>
							))}
							<div className="px-2 pt-3">
								<Button to="/contact" className="w-full" onClick={() => setMobileOpen(false)}>
									Get a Quote
								</Button>
							</div>
						</Container>
					</motion.nav>
				) : null}
			</AnimatePresence>
		</motion.header>
	)
}
