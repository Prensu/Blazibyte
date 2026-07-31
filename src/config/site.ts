/**
 * Central site configuration.
 * Update contact details, social links and nav items here — the whole site reads from this file.
 */
export const siteConfig = {
	name: "Blazibyte",
	legalName: "Blazibyte Pvt. Ltd.",
	tagline: "Let’s create content that makes your brand stand out.",
	description:
		"Blazibyte Pvt. Ltd. is a creative agency based in Nepal that helps businesses build a strong digital presence through engaging visual content and strategic marketing.",
	address: "Mahalaxmisthan, Sijapati Complex, Lalitpur, Nepal",
	phones: ["+977 9767475676", "+977 9707715552"],

	whatsappNumber: "9779707715552",
	email: "blazibyte@gmail.com",
	websiteUrl: "https://www.blazibyte.com",
	hours: "Sunday – Friday · 9:00 AM – 6:00 PM",
	socials: {
		facebook: "https://www.facebook.com/profile.php?id=61577158018442",
		instagram: "https://www.instagram.com/blazibyte/",
		tiktok: "https://www.tiktok.com/@blazibyte.marketi",
	},
} as const

export interface NavLink {
	label: string
	to: string
}

export const navLinks: NavLink[] = [
	{ label: "Home", to: "/" },
	{ label: "About Us", to: "/about" },
	{ label: "Our Services", to: "/services" },
	{ label: "Our Portfolio", to: "/portfolio" },
	{ label: "Our Team", to: "/team" },
	{ label: "Contact Us", to: "/contact" },
]

/** Builds a WhatsApp deep link with an optional prefilled message. */
export function whatsappLink(message?: string): string {
	const base = `https://wa.me/${siteConfig.whatsappNumber}`
	return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
