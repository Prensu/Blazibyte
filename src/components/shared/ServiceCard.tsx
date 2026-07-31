import { motion } from "framer-motion"

import { CheckIcon, serviceIconMap } from "@/components/ui/icons"
import { fadeUp } from "@/lib/motion"
import type { Service } from "@/types"

interface ServiceCardProps {
	service: Service
	/** Compact cards (no bullets) are used on the home page preview. */
	compact?: boolean
}

export function ServiceCard({ service, compact = false }: ServiceCardProps) {
	const Icon = serviceIconMap[service.icon]

	return (
		<motion.article
			variants={fadeUp}
			whileHover={{ y: -6 }}
			transition={{ type: "spring", stiffness: 300, damping: 22 }}
			className="group flex h-full flex-col rounded-2xl border border-ink/5 bg-white p-6 shadow-card transition-shadow hover:shadow-lift"
		>
			<span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
				<Icon className="h-6 w-6" />
			</span>
			<h3 className="mt-4 text-lg font-bold text-ink">{service.title}</h3>
			<p className="mt-2 text-sm leading-relaxed text-ink-soft">{service.summary}</p>
			{!compact ? (
				<ul className="mt-4 space-y-2">
					{service.bullets.map((bullet) => (
						<li key={bullet} className="flex items-start gap-2 text-sm text-ink-soft">
							<CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
							<span>{bullet}</span>
						</li>
					))}
				</ul>
			) : null}
		</motion.article>
	)
}
