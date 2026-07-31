import { Route, Routes } from "react-router-dom"

import { Layout } from "@/components/layout/Layout"
import AboutPage from "@/pages/AboutPage"
import ContactPage from "@/pages/ContactPage"
import HomePage from "@/pages/HomePage"
import NotFoundPage from "@/pages/NotFoundPage"
import PortfolioPage from "@/pages/PortfolioPage"
import ServicesPage from "@/pages/ServicesPage"
import TeamPage from "@/pages/TeamPage"

export default function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="services" element={<ServicesPage />} />
				<Route path="portfolio" element={<PortfolioPage />} />
				<Route path="team" element={<TeamPage />} />
				<Route path="contact" element={<ContactPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	)
}
