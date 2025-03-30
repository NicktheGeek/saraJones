<script lang="ts">
	import Star from '$lib/components/svgs/Star.svelte';
	import { formatDate } from '$lib/utils'

	let { data } = $props()
</script>

<svelte:head>
	<title>{data.meta.title} | Sara Jones for Warren County Va School Board</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={`${data.meta.title} | Sara Jones for Warren County Va School Board`} />
	<meta name="description" content={data.meta.description} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:image" content={data.meta.image || `/images/sara-jones-og-img.png`} />
</svelte:head>

<div class="wrapper">
	<article class="inner">
		<hgroup>
			<div>
				<h1>{data.meta.title}</h1>
				<p>Published on {formatDate(data.meta.date)}</p>
			</div>
			<figure class="author-image">
				<enhanced:img src="../../../assets/images/sara-jones-sq.jpg" alt="Sara Jones in a white blouse in front of the Front Royal gazebo." />
			</figure>
		</hgroup>

		<div class="prose">
			<data.content />
		</div>
		<div class="signature">
			<p>
				<span class="signature-sign-off">
					<span class="text">Strong Schools</span>
					<span class="red-rounded-star">
						<Star />
					</span>
					<span class="text">Bright Futures.</span>
				</span>
				<span class="signature-name">Sara Jones</span>
			</p>
		</div>
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

		.signature {
			text-align: center;
			font-size: 1.5rem;

			.signature-sign-off {
				display: flex;
				align-items: center;
				gap: 1rem;
				font-weight: 600;
				text-transform: uppercase;

				.red-rounded-star {
					display: block;
					width: 25px;
					transform: translateY(0.1em);
				}
			}

			.signature-name {
				display: block;
				font-weight: 400;
				font-size: 2rem;
				text-transform: capitalize;
			}
		}
	}
</style>