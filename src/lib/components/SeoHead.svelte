<script>
	import { url as siteURL } from "$lib/config";
    import { MetaTags } from 'svelte-meta-tags';

    let { title, language, robots, description, type, thumbnail_url, thumbnail_width, thumbnail_height, provider_name, author_name, author_url, url } = $props();

    thumbnail_width = thumbnail_width || 1200;
    thumbnail_height = thumbnail_height || 630;
    url = url || siteURL;

    let oembedURL = siteURL + '/api/oembed?url=' + encodeURIComponent( url );
</script>

<MetaTags
  title={title}
  description={description}
  canonical={url}
  openGraph={{
    url: url,
    type: type || 'website',
    locale: language || 'en_US',
    title: title,
    description: description,
    images: [
      {
        url: thumbnail_url,
        width: thumbnail_width,
        height: thumbnail_height,
      },
    ],
    siteName: 'Sara Jones for School Board',
  }}
  twitter={{
    cardType: 'summary_large_image',
    title: title,
    description: description,
    image: thumbnail_url,
    imageAlt: title,
  }}
/>

<svelte:head>
    <meta name='language' content={language || 'EN'} />
    <meta name='robots' content={robots || 'index, follow'} />
    <link rel="alternate" title="oEmbed (JSON)" type="application/json+oembed" href={oembedURL}>
</svelte:head>
