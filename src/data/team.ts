import type { TeamMember } from "@/types"

/**
 * Team photos are auto-detected from `src/assets/teams/`.
 * The filename (without extension, lowercased) must match the member's slug.
 * e.g. `sundar-tamang.jpeg` → slug `sundar-tamang`
 * Members without a matching photo automatically show an initials avatar.
 */
const photoModules = import.meta.glob<string>("../assets/teams/*", {
	eager: true,
	import: "default",
})

function photoFor(slug: string): string | undefined {
	const entry = Object.entries(photoModules).find(([path]) => {
		const fileName = path.split("/").pop() ?? ""
		return fileName.replace(/\.[^.]+$/, "").toLowerCase() === slug.toLowerCase()
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
	member("suraj-dhungana", "Suraj Dhungana", "Chief Growth Manager", "SD"),
	member("om", "Om Rauniyar", "Advisor", "OM"),
	member("rauniyar", "Rohan Rauniyar", "Advisor", "RN"),
	member("devraj-raut", "Devraj Raut", "Team Lead", "DR"),
	member("khusi-bista", "Khusi Bista", "Content Creator", "KB"),
	member("samir-cha", "Samir Maharjan", "Lead Designer", "SM"),
	member("sundar-tamang", "Sundar Tamang", "Lead Videographer", "ST"),
	member("saloni-shah", "Saloni Shah", "Social Media Manager", "SS"),
	member("arpita-dangol", "Arpita Maharjan", "Social Media Manager", "AM"),
	member("ishan-kc", "Ishan KC", "Lead Editor", "IK"),
	member("sahil-shrestha", "Sahil Shrestha", "Video Editor", "SS"),
	member("ronit-shrestha", "Rohit Maharjan", "Video Editor", "RM"),
	member("umanga-shrestha", "Umanga Shrestha", "Video Editor", "US"),
]
