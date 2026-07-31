import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { ArrowRightIcon, StarIcon, VideoIcon } from "@/components/ui/icons"
import { siteConfig } from "@/config/site"
import { cldVideo, cldVideoPoster } from "@/lib/cloudinary"
import { fadeUp, staggerContainer } from "@/lib/motion"

const HERO_VIDEO_ID = "v1785394116/front_f6g6o6"

export function Hero() {
	const [muted, setMuted] = useState(true)

	return (
		<section className="relative overflow-hidden bg-surface-soft">
			{/* Decorative background */}
			<div
				aria-hidden
				className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-100/80 blur-3xl"
			/>
			<div
				aria-hidden
				className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-brand-50 blur-3xl"
			/>

			<Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
				{/* Copy */}
				<motion.div variants={staggerContainer} initial="hidden" animate="visible">
					<motion.p
						variants={fadeUp}
						className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-sm font-semibold text-brand-600"
					>
						<VideoIcon className="h-4 w-4" />
						Creative Agency · Lalitpur, Nepal
					</motion.p>

					<motion.h1
						variants={fadeUp}
						className="mt-5 text-4xl leading-tight font-extrabold tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl"
					>
						We create content that makes your brand{" "}
						<span className="text-brand-500">stand out</span>
					</motion.h1>

					<motion.p
						variants={fadeUp}
						className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
					>
						{siteConfig.description} High-quality videos and content that capture attention,
						increase engagement, and help brands grow.
					</motion.p>

					<motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
						<Button to="/contact" size="lg">
							Get Started
							<ArrowRightIcon className="h-4 w-4" />
						</Button>
						<Button to="/portfolio" variant="outline" size="lg">
							View Our Work
						</Button>
					</motion.div>

					<motion.div
						variants={fadeUp}
						className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-ink-soft"
					>
						<span>✓ Creative & Modern Visuals</span>
						<span>✓ Fast Delivery</span>
						<span>✓ High-Quality Production</span>
					</motion.div>
				</motion.div>

				{/* Visual — real showreel video, autoplaying muted like hotel-site heroes */}
				<motion.div
					initial={{ opacity: 0, scale: 0.94 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
					className="relative mx-auto w-full max-w-lg"
				>
					<div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink shadow-lift">
						<video
							src={cldVideo(HERO_VIDEO_ID)}
							poster={cldVideoPoster(HERO_VIDEO_ID)}
							autoPlay
							muted={muted}
							loop
							playsInline
							className="h-full w-full object-cover"
						/>
						<p className="absolute right-5 bottom-5 left-5 text-sm font-semibold text-white/90 drop-shadow">
							Video Ads · Reels · Events · Branding
						</p>
						<button
							type="button"
							onClick={() => setMuted((m) => !m)}
							aria-label={muted ? "Unmute video" : "Mute video"}
							className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink/50 text-white backdrop-blur-sm transition-colors hover:bg-ink/70"
						>
							{muted ? (
								<svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
									<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z" />
								</svg>
							) : (
								<svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
									<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
								</svg>
							)}
						</button>
					</div>

					{/* Floating chips */}
					<motion.div
						animate={{ y: [0, -10, 0] }}
						transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
						className="absolute top-6 -left-4 rounded-2xl bg-white px-4 py-3 shadow-lift sm:-left-8"
					>
						<p className="text-xl font-extrabold text-ink">300+</p>
						<p className="text-xs font-medium text-ink-soft">Reels Produced</p>
					</motion.div>

					<motion.div
						animate={{ y: [0, 10, 0] }}
						transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
						className="absolute -right-2 -bottom-5 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lift sm:-right-6"
					>
						<span className="flex text-brand-500">
							{[1, 2, 3, 4, 5].map((star) => (
								<StarIcon key={star} className="h-4 w-4" />
							))}
						</span>
						<p className="text-xs font-semibold text-ink">Loved by clients</p>
					</motion.div>
				</motion.div>
			</Container>
		</section>
	)
}
