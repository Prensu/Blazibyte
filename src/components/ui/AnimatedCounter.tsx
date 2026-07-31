import { animate, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface AnimatedCounterProps {
	value: number
	suffix?: string
	duration?: number
}

/** Counts up from 0 to `value` once the element scrolls into view. */
export function AnimatedCounter({ value, suffix = "", duration = 1.8 }: AnimatedCounterProps) {
	const ref = useRef<HTMLSpanElement>(null)
	const inView = useInView(ref, { once: true, margin: "-40px" })
	const [display, setDisplay] = useState(0)

	useEffect(() => {
		if (!inView) return
		const controls = animate(0, value, {
			duration,
			ease: "easeOut",
			onUpdate: (latest) => setDisplay(Math.round(latest)),
		})
		return () => controls.stop()
	}, [inView, value, duration])

	return (
		<span ref={ref}>
			{display}
			{suffix}
		</span>
	)
}
