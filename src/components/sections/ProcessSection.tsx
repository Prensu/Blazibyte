import { motion } from "framer-motion"

import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { processSteps } from "@/data/process"
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion"

export function ProcessSection() {
	return (
		<section className="bg-surface-peach py-16 sm:py-24">
			<Container>
				<SectionHeading
					eyebrow="How It Works"
					title="A simple 4-step process"
					description="Working with Blazibyte is easy — from the first message to final delivery, we keep it fast and transparent."
				/>

				<motion.ol
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={viewportOnce}
					className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
				>
					{processSteps.map((step) => (
						<motion.li
							key={step.step}
							variants={fadeUp}
							className="relative rounded-2xl bg-white p-6 shadow-card"
						>
							<span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-lg font-extrabold text-white">
								{step.step}
							</span>
							<h3 className="mt-4 text-lg font-bold text-ink">{step.title}</h3>
							<p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
						</motion.li>
					))}
				</motion.ol>
			</Container>
		</section>
	)
}
