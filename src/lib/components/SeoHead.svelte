<script>
	import { url as siteURL } from "$lib/config";

    let { title, language, robots, description, type, thumbnail_url, thumbnail_width, thumbnail_height, provider_name, author_name, author_url, url } = $props();

    thumbnail_width = thumbnail_width || 1200;
    thumbnail_height = thumbnail_height || 630;
    url = url || siteURL;

    let oembedURL = siteURL + '/api/oembed?url=' + encodeURIComponent( url );
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="alternate" title="oEmbed (JSON)" type="application/json+oembed" href={oembedURL}>
    <meta name='language' content={language || 'EN'} />
    <meta name='robots' content={robots || 'index, follow'} />
    <meta property="og:title" content={title} />
    <meta property="og:type" content={type || 'website'} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={thumbnail_url} />
    <meta property="og:image:width" content={thumbnail_width.toString()} />
    <meta property="og:image:height" content={thumbnail_height.toString()} />
    <meta property="og:site_name" content={provider_name} />
    <meta property="og:author" content={author_name} />
    <meta property="og:author:url" content={author_url} />
</svelte:head>
