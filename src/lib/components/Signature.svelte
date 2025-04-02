<script>

	import Star from "./svgs/Star.svelte";

</script>
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
<style>
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
</style>