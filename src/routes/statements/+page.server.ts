import { getSEOData } from '$lib/seoData.js'
import type { Post } from '$lib/types'

export async function load({ fetch, url }) {
	const response = await fetch('api/posts')
	const posts: Post[] = await response.json()
	const seoData = await getSEOData('/statements');
	seoData.url = url.toString()
	return { posts, seoData }
}
