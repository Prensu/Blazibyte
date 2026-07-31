import { motion } from "framer-motion"

import { ServiceCard } from "@/components/shared/ServiceCard"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { ArrowRightIcon } from "@/components/ui/icons"
import { services } from "@/data/services"
import { staggerContainer, viewportOnce } from "@/lib/motion"

export function ServicesPreview() {
	return (
		<section className="bg-white py-16 sm:py-24">
			<Container>
				<SectionHeading
					eyebrow="Our Services"
					title="What we do best"
					description="From scroll-stopping video ads to full social media management — everything your brand needs to grow online."
				/>

				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={viewportOnce}
					className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
				>
					{services.slice(0, 4).map((service) => (
						<ServiceCard key={service.slug} service={service} compact />
					))}
				</motion.div>

				<div className="mt-10 text-center">
					<Button to="/services" variant="outline">
						View All Services
						<ArrowRightIcon className="h-4 w-4" />
					</Button>
				</div>
			</Container>
		</section>
	)
}
