<script>

	import Star from "../svgs/Star.svelte";

</script>
<div class="wrapper">
	<div class="inner">
		<div class="content">
			<h2 class="title">
				<span class="text">Stronger Schools</span>
				<span class="red-rounded-star">
					<Star />				
				</span>
				<span class="text">Brighter Future</span>
			</h2>
		</div>
	</div>
</div>

<style>
	.wrapper {
		--inner-flex-direction: row;
		--inner-flex-align: stretch;
	}

	.title {
		text-align: center;
		font-size: 3rem;
		text-transform: uppercase;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 0;
	}

	.text {
		display: block;
	}

	.red-rounded-star {
		display: block;
		width: 100px;
	}

	@media (max-width: 768px) {
		.title {
			font-size: 2.5rem;
			text-align: center;
			margin-bottom: 1rem;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 0.75rem;
		}

		.red-rounded-star {
			width: 80px;
		}
	}
</style>