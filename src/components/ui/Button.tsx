import type { ButtonHTMLAttributes, ReactNode } from "react"
import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"

type ButtonVariant = "primary" | "outline" | "white"
type ButtonSize = "md" | "lg"

interface ButtonProps {
	children: ReactNode
	/** Internal route — renders a react-router Link. */
	to?: string
	/** External URL — renders an anchor tag. */
	href?: string
	variant?: ButtonVariant
	size?: ButtonSize
	className?: string
	type?: ButtonHTMLAttributes<HTMLButtonElement>["type"]
	onClick?: () => void
}

const variantClasses: Record<ButtonVariant, string> = {
	primary:
		"bg-brand-500 text-white shadow-card hover:bg-brand-600 focus-visible:outline-brand-600",
	outline:
		"border border-ink/15 bg-white text-ink hover:border-brand-500 hover:text-brand-600 focus-visible:outline-brand-600",
	white: "bg-white text-brand-600 shadow-card hover:bg-brand-50 focus-visible:outline-white",
}

const sizeClasses: Record<ButtonSize, string> = {
	md: "px-5 py-2.5 text-sm",
	lg: "px-7 py-3.5 text-base",
}

export function Button({
	children,
	to,
	href,
	variant = "primary",
	size = "md",
	className,
	type = "button",
	onClick,
}: ButtonProps) {
	const classes = cn(
		"inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98]",
		variantClasses[variant],
		sizeClasses[size],
		className,
	)

	if (to) {
		return (
			<Link to={to} className={classes} onClick={onClick}>
				{children}
			</Link>
		)
	}

	if (href) {
		return (
			<a href={href} className={classes} target="_blank" rel="noopener noreferrer" onClick={onClick}>
				{children}
			</a>
		)
	}

	return (
		<button type={type} className={classes} onClick={onClick}>
			{children}
		</button>
	)
}
