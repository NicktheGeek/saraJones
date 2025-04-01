<script>
	import SeoHead from "$lib/components/SeoHead.svelte";
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
		<h1>Donations to <span class="basic-information website-name">Sara Jones for School Board</span></h1>
		<div class="content">
			<figure class="author-image">
				<enhanced:img src="../../assets/images/sara-jones-sq.jpg" alt="Sara Jones in a white blouse in front of the Front Royal gazebo." height=300 width=300 />
			</figure>
			<div>
				<p class="no-margin">If you would like to make a donation to the campaign, please make checks payable to <strong>Sara Jones for School Board</strong> and mail to:</p>
				<address>
					Sara Jones for School Board<br />
					962 Stuart Dr.<br />
					Front Royal, VA 22630
				</address>
			</div>
		</div>
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
