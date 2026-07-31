import type { SVGProps } from "react"

import type { IconName } from "@/types"

type IconProps = SVGProps<SVGSVGElement>

function StrokeIcon({ children, ...props }: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			{...props}
		>
			{children}
		</svg>
	)
}

function FillIcon({ children, ...props }: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true"
			{...props}
		>
			{children}
		</svg>
	)
}

export function VideoIcon(props: IconProps) {
	return (
		<StrokeIcon {...props}>
			<rect x="2" y="6" width="14" height="12" rx="2" />
			<path d="m16 10 6-3v10l-6-3z" />
		</StrokeIcon>
	)
}

export function MegaphoneIcon(props: IconProps) {
	return (
		<StrokeIcon {...props}>
			<path d="m3 11 18-5v12L3 13v-2z" />
			<path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
		</StrokeIcon>
	)
}

export function ScissorsIcon(props: IconProps) {
	return (
		<StrokeIcon {...props}>
			<circle cx="6" cy="6" r="3" />
			<circle cx="6" cy="18" r="3" />
			<path d="M20 4 8.12 15.88" />
			<path d="M14.47 14.48 20 20" />
			<path d="M8.12 8.12 12 12" />
		</StrokeIcon>
	)
}

export function SparklesIcon(props: IconProps) {
	return (
		<StrokeIcon {...props}>
			<path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3z" />
		</StrokeIcon>
	)
}

export function CalendarIcon(props: IconProps) {
	return (
		<StrokeIcon {...props}>
			<rect x="3" y="4" width="18" height="18" rx="2" />
			<path d="M16 2v4" />
			<path d="M8 2v4" />
			<path d="M3 10h18" />
		</StrokeIcon>
	)
}

export function PenToolIcon(props: IconProps) {
	return (
		<StrokeIcon {...props}>
			<path d="M12 19l7-7 3 3-7 7-3-3z" />
			<path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
			<path d="M2 2l7.586 7.586" />
			<circle cx="11" cy="11" r="2" />
		</StrokeIcon>
	)
}

export function TargetIcon(props: IconProps) {
	return (
		<StrokeIcon {...props}>
			<circle cx="12" cy="12" r="10" />
			<circle cx="12" cy="12" r="6" />
			<circle cx="12" cy="12" r="2" />
		</StrokeIcon>
	)
}

export function CameraIcon(props: IconProps) {
	return (
		<StrokeIcon {...props}>
			<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
			<circle cx="12" cy="13" r="4" />
		</StrokeIcon>
	)
}

export function StarIcon(props: IconProps) {
	return (
		<FillIcon {...props}>
			<path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
		</FillIcon>
	)
}

export function ArrowRightIcon(props: IconProps) {
	return (
		<StrokeIcon {...props}>
			<path d="M5 12h14" />
			<path d="m12 5 7 7-7 7" />
		</StrokeIcon>
	)
}

export function ArrowLeftIcon(props: IconProps) {
	return (
		<StrokeIcon {...props}>
			<path d="M19 12H5" />
			<path d="m12 19-7-7 7-7" />
		</StrokeIcon>
	)
}

export function ChevronDownIcon(props: IconProps) {
	return (
		<StrokeIcon {...props}>
			<path d="m6 9 6 6 6-6" />
		</StrokeIcon>
	)
}

export function PhoneIcon(props: IconProps) {
	return (
		<StrokeIcon {...props}>
			<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
		</StrokeIcon>
	)
}

export function MailIcon(props: IconProps) {
	return (
		<StrokeIcon {...props}>
			<rect x="2" y="4" width="20" height="16" rx="2" />
			<path d="m22 7-10 5L2 7" />
		</StrokeIcon>
	)
}

export function MapPinIcon(props: IconProps) {
	return (
		<StrokeIcon {...props}>
			<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
			<circle cx="12" cy="10" r="3" />
		</StrokeIcon>
	)
}

