export async function GET() {
	return new Response(
		`
User-agent: *
Allow: /

Sitemap: https://www.sarajonesforschoolboard.com/sitemap.xml
`.trim(),
		{
			headers: {
				'Content-Type': 'text/plain'
			}
		}
	);
}
