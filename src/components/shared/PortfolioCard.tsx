import { motion } from "framer-motion"
import { useState } from "react"

import { PlayIcon } from "@/components/ui/icons"
import { fadeUp } from "@/lib/motion"
import { cn } from "@/lib/utils"
import type { PortfolioItem } from "@/types"

interface PortfolioCardProps {
	item: PortfolioItem
}

export function PortfolioCard({ item }: PortfolioCardProps) {
	const [playing, setPlaying] = useState(false)

	return (
		<motion.article
			variants={fadeUp}
			layout
			whileHover={{ y: -6 }}
			transition={{ type: "spring", stiffness: 300, damping: 22 }}
			className="group overflow-hidden rounded-2xl border border-ink/5 bg-white shadow-card transition-shadow hover:shadow-lift"
		>
			{item.videoUrl ? (
				<div className="relative aspect-video bg-ink">
					{playing ? (
						<video
							src={item.videoUrl}
							poster={item.poster}
							controls
							autoPlay
							playsInline
							className="h-full w-full object-contain"
						/>
					) : (
						<button
							type="button"
							onClick={() => setPlaying(true)}
							aria-label={`Play ${item.title}`}
							className="group/play relative block h-full w-full cursor-pointer"
						>
							{item.poster ? (
								<img
									src={item.poster}
									alt={item.title}
									loading="lazy"
									className="h-full w-full object-cover"
								/>
							) : null}
							<span className="absolute inset-0 flex items-center justify-center bg-ink/10 transition-colors group-hover/play:bg-ink/20">
								<span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-sm transition-transform duration-300 group-hover/play:scale-110">
									<PlayIcon className="ml-1 h-6 w-6" />
								</span>
							</span>
							<span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink">
								{item.category}
							</span>
						</button>
					)}
				</div>
			) : (
				<div
					className={cn(
						"relative flex aspect-video items-center justify-center bg-linear-to-br",
						item.gradient,
					)}
				>
					<span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink">
						{item.category}
					</span>
					<span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
						<PlayIcon className="ml-1 h-6 w-6" />
					</span>
				</div>
			)}
			<div className="p-5">
				<h3 className="text-base font-bold text-ink">{item.title}</h3>
				<p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.description}</p>
			</div>
		</motion.article>
	)
}
