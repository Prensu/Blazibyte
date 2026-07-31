import { motion } from "framer-motion"

import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"
import { Reveal } from "@/components/ui/Reveal"
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons"
import { stats, whyChooseUs } from "@/data/stats"
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion"

export function AboutPreview() {
	return (
		<section className="bg-white py-16 sm:py-24">
			<Container className="grid items-center gap-12 lg:grid-cols-2">
				{/* Stats visual */}
				<Reveal>
					<div className="grid grid-cols-2 gap-4">
						{stats.map((stat, index) => (
							<div
								key={stat.label}
								className={
									index % 2 === 0
										? "rounded-2xl bg-surface-peach p-6 sm:p-8"
										: "rounded-2xl bg-brand-500 p-6 text-white sm:p-8"
								}
							>
								<p
									className={
										index % 2 === 0
											? "text-3xl font-extrabold text-ink sm:text-4xl"
											: "text-3xl font-extrabold sm:text-4xl"
									}
								>
									<AnimatedCounter value={stat.value} suffix={stat.suffix} />
								</p>
								<p
									className={
										index % 2 === 0
											? "mt-1 text-sm font-medium text-ink-soft"
											: "mt-1 text-sm font-medium text-white/85"
									}
								>
									{stat.label}
								</p>
							</div>
						))}
					</div>
				</Reveal>

				{/* Copy */}
				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={viewportOnce}
				>
					<motion.p
						variants={fadeUp}
						className="text-sm font-semibold uppercase tracking-widest text-brand-600"
					>
						About Blazibyte
					</motion.p>
					<motion.h2
						variants={fadeUp}
						className="mt-3 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl"
					>
						A creative team obsessed with your brand’s growth
					</motion.h2>
					<motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-ink-soft">
						Based in Mahalaxmisthan, Lalitpur, we help businesses across Nepal build a strong
						digital presence with engaging visual content and strategic marketing.
					</motion.p>

					<motion.ul variants={fadeUp} className="mt-6 space-y-3">
						{whyChooseUs.slice(0, 4).map((reason) => (
							<li key={reason.title} className="flex items-start gap-3">
								<span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
									<CheckIcon className="h-3.5 w-3.5" />
								</span>
								<span className="text-sm font-medium text-ink">{reason.title}</span>
							</li>
						))}
					</motion.ul>

					<motion.div variants={fadeUp} className="mt-8">
						<Button to="/about">
							More About Us
							<ArrowRightIcon className="h-4 w-4" />
						</Button>
					</motion.div>
				</motion.div>
			</Container>
		</section>
	)
}
