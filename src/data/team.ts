import type { TeamMember } from "@/types"

/**
 * Team photos are auto-detected from `src/assets/teams/`.
 * Name each file after the member's id below (any image extension works),
 * e.g. `sundar-tamang.jpg`, `saloni-shah.jpeg`, `ishan-kc.png`.
 * Members without a matching photo automatically show an initials avatar.
 */
const photoModules = import.meta.glob<string>("../assets/teams/*", {
	eager: true,
	import: "default",
})

function photoFor(slug: string): string | undefined {
	const entry = Object.entries(photoModules).find(([path]) => {
		const fileName = path.split("/").pop() ?? ""
		return fileName.replace(/\.[^.]+$/, "").toLowerCase() === slug
	})
	return entry?.[1]
}

function member(slug: string, name: string, role: string, initials: string): TeamMember {
	return { id: slug, name, role, initials, photo: photoFor(slug) }
}

export const teamMembers: TeamMember[] = [
	// Founders
	member("bishnu-dai", "Bishnu Sanjel", "CEO / Co-founder", "BS"),
	member("prashant", "Prashanna Maharjan", "Marketing Manager / Co-founder", "PM"),
	member("nirjal", "Nirjal Bajagain", "Operational Manager / Co-founder", "NB"),

	// Team
	member("sundar-tamang", "Sundar Tamang", "Lead Videographer", "ST"),
	member("saloni-shah", "Saloni Shah", "Social Media Manager", "SS"),
	member("arpita-maharjan", "Arpita Maharjan", "Social Media Manager", "AM"),
	member("ishan-kc", "Ishan KC", "Lead Editor", "IK"),
	member("samir-maharjan", "Samir Maharjan", "Lead Designer", "SM"),
	member("sahil-shrestha", "Sahil Shrestha", "Video Editor", "SS"),
	member("rohit-maharjan", "Rohit Maharjan", "Video Editor", "RM"),
	member("umanga-shrestha", "Umanga Shrestha", "Video Editor", "US"),
	member("khusi-bista", "Khusi Bista", "Content Creator", "KB"),
	member("bidya-chapagain", "Bidya Chapagain", "Content Creator", "BC"),
]