export function ClockIcon(props: IconProps) {
	return (
		<StrokeIcon {...props}>
			<circle cx="12" cy="12" r="10" />
			<path d="M12 6v6l4 2" />
		</StrokeIcon>
	)
}

export function MenuIcon(props: IconProps) {
	return (
		<StrokeIcon {...props}>
			<path d="M4 6h16" />
			<path d="M4 12h16" />
			<path d="M4 18h16" />
		</StrokeIcon>
	)
}

export function CloseIcon(props: IconProps) {
	return (
		<StrokeIcon {...props}>
			<path d="M18 6 6 18" />
			<path d="m6 6 12 12" />
		</StrokeIcon>
	)
}

export function PlayIcon(props: IconProps) {
	return (
		<FillIcon {...props}>
			<path d="M6 3l14 9-14 9V3z" />
		</FillIcon>
	)
}

export function CheckIcon(props: IconProps) {
	return (
		<StrokeIcon {...props}>
			<path d="M20 6 9 17l-5-5" />
		</StrokeIcon>
	)
}

export function QuoteIcon(props: IconProps) {
	return (
		<FillIcon {...props}>
			<path d="M7.2 17c-2.1 0-3.7-1.7-3.7-3.9C3.5 9.5 6 6.8 9.2 6l.8 1.6c-2 .8-3.2 2.1-3.4 3.6.3-.1.7-.2 1-.2 1.8 0 3.1 1.3 3.1 3.1 0 1.7-1.5 2.9-3.5 2.9z" />
			<path d="M17.2 17c-2.1 0-3.7-1.7-3.7-3.9 0-3.6 2.5-6.3 5.7-7.1l.8 1.6c-2 .8-3.2 2.1-3.4 3.6.3-.1.7-.2 1-.2 1.8 0 3.1 1.3 3.1 3.1 0 1.7-1.5 2.9-3.5 2.9z" />
		</FillIcon>
	)
}

export function FacebookIcon(props: IconProps) {
	return (
		<FillIcon {...props}>
			<path d="M14 8.5V7a1.5 1.5 0 0 1 1.5-1.5H17V2h-3a4 4 0 0 0-4 4v2.5H7.5V12H10v10h4V12h2.6l.9-3.5H14z" />
		</FillIcon>
	)
}

export function InstagramIcon(props: IconProps) {
	return (
		<StrokeIcon {...props}>
			<rect x="2" y="2" width="20" height="20" rx="5" />
			<circle cx="12" cy="12" r="4" />
			<circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
		</StrokeIcon>
	)
}

export function TikTokIcon(props: IconProps) {
	return (
		<FillIcon {...props}>
			<path d="M16.6 3c.4 2.1 1.8 3.7 3.9 4.1v3.2c-1.4 0-2.8-.5-3.9-1.3v6.5c0 3.6-2.6 6.2-6 6.2-3.2 0-5.6-2.3-5.6-5.3 0-3 2.4-5.4 5.5-5.4.4 0 .8 0 1.1.1v3.3c-.3-.1-.7-.2-1.1-.2-1.4 0-2.4 1-2.4 2.2s1 2.2 2.5 2.2c1.6 0 2.8-1.3 2.8-3.3V3h3.2z" />
		</FillIcon>
	)
}

export function WhatsAppIcon(props: IconProps) {
	return (
		<FillIcon {...props}>
			<path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2-1.2-.8-.7-1.3-1.5-1.4-1.8-.2-.3 0-.4.1-.5l.4-.5c.1-.1.2-.3.3-.4.1-.2 0-.3 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.5 1 2.6c.1.2 1.8 2.8 4.3 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3z" />
		</FillIcon>
	)
}

/** Maps data-level icon names to components (used by service cards). */
export const serviceIconMap: Record<IconName, (props: IconProps) => JSX.Element> = {
	video: VideoIcon,
	megaphone: MegaphoneIcon,
	scissors: ScissorsIcon,
	sparkles: SparklesIcon,
	calendar: CalendarIcon,
	penTool: PenToolIcon,
	target: TargetIcon,
	camera: CameraIcon,
}
