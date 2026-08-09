import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
	type ReactNode,
} from "react"

/* ------------------------------------------------------------------ */
/*  Context – tracks which portfolio video (by item id) is active     */
/* ------------------------------------------------------------------ */

interface VideoPlayerContextValue {
	/** The id of the item whose video is currently playing, or `null`. */
	activeId: string | null
	/** Start playing a specific item's video (stops any other). */
	play: (id: string) => void
	/** Stop whichever video is currently playing. */
	stop: () => void
	/** Convenience check so consumers don't need to compare ids themselves. */
	isPlaying: (id: string) => boolean
}

const VideoPlayerContext = createContext<VideoPlayerContextValue | null>(null)

/* ------------------------------------------------------------------ */
/*  Provider                                                          */
/* ------------------------------------------------------------------ */

export function VideoPlayerProvider({ children }: { children: ReactNode }) {
	const [activeId, setActiveId] = useState<string | null>(null)

	const play = useCallback((id: string) => setActiveId(id), [])
	const stop = useCallback(() => setActiveId(null), [])
	const isPlaying = useCallback((id: string) => activeId === id, [activeId])

	const value = useMemo<VideoPlayerContextValue>(
		() => ({ activeId, play, stop, isPlaying }),
		[activeId, play, stop, isPlaying],
	)

	return (
		<VideoPlayerContext.Provider value={value}>
			{children}
		</VideoPlayerContext.Provider>
	)
}

/* ------------------------------------------------------------------ */
/*  Hook                                                              */
/* ------------------------------------------------------------------ */

export function useVideoPlayer(): VideoPlayerContextValue {
	const ctx = useContext(VideoPlayerContext)
	if (!ctx) {
		throw new Error(
			"useVideoPlayer must be used within a <VideoPlayerProvider>",
		)
	}
	return ctx
}
