import { motion } from "framer-motion"

/**
 * "Trusted by" logo strip — minimal, premium marquee. No boxes or cards:
 * large logos on a clean white band, blended onto the background so mixed
 * JPEG/PNG files all look uniform. Logos are auto-detected from
 * `src/assets/brands/`: drop image files in that folder and they appear
 * here, no code changes. Renders nothing while the folder is empty.
 */
const logoModules = import.meta.glob<string>("../../assets/brands/*", {
	eager: true,
	import: "default",
})

const logos = Object.entries(logoModules).map(([path, src]) => ({
	src,
	name: (path.split("/").pop() ?? "client").replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
}))

export function ClientLogos() {
	if (logos.length === 0) return null

	const marqueeLogos = [...logos, ...logos]

	return (
		<section className="bg-white py-14 sm:py-16" aria-label="Our clients">
			<div className="mx-auto mb-10 flex max-w-6xl items-center gap-6 px-6">
				<span className="h-px flex-1 bg-ink/10" />
				<p className="text-xs font-semibold tracking-[0.2em] text-ink-muted uppercase sm:text-sm">
					Trusted by brands across Nepal
				</p>
				<span className="h-px flex-1 bg-ink/10" />
			</div>

			<div className="relative overflow-hidden">
				{/* Edge fades */}
				<div
					aria-hidden
					className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-white to-transparent sm:w-32"
				/>
				<div
					aria-hidden
					className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-white to-transparent sm:w-32"
				/>

				<motion.div
					className="flex w-max items-center gap-16 pr-16 sm:gap-24 sm:pr-24"
					animate={{ x: ["0%", "-50%"] }}
					transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
				>
					{marqueeLogos.map((logo, index) => (
						<img
							key={`${logo.name}-${index}`}
							src={logo.src}
							alt={logo.name}
							loading="lazy"
							className="h-16 w-auto max-w-44 object-contain mix-blend-multiply sm:h-20 sm:max-w-52"
						/>
					))}
				</motion.div>
			</div>
		</section>
	)
}
