import { AboutPreview } from "@/components/sections/AboutPreview"
import { ClientLogos } from "@/components/sections/ClientLogos"
import { Hero } from "@/components/sections/Hero"
import { PortfolioPreview } from "@/components/sections/PortfolioPreview"
import { ProcessSection } from "@/components/sections/ProcessSection"
import { ServicesPreview } from "@/components/sections/ServicesPreview"
import { usePageMeta } from "@/hooks/usePageMeta"

export default function HomePage() {
	usePageMeta(
		undefined,
		"Blazibyte is a creative agency in Lalitpur, Nepal crafting video ads, social media content and event coverage that help brands grow.",
	)

	return (
		<>
			<Hero />
			<ClientLogos />
			<ServicesPreview />
			<ProcessSection />
			<AboutPreview />
			<PortfolioPreview />
		</>
	)
}
