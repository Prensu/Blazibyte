import { motion } from "framer-motion"

import { fadeUp } from "@/lib/motion"
import type { TeamMember } from "@/types"

interface TeamCardProps {
	member: TeamMember
}

export function TeamCard({ member }: TeamCardProps) {
	return (
		<motion.article
			variants={fadeUp}
			whileHover={{ y: -6 }}
			transition={{ type: "spring", stiffness: 300, damping: 22 }}
			className="flex h-full flex-col items-center rounded-2xl border border-ink/5 bg-white p-6 text-center shadow-card transition-shadow hover:shadow-lift"
		>
			{member.photo ? (
				<img
					src={member.photo}
					alt={member.name}
					loading="lazy"
					className="h-24 w-24 rounded-full border-2 border-brand-100 object-cover object-top"
				/>
			) : (
				<span className="flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-brand-400 to-brand-600 text-2xl font-extrabold text-white">
					{member.initials}
				</span>
			)}
			<h3 className="mt-4 text-lg font-bold text-ink">{member.name}</h3>
			<p className="text-sm font-semibold text-brand-600">{member.role}</p>
			<p className="mt-3 text-sm leading-relaxed text-ink-soft">{member.bio}</p>
		</motion.article>
	)
}
