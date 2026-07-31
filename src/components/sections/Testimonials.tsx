import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { ArrowLeftIcon, ArrowRightIcon, QuoteIcon, StarIcon } from "@/components/ui/icons"
import { testimonials } from "@/data/testimonials"
import { cn } from "@/lib/utils"

const AUTOPLAY_MS = 6000

/** Testimonials carousel — rendered on every page just before the footer. */
export function Testimonials() {
	const [index, setIndex] = useState(0)
	const [paused, setPaused] = useState(false)

	const active = testimonials[index]

	useEffect(() => {
		if (paused) return
		const timer = window.setInterval(() => {
			setIndex((current) => (current + 1) % testimonials.length)
		}, AUTOPLAY_MS)
		return () => window.clearInterval(timer)
	}, [paused])

	function previous() {
		setIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
	}

	function next() {
		setIndex((current) => (current + 1) % testimonials.length)
	}

	return (
		<section className="bg-white py-16 sm:py-24" aria-label="Client testimonials">
			<Container>
				<SectionHeading
					eyebrow="Testimonials"
					title="What our clients say"
					description="Real feedback from the businesses we’ve helped grow."
				/>

				<div
					className="relative mx-auto mt-12 max-w-3xl"
					onMouseEnter={() => setPaused(true)}
					onMouseLeave={() => setPaused(false)}
				>
					<AnimatePresence mode="wait">
						<motion.figure
							key={active.id}
							initial={{ opacity: 0, x: 48 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -48 }}
							transition={{ duration: 0.35, ease: "easeOut" }}
							className="rounded-3xl border border-ink/5 bg-surface-soft p-8 text-center shadow-card sm:p-10"
						>
							<QuoteIcon className="mx-auto h-8 w-8 text-brand-400" />
							<div className="mt-4 flex justify-center gap-1 text-brand-500">
								{Array.from({ length: active.rating }).map((_, starIndex) => (
									<StarIcon key={starIndex} className="h-5 w-5" />
								))}
							</div>
							<blockquote className="mt-5 text-lg font-medium leading-relaxed text-ink">
								“{active.quote}”
							</blockquote>
							<figcaption className="mt-6">
								<p className="font-bold text-ink">{active.name}</p>
								<p className="text-sm text-ink-soft">{active.company}</p>
							</figcaption>
						</motion.figure>
					</AnimatePresence>

					{/* Controls */}
					<div className="mt-8 flex items-center justify-center gap-4">
						<button
							type="button"
							onClick={previous}
							aria-label="Previous testimonial"
							className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink-soft transition-colors hover:border-brand-500 hover:text-brand-600"
						>
							<ArrowLeftIcon className="h-4 w-4" />
						</button>

						<div className="flex gap-2">
							{testimonials.map((testimonial, dotIndex) => (
								<button
									key={testimonial.id}
									type="button"
									onClick={() => setIndex(dotIndex)}
									aria-label={`Go to testimonial ${dotIndex + 1}`}
									className={cn(
										"h-2.5 rounded-full transition-all duration-300",
										dotIndex === index ? "w-7 bg-brand-500" : "w-2.5 bg-ink/15 hover:bg-ink/30",
									)}
								/>
							))}
						</div>

						<button
							type="button"
							onClick={next}
							aria-label="Next testimonial"
							className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink-soft transition-colors hover:border-brand-500 hover:text-brand-600"
						>
							<ArrowRightIcon className="h-4 w-4" />
						</button>
					</div>
				</div>
			</Container>
		</section>
	)
}
