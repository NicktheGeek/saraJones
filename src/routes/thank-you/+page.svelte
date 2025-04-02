<script>
	import SeoHead from "$lib/components/SeoHead.svelte";
	import Signature from "$lib/components/Signature.svelte";
	let { data } = $props();
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
<section class="wrapper">
	<div class="inner">
		<h1>Thank you for reaching out to <span class="basic-information website-name">Sara Jones for School Board</span></h1>
		<div class="content">
			<figure class="author-image">
				<enhanced:img src="../../assets/images/sara-jones-sq.jpg" alt="Sara Jones in a white blouse in front of the Front Royal gazebo." height=300 width=300 />
			</figure>
			<div>
				<p>I'll be reading your message soon. I’m running for school board to strengthen the education and increase the opportunities for growth for all children of this community. As a member of this community, I value your input.</p>
				<p>Read more about how we can help ensure <strong>strong schools</strong> and <strong>bright futures</strong> for Warren County students in my <a href="/statements/announcement-of-candidacy">Announcement of Candidacy</a></p>
				<p>If you would like to help via a donation, you can learn more at <a href="/donations">Donations to Sara Jones for School Board</a></p>
			</div>
		</div>
		<Signature />
	</div>
</section>
<style>
	.wrapper {
		--content-width: 800px;
	}

	h1 {
		background-color: var(--bg);
		padding: 1rem;
		text-align: center;
		width: 100%;
		margin-bottom: 0;
	}

	.content {
		max-width: 650px;
		display: flex;
		gap: 1rem;

		@media (max-width: 600px) {
			flex-direction: column;
		}
	}

	.author-image {
		max-width: 165px;
		width: 100%;
		margin: 0;
		margin-top: 5px;

		@media (max-width: 600px) {
			max-width: 100%;
			display: flex;
			justify-content: center;
		}
	}

	.no-margin {
		margin: 0;
	}

	address {
		margin-top: 0.5rem;
		font-style: normal;
		line-height: 1.2;
	}
</style>
