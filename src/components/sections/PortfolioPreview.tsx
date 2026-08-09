import { motion } from "framer-motion"

import { PortfolioCard } from "@/components/shared/PortfolioCard"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { ArrowRightIcon } from "@/components/ui/icons"
import { portfolioItems } from "@/data/portfolio"
import { VideoPlayerProvider } from "@/hooks/useVideoPlayer"
import { staggerContainer, viewportOnce } from "@/lib/motion"

export function PortfolioPreview() {
	return (
		<section className="bg-surface-soft py-16 sm:py-24">
			<Container>
				<SectionHeading
					eyebrow="Our Portfolio"
					title="Work that speaks for itself"
					description="A glimpse of the campaigns, reels and event films we’ve crafted for brands across Nepal."
				/>

				<VideoPlayerProvider>
					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={viewportOnce}
						className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
					>
						{portfolioItems.slice(0, 3).map((item) => (
							<PortfolioCard key={item.id} item={item} />
						))}
					</motion.div>
				</VideoPlayerProvider>

				<div className="mt-10 text-center">
					<Button to="/portfolio" variant="outline">
						View Full Portfolio
						<ArrowRightIcon className="h-4 w-4" />
					</Button>
				</div>
			</Container>
		</section>
	)
}
