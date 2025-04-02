<script lang="ts">
	import SeoHead from '$lib/components/SeoHead.svelte';
	import Signature from '$lib/components/Signature.svelte';
	import Star from '$lib/components/svgs/Star.svelte';
	import { formatDate } from '$lib/utils'

	let { data } = $props()
	let { seoData } = data;
</script>

<SeoHead
	title={seoData.title}
	language={seoData.language}
	robots={seoData.robots}
	description={seoData.description}
	type={seoData.type}
	thumbnail_url={seoData.thumbnail_url}
	thumbnail_width={seoData.thumbnail_width}
	thumbnail_height={seoData.thumbnail_height}
	provider_name={seoData.provider_name}
	author_name={seoData.author_name}
	author_url={seoData.author_url}
	url={seoData.url}
/>

<div class="wrapper">
	<article class="inner">
		<hgroup>
			<div>
				<h1>{data.meta.title}</h1>
				<p>Published on {formatDate(data.meta.date)}</p>
			</div>
			<figure class="author-image">
				<enhanced:img src="../../../assets/images/sara-jones-sq.jpg" alt="Sara Jones in a white blouse in front of the Front Royal gazebo." height=300 width=300 />
			</figure>
		</hgroup>

		<div class="prose">
			<data.content />
		</div>

		<Signature />
	</article>
</div>

<style>
	hgroup {
		width: 100%;
		max-width: 100%;
		display: flex;
		flex-direction: row-reverse;
		justify-content: left;
		align-items: center;
		gap: 2rem;

		.author-image {
			max-width: 150px;
			margin: 0;
			padding: 0;
			border-radius: 50%;
			border: 2px solid var(--text);
			overflow: hidden;

			img {
				width: 100%;
				height: auto;
				object-fit: cover;
				margin: 0;
				padding: 0;
			}

			@media (max-width: 768px) {
				max-width: 100px;
			}
		}
	}
	.wrapper {
		padding-top: 0;
		padding-bottom: 0;
		--gap: 0;
		--content-width: 800px;
	}

	article {
		margin-top: 2rem;

		h1 {
			text-transform: capitalize;
			margin-bottom: 0.75rem;
		}

		h1 + p {
			margin-bottom: 0;
		}
	}
</style>