<script lang="ts">
	import Vote from "./Vote.svelte";
</script>
<section class="wrapper">
	<div class="inner">
		<div class="hero-text">
			<h1 class="hero-title">Sara Jones</h1>
			<Vote />
		</div>
		<figure class="hero-image">
			<enhanced:img src="../../../assets/images/sara-jones.jpg" alt="Sara Jones in a white blouse in front of the Front Royal gazebo." width=504 height=693 />
		</figure>
	</div>
</section>

<style>
	.wrapper {
		padding-top: 0;
		padding-bottom: 0;
		--inner-flex-direction: row-reverse;
		--inner-flex-align: stretch;
		--inner-flex-justify: space-between;
	}

	.hero-text {
		flex: 1 1 50%;
		display: flex;
		flex-direction: column-reverse;
		justify-content: space-between;
		align-items: flex-end;
	}

	.hero-title {
		font-size: 4rem;
		width: 130%;
		margin: auto auto 1rem 0;
		transform: translateX(-30%);
		padding: 0.5rem 2rem;
		text-align: center;
		background-color: var(--bg);
	}

	.hero-image {
		flex: 1 1 50%;
		margin: 0;
		padding: 0;
	}

	@media (max-width: 1000px) {
		.hero-text {
			flex: 1 1 33%;
		}

		.hero-image {
			flex: 1 1 66%;
		}
	}

	@media (max-width: 900px) {
		.wrapper {
			--inner-flex-direction: column;
			--inner-flex-align: center;
			--inner-flex-justify: center;
			--content-padding: 0;
			--inner-gap: 0;
			padding-bottom: 2rem;
		}

		.hero-text {
			flex-direction: column;
			gap: 0;
			align-items: flex-end;
			width: 100%;
			position: relative;
		}

		.hero-title {
			clip: rect(1px, 1px, 1px, 1px);
			clip-path: inset(50%);
			height: 1px;
			width: 1px;
			margin: -1px;
			overflow: hidden;
			padding: 0;
			position: absolute;
		}
	}

	@media (max-width: 500px) {
		.hero-title {
			text-align: center;
		}
	}

	@media (max-width: 350px) {
		.hero-title {
			font-size: 3rem;
		}
	}
</style>