import { motion } from "framer-motion"

import { PageHeader } from "@/components/shared/PageHeader"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { ArrowRightIcon } from "@/components/ui/icons"
import { siteConfig } from "@/config/site"
import { stats, whyChooseUs } from "@/data/stats"
import { usePageMeta } from "@/hooks/usePageMeta"
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion"

export default function AboutPage() {
	usePageMeta(
		"About Us",
		"Learn about Blazibyte Pvt. Ltd. — a creative agency in Lalitpur, Nepal helping businesses grow with engaging visual content and strategic marketing.",
	)

	return (
		<>
			<PageHeader
				eyebrow="About Us"
				title="The team behind the content"
				description={siteConfig.description}
			/>

			{/* Story */}
			<section className="bg-white py-16 sm:py-24">
				<Container className="grid gap-12 lg:grid-cols-2">
					<Reveal>
						<h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
							Our story
						</h2>
						<p className="mt-4 leading-relaxed text-ink-soft">
							Blazibyte started with a simple belief: every business — big or small — deserves
							content that actually works. From our base in {siteConfig.address}, we partner with
							restaurants, real estate developers, retailers and founders across Nepal to turn
							ideas into videos, reels and campaigns that people remember.
						</p>
						<p className="mt-4 leading-relaxed text-ink-soft">
							We combine creative storytelling with a business-first mindset — fast delivery,
							high-quality production and solutions customized to every brand we work with.
						</p>
						<div className="mt-8">
							<Button to="/team">
								Meet Our Team
								<ArrowRightIcon className="h-4 w-4" />
							</Button>
						</div>
					</Reveal>

					<Reveal delay={0.15}>
						<div className="grid gap-4 sm:grid-cols-2">
							<div className="rounded-2xl bg-surface-peach p-6">
								<h3 className="text-lg font-bold text-ink">Our Mission</h3>
								<p className="mt-2 text-sm leading-relaxed text-ink-soft">
									Help businesses build a strong digital presence through engaging visual content
									and strategic marketing.
								</p>
							</div>
							<div className="rounded-2xl bg-brand-500 p-6 text-white">
								<h3 className="text-lg font-bold">Our Vision</h3>
								<p className="mt-2 text-sm leading-relaxed text-white/90">
									Become Nepal’s most trusted creative partner for brands that want to stand out
									online.
								</p>
							</div>
							<div className="rounded-2xl border border-ink/5 bg-white p-6 shadow-card sm:col-span-2">
								<h3 className="text-lg font-bold text-ink">What drives us</h3>
								<p className="mt-2 text-sm leading-relaxed text-ink-soft">
									Creativity, speed and results. If your content doesn’t help your business grow,
									we haven’t done our job.
								</p>
							</div>
						</div>
					</Reveal>
				</Container>
			</section>

			{/* Why choose us */}
			<section className="bg-surface-soft py-16 sm:py-24">
				<Container>
					<SectionHeading
						eyebrow="Why Choose Us"
						title="Five reasons brands stick with us"
					/>
					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={viewportOnce}
						className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
					>
						{whyChooseUs.map((reason, index) => (
							<motion.div
								key={reason.title}
								variants={fadeUp}
								className="rounded-2xl border border-ink/5 bg-white p-6 shadow-card"
							>
								<span className="text-3xl font-extrabold text-brand-200">
									{String(index + 1).padStart(2, "0")}
								</span>
								<h3 className="mt-2 text-lg font-bold text-ink">{reason.title}</h3>
								<p className="mt-2 text-sm leading-relaxed text-ink-soft">
									{reason.description}
								</p>
							</motion.div>
						))}
					</motion.div>
				</Container>
			</section>

			{/* Stats */}
			<section className="bg-white py-16 sm:py-20">
				<Container>
					<Reveal>
						<div className="grid gap-6 rounded-3xl bg-ink px-6 py-10 text-center sm:grid-cols-2 sm:px-10 lg:grid-cols-4">
							{stats.map((stat) => (
								<div key={stat.label}>
									<p className="text-4xl font-extrabold text-brand-400">
										<AnimatedCounter value={stat.value} suffix={stat.suffix} />
									</p>
									<p className="mt-1 text-sm font-medium text-white/70">{stat.label}</p>
								</div>
							))}
						</div>
					</Reveal>
				</Container>
			</section>
		</>
	)
}
