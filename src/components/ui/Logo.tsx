import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"

/**
 * Auto-detects the real logo: drop a file named `my-logo.png` (or .svg/.webp/.jpg)
 * into `src/assets/` and it replaces the placeholder everywhere — no code changes.
 * For dark backgrounds (footer), drop a light variant named `logo-1.png`
 * (or .svg/.webp/.jpg) and it is used automatically wherever `dark` is set.
 * Until then, the "B" + wordmark placeholder is shown.
 */
const logoModules = import.meta.glob<string>("../../assets/my-logo.*", {
	eager: true,
	import: "default",
})
const darkLogoModules = import.meta.glob<string>("../../assets/logo-1.*", {
	eager: true,
	import: "default",
})

const logoSrc: string | undefined = Object.values(logoModules)[0]
const darkLogoSrc: string | undefined = Object.values(darkLogoModules)[0]

interface LogoProps {
	/** Set true on dark backgrounds (footer). */
	dark?: boolean
}

export function Logo({ dark = false }: LogoProps) {
	const src = dark ? (darkLogoSrc ?? logoSrc) : logoSrc

	return (
		<Link to="/" className="flex items-center gap-2" aria-label="Blazibyte home">
			{src ? (
				<img src={src} alt="Blazibyte" className="h-9 w-auto" />
			) : (
				<>
					<span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-lg font-extrabold text-white">
						B
					</span>
					<span
						className={cn(
							"text-lg font-extrabold tracking-tight",
							dark ? "text-white" : "text-ink",
						)}
					>
						Blazi<span className={dark ? "text-brand-400" : "text-brand-500"}>byte</span>
					</span>
				</>
			)}
		</Link>
	)
}
