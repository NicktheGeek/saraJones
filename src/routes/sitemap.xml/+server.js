export async function GET() {
	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
			<url>
				<loc>https://www.sarajonesforschoolboard.com/</loc>
				<lastmod>2025-04-02</lastmod>
				<changefreq>daily</changefreq>
				<priority>1.0</priority>
			</url>
			<url>
				<loc>https://www.sarajonesforschoolboard.com/statements</loc>
				<lastmod>2025-04-02</lastmod>
				<changefreq>daily</changefreq>
				<priority>0.9</priority>
			</url>
			<url>
				<loc>https://www.sarajonesforschoolboard.com/donations</loc>
				<lastmod>2025-04-02</lastmod>
				<changefreq>daily</changefreq>
				<priority>0.9</priority>
			</url>
			<url>
				<loc>https://www.sarajonesforschoolboard.com/contact</loc>
				<lastmod>2025-04-02</lastmod>
				<changefreq>daily</changefreq>
				<priority>0.9</priority>
			</url>
			<url>
				<loc>https://www.sarajonesforschoolboard.com/statements/announcement-of-candidacy</loc>
				<lastmod>2025-04-01</lastmod>
				<changefreq>daily</changefreq>
				<priority>0.8</priority>
			</url>
			<url>
				<loc>https://www.sarajonesforschoolboard.com/accessibility</loc>
				<lastmod>2025-04-02</lastmod>
				<changefreq>daily</changefreq>
				<priority>0.8</priority>
			</url>
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
