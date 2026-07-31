import { motion } from "framer-motion"

import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { usePageMeta } from "@/hooks/usePageMeta"

export default function NotFoundPage() {
	usePageMeta("Page Not Found")

	return (
		<section className="bg-surface-soft py-24 sm:py-32">
			<Container className="text-center">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				>
					<p className="text-7xl font-extrabold text-brand-500 sm:text-8xl">404</p>
					<h1 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">
						This page seems to have wandered off
					</h1>
					<p className="mx-auto mt-3 max-w-md text-ink-soft">
						The page you’re looking for doesn’t exist or has been moved. Let’s get you back on
						track.
					</p>
					<div className="mt-8 flex justify-center">
						<Button to="/">Back to Home</Button>
					</div>
				</motion.div>
			</Container>
		</section>
	)
}
