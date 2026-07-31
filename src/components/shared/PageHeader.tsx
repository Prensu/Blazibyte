import { motion } from "framer-motion"

import { Container } from "@/components/ui/Container"
import { staggerContainer, fadeUp } from "@/lib/motion"

interface PageHeaderProps {
	eyebrow: string
	title: string
	description?: string
}

/** Shared hero band for inner pages. */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
	return (
		<section className="relative overflow-hidden bg-surface-soft">
			<div
				aria-hidden
				className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-100/70 blur-3xl"
			/>
			<div
				aria-hidden
				className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-brand-50 blur-3xl"
			/>
			<Container className="relative py-16 text-center sm:py-20">
				<motion.div variants={staggerContainer} initial="hidden" animate="visible">
					<motion.p
						variants={fadeUp}
						className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-600"
					>
						{eyebrow}
					</motion.p>
					<motion.h1
						variants={fadeUp}
						className="text-balance text-4xl font-extrabold tracking-tight text-ink sm:text-5xl"
					>
						{title}
					</motion.h1>
					{description ? (
						<motion.p
							variants={fadeUp}
							className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-soft"
						>
							{description}
						</motion.p>
					) : null}
				</motion.div>
			</Container>
		</section>
	)
}
