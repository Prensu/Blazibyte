import { Link } from "react-router-dom"

import { Container } from "@/components/ui/Container"
import { Logo } from "@/components/ui/Logo"
import {
	FacebookIcon,
	InstagramIcon,
	MailIcon,
	MapPinIcon,
	PhoneIcon,
	TikTokIcon,
} from "@/components/ui/icons"
import { navLinks, siteConfig } from "@/config/site"
import { services } from "@/data/services"

export function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer className="bg-ink text-white">
			<Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
				{/* Brand */}
				<div>
					<Logo dark />
					<p className="mt-4 text-sm leading-relaxed text-white/70">{siteConfig.description}</p>
					<div className="mt-5 flex gap-3">
						<a
							href={siteConfig.socials.facebook}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Facebook"
							className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-brand-500 hover:text-white"
						>
							<FacebookIcon className="h-4 w-4" />
						</a>
						<a
							href={siteConfig.socials.instagram}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram"
							className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-brand-500 hover:text-white"
						>
							<InstagramIcon className="h-4 w-4" />
						</a>
						<a
							href={siteConfig.socials.tiktok}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="TikTok"
							className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-brand-500 hover:text-white"
						>
							<TikTokIcon className="h-4 w-4" />
						</a>
					</div>
				</div>

				{/* Quick links */}
				<nav aria-label="Footer navigation">
					<h3 className="text-sm font-semibold tracking-widest text-white/50 uppercase">
						Quick Links
					</h3>
					<ul className="mt-4 space-y-2.5">
						{navLinks.map((link) => (
							<li key={link.to}>
								<Link
									to={link.to}
									className="text-sm text-white/70 transition-colors hover:text-brand-400"
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				{/* Services */}
				<div>
					<h3 className="text-sm font-semibold tracking-widest text-white/50 uppercase">
						Our Services
					</h3>
					<ul className="mt-4 space-y-2.5">
						{services.slice(0, 6).map((service) => (
							<li key={service.slug}>
								<Link
									to="/services"
									className="text-sm text-white/70 transition-colors hover:text-brand-400"
								>
									{service.title}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Contact */}
				<div>
					<h3 className="text-sm font-semibold tracking-widest text-white/50 uppercase">
						Contact Us
					</h3>
					<ul className="mt-4 space-y-3 text-sm text-white/70">
						<li className="flex items-start gap-3">
							<MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
							<span className="text-white/70">{siteConfig.address}</span>
						</li>
						{siteConfig.phones.map((phone) => (
							<li key={phone} className="flex items-center gap-3">
								<PhoneIcon className="h-4 w-4 shrink-0 text-brand-400" />
								<a
									href={`tel:${phone.replace(/\s/g, "")}`}
									className="text-white/70 transition-colors hover:text-brand-400"
								>
									{phone}
								</a>
							</li>
						))}
						<li className="flex items-center gap-3">
							<MailIcon className="h-4 w-4 shrink-0 text-brand-400" />
							<a
								href={`mailto:${siteConfig.email}`}
								className="text-white/70 transition-colors hover:text-brand-400"
							>
								{siteConfig.email}
							</a>
						</li>
					</ul>
				</div>
			</Container>

			<div className="border-t border-white/10">
				<Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/50 sm:flex-row">
					<p>
						© {year} {siteConfig.legalName} All rights reserved.
					</p>
					<p>Mahalaxmisthan, Lalitpur, Nepal</p>
				</Container>
			</div>
		</footer>
	)
}
