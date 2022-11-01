export function extractIdFromUrl(url: string | undefined) {
	if (!url) return undefined

	return url
		.split('/')
		.filter(el => el)
		.pop() as string
}
