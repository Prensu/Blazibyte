export type IconName =
	"video" | "megaphone" | "scissors" | "sparkles" | "calendar" | "penTool" | "target" | "camera"

export interface Service {
	slug: string
	title: string
	summary: string
	bullets: string[]
	icon: IconName
}

export type PortfolioCategory =
	"Video Ads" | "Reels & Social" | "Real Estate" | "Events" | "Branding & Design"

export interface PortfolioItem {
	id: string
	title: string
	category: PortfolioCategory
	description: string
	/** Tailwind gradient classes used as a visual placeholder when there is no video. */
	gradient: string
	/** Direct video URL (Cloudinary). When set, the card becomes click-to-play. */
	videoUrl?: string
	/** Poster/thumbnail image shown before the video plays. */
	poster?: string
}

export interface TeamMember {
	id: string
	name: string
	role: string
	initials: string
	/** Resolved photo URL — falls back to an initials avatar when missing. */
	photo?: string
}

export interface Testimonial {
	id: string
	name: string
	company: string
	quote: string
	rating: number
}

export interface ProcessStep {
	step: number
	title: string
	description: string
}

export interface Stat {
	label: string
	value: number
	suffix?: string
}
