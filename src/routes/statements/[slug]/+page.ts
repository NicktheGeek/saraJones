/// file: src/routes/blog/[slug]/+page.js
import { getSEOData } from '$lib/seoData.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ url, params, route }) {
	try {
		const post = await import(`../../../posts/${params.slug}.md`)
		const seoData = await getSEOData(route.id);
		seoData.url = url.toString();

		return {
			content: post.default,
			meta: post.metadata,
			seoData: { ...seoData, ...post.metadata },
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}
