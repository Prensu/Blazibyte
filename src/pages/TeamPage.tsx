import { motion } from "framer-motion"

import { PageHeader } from "@/components/shared/PageHeader"
import { TeamCard } from "@/components/shared/TeamCard"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { Reveal } from "@/components/ui/Reveal"
import { MailIcon } from "@/components/ui/icons"
import { siteConfig } from "@/config/site"
import { teamMembers } from "@/data/team"
import { usePageMeta } from "@/hooks/usePageMeta"
import { staggerContainer, viewportOnce } from "@/lib/motion"

export default function TeamPage() {
	usePageMeta(
		"Our Team",
		"Meet the creatives behind Blazibyte — directors, editors, strategists and designers helping brands across Nepal grow.",
	)

	return (
		<>
			<PageHeader
				eyebrow="Our Team"
				title="The creatives behind your content"
				description="A small, fast-moving team of directors, editors, strategists and designers — obsessed with making brands stand out."
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
						{teamMembers.map((member) => (
							<TeamCard key={member.id} member={member} />
						))}
					</motion.div>

					<Reveal className="mt-12">
						<div className="flex flex-col items-center justify-between gap-4 rounded-3xl bg-surface-peach px-6 py-8 text-center sm:flex-row sm:text-left">
							<div>
								<h2 className="text-xl font-bold text-ink">Want to join the team?</h2>
								<p className="mt-1 text-sm text-ink-soft">
									We’re always looking for talented editors, videographers and designers.
								</p>
							</div>
							<Button href={`mailto:${siteConfig.email}?subject=Joining the Blazibyte team`}>
								<MailIcon className="h-4 w-4" />
								Send Your Portfolio
							</Button>
						</div>
					</Reveal>
				</Container>
			</section>
		</>
	)
}
