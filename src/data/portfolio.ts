import { cldVideo, cldVideoPoster } from "@/lib/cloudinary"
import type { PortfolioCategory, PortfolioItem } from "@/types"

/** Builds videoUrl + poster from a Cloudinary public ID (keep the version prefix). */
function video(publicId: string): Pick<PortfolioItem, "videoUrl" | "poster"> {
	return { videoUrl: cldVideo(publicId), poster: cldVideoPoster(publicId) }
}

export const portfolioCategories: Array<PortfolioCategory | "All"> = [
	"All",
	"Video Ads",
	"Reels & Social",
	"Real Estate",
]

export const portfolioItems: PortfolioItem[] = [
	{
		id: "teavana-herbs",
		title: "Teavana Herbs Brand Video",
		category: "Video Ads",
		description: "A crisp brand video produced for Teavana Herbs to lift awareness and engagement.",
		gradient: "from-brand-400 to-rose-500",
		...video("v1785394622/camo_1_jhu6ru"),
	},
	{
		id: "janaki-home-decors-promo",
		title: "Janaki Home Decors — Promo",
		category: "Video Ads",
		description: "A product-focused promo showcasing Janaki Home Decors’ collections.",
		gradient: "from-amber-400 to-orange-600",
		...video("v1785394591/janaki_home_decors_alnpbc"),
	},
	{
		id: "kshyama-devi-film",
		title: "Kshyama Devi — Promotional Film",
		category: "Video Ads",
		description: "A cinematic promotional film crafted for Kshyama Devi.",
		gradient: "from-sky-500 to-blue-700",
		...video("v1785394594/kshyama_devi_gcoavl"),
	},
	{
		id: "seo-growth-explainer",
		title: "SEO & Digital Growth — Explainer",
		category: "Reels & Social",
		description: "A snappy, social-first explainer about SEO and digital growth.",
		gradient: "from-fuchsia-500 to-purple-600",
		...video("v1785394623/seo_2_ecr77v"),
	},
	{
		id: "restaurant-social-media",
		title: "Restaurant Social Media",
		category: "Reels & Social",
		description:
			"Appetising social media reels for a restaurant — shot and edited to drive footfall and food orders.",
		gradient: "from-rose-400 to-pink-600",
		...video(
			"v1785424792/AQMh522Kj0Ayj0bhuwblG8vbayvpMk0pz-5LIt_3EGL0Lg53q2Sq-RFq1ROxIk6HFCEk4G4YFnRdXuSWuKhvzskrhaZu2m9oViw_jqplox",
		),
	},
	{
		id: "school-ads-video",
		title: "School Ads Video",
		category: "Video Ads",
		description:
			"An admissions-focused ad video for a school — showcasing campus life to reach parents and students.",
		gradient: "from-violet-500 to-indigo-600",
		...video(
			"v1785424792/AQPfIT-Up6rgIs-qIm_rAH4adMpAspc5TUaNu90a59mw5nVy5p3006315KUfpde_QPDppaP5cN3WYZ5HLOVhLK5Jtg0246bf86c_awr2mm",
		),
	},
	{
		id: "consultancy-informative-video",
		title: "Consultancy Informative Video",
		category: "Reels & Social",
		description:
			"An informative video for an education consultancy — explaining services clearly to build trust and enquiries.",
		gradient: "from-teal-400 to-emerald-600",
		...video(
			"v1785424795/AQMBN7XzF8IQiCvJpmT4oyK3M7OaskQFYpXyYJq0HwgoOowDM-0w9mRziq-MS-2jvfzyh8cNr2hRDoI_oW6H5cTygHhA479RkUY_ujbxro",
		),
	},
	{
		id: "real-estate-video",
		title: "Real Estate Video",
		category: "Real Estate",
		description:
			"A property showcase video — walkthrough shots and highlights that help listings sell faster.",
		gradient: "from-cyan-500 to-sky-700",
		...video("v1785424797/IMG_1904_oumres"),
	},
]
