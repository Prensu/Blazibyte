/**
 * Cloudinary delivery helpers — no API key needed: these build public
 * delivery URLs only. Uploads are done manually in the Cloudinary dashboard.
 */
const CLOUD_NAME = "dothc374l"
const VIDEO_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload`

/**
 * Streamable MP4 URL for a video public ID (include the version prefix),
 * e.g. cldVideo("v1785394116/front_f6g6o6").
 * q_auto lets Cloudinary pick the best quality/size tradeoff, and the .mp4
 * extension transcodes .mov uploads to a web-safe format on the fly.
 */
export function cldVideo(publicId: string): string {
	return `${VIDEO_BASE}/q_auto/${publicId}.mp4`
}

/**
 * Poster/thumbnail JPEG generated from the video's first frame (so_0).
 */
export function cldVideoPoster(publicId: string): string {
	return `${VIDEO_BASE}/so_0,w_960,q_auto,f_auto/${publicId}.jpg`
}
