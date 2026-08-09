import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

import { PageHeader } from "@/components/shared/PageHeader"
import { PortfolioCard } from "@/components/shared/PortfolioCard"
import { Container } from "@/components/ui/Container"
import { portfolioCategories, portfolioItems } from "@/data/portfolio"
import { usePageMeta } from "@/hooks/usePageMeta"
import { VideoPlayerProvider } from "@/hooks/useVideoPlayer"
import { cn } from "@/lib/utils"

export default function PortfolioPage() {
	usePageMeta(
		"Our Portfolio",
		"Explore Blazibyte’s work — video ads, reels, real estate showcases, event coverage and brand design for businesses across Nepal.",
	)

	const [activeCategory, setActiveCategory] = useState<(typeof portfolioCategories)[number]>("All")

	const visibleItems =
		activeCategory === "All"
			? portfolioItems
			: portfolioItems.filter((item) => item.category === activeCategory)

	return (
		<>
			<PageHeader
				eyebrow="Our Portfolio"
				title="Work that speaks for itself"
				description="Campaigns, reels and films we’ve crafted for brands across Nepal. Filter by category to explore."
			/>

			<section className="bg-white py-16 sm:py-24">
				<Container>
					{/* Category filter */}
					<div className="flex flex-wrap justify-center gap-2">
						{portfolioCategories.map((category) => (
							<button
								key={category}
								type="button"
								onClick={() => setActiveCategory(category)}
								className={cn(
									"rounded-full px-4 py-2 text-sm font-semibold transition-colors",
									activeCategory === category
										? "bg-brand-500 text-white shadow-card"
										: "bg-brand-50 text-ink-soft hover:bg-brand-100 hover:text-ink",
								)}
							>
								{category}
							</button>
						))}
					</div>

					{/* Grid */}
					<VideoPlayerProvider>
						<motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							<AnimatePresence mode="popLayout">
								{visibleItems.map((item) => (
									<motion.div
										key={item.id}
										layout
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 0.9 }}
										transition={{ duration: 0.3, ease: "easeOut" }}
									>
										<PortfolioCard item={item} />
									</motion.div>
								))}
							</AnimatePresence>
						</motion.div>
					</VideoPlayerProvider>

					<p className="mt-10 text-center text-sm text-ink-muted">
						Want to see full case studies or raw samples? Message us — we’ll share work relevant
						to your industry.
					</p>
				</Container>
			</section>
		</>
	)
}
