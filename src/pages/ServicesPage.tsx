import { motion } from "framer-motion"

import { PageHeader } from "@/components/shared/PageHeader"
import { ServiceCard } from "@/components/shared/ServiceCard"
import { ProcessSection } from "@/components/sections/ProcessSection"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { Reveal } from "@/components/ui/Reveal"
import { WhatsAppIcon } from "@/components/ui/icons"
import { whatsappLink } from "@/config/site"
import { services } from "@/data/services"
import { usePageMeta } from "@/hooks/usePageMeta"
import { staggerContainer, viewportOnce } from "@/lib/motion"

export default function ServicesPage() {
	usePageMeta(
		"Our Services",
		"Video advertisements, social media content creation, professional video editing, personal branding, corporate events, graphic design and ads management — all under one roof.",
	)

	return (
		<>
			<PageHeader
				eyebrow="Our Services"
				title="Everything your brand needs to grow"
				description="From strategy to shoot to final edit — we handle the full content pipeline so you can focus on running your business."
			/>

			<section className="bg-white py-16 sm:py-24">
				<Container>
					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={viewportOnce}
						className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
					>
						{services.map((service) => (
							<ServiceCard key={service.slug} service={service} />
						))}
					</motion.div>

					<Reveal className="mt-12">
						<div className="flex flex-col items-center justify-between gap-4 rounded-3xl bg-surface-peach px-6 py-8 text-center sm:flex-row sm:text-left">
							<div>
								<h2 className="text-xl font-bold text-ink">Need a custom package?</h2>
								<p className="mt-1 text-sm text-ink-soft">
									Tell us your goals and budget — we’ll tailor a content plan for your brand.
								</p>
							</div>
							<Button
								href={whatsappLink(
									"Hello Blazibyte! I’d like a custom quote for my business.",
								)}
							>
								<WhatsAppIcon className="h-4 w-4" />
								Chat on WhatsApp
							</Button>
						</div>
					</Reveal>
				</Container>
			</section>

			<ProcessSection />
		</>
	)
}
