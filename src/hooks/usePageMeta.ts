import { useEffect } from "react"

const SITE_TITLE = "Blazibyte Pvt. Ltd. | Creative Agency in Lalitpur, Nepal"

/** Sets the document title (and meta description) for a page. */
export function usePageMeta(title?: string, description?: string): void {
	useEffect(() => {
		document.title = title ? `${title} | Blazibyte Pvt. Ltd.` : SITE_TITLE

		if (description) {
			const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
			if (meta) meta.content = description
		}
	}, [title, description])
}
