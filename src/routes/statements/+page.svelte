<script lang="ts">
	import { formatDate } from '$lib/utils'
	import StrongerSchools from '$lib/components/home/StrongerSchools.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import { getDefaultSEOData } from "$lib/seoData";

	let { data } = $props()
	const seoData = getDefaultSEOData();
	seoData.title = "Contact Sara Jones for School Board";
	seoData.description = "";
</script>

<SeoHead
	title={seoData.title}
	description={seoData.description}
	type={seoData.type}
	thumbnail_url={seoData.thumbnail_url}
	thumbnail_width={seoData.thumbnail_width}
	thumbnail_height={seoData.thumbnail_height}
/>

<section class="wrapper">
	<div class="inner">
		<h1 class="title">Statements from Sara Jones for Warren County Virginia School Board</h1>
		<StrongerSchools />
		<ul class="posts">
			{#each data.posts as post}
				<li class="post">
					<a href={`/statements/${post.slug}`} class="post-link" aria-label={post.title}></a>
					<h2 class="post-title">{post.title}</h2>
					<p class="date">{formatDate(post.date)}</p>
					<p class="description">{post.description}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>

	.title {
		width: 100%;
		padding: 1.5rem 1rem;
		text-align: center;
		background-color: var(--bg);
	}
	.posts {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		gap: 2rem;
	}

	.post {
		flex: 1 1 32%;
		max-width: 500px;
		margin: 0 auto;
		padding: 2rem;
		text-align: center;
		background-color: var(--bg);
		border-radius: 1rem;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		border: 2px solid var(--text);
		position: relative;

		.post-link {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;

			&:hover,
			&:focus {
				+ .post-title {
					text-decoration: underline;
				}
			}
		}

		*:not(a) {
			pointer-events: none;
		}

		.post-title {
			font-size: 2rem;
			margin: 0;
			padding: 0.5rem 0;
			text-transform: capitalize;
		}

	}
</style>
