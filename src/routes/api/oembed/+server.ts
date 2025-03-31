import { url as siteURL } from '$lib/config'
import { getSEOData } from '$lib/seoData'
import { json } from '@sveltejs/kit'

export async function GET({ url }) {
	// Get the url query argument.
	const reqURL = url.searchParams.get('url')
	const path = reqURL?.replace(/https?\:\/\//, '').replace(siteURL, '') || '/'
	const seoData = await getSEOData(path)
	return json(seoData)
}
