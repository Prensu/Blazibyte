import type { ReactNode } from "react"

import { Reveal } from "@/components/ui/Reveal"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
	eyebrow?: string
	title: ReactNode
	description?: string
	align?: "center" | "left"
	className?: string
}

export function SectionHeading({
	eyebrow,
	title,
	description,
	align = "center",
	className,
}: SectionHeadingProps) {
	return (
		<Reveal
			className={cn(
				"max-w-2xl",
				align === "center" ? "mx-auto text-center" : "text-left",
				className,
			)}
		>
			{eyebrow ? (
				<p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-600">
					{eyebrow}
				</p>
			) : null}
			<h2 className="text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
				{title}
			</h2>
			{description ? (
				<p className="mt-4 text-base leading-relaxed text-ink-soft">{description}</p>
			) : null}
		</Reveal>
	)
}
