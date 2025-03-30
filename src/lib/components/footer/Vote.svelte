<script>
	import Check from "../svgs/Check.svelte";
</script>

<div class="vote">
	<div class="check-wrapper">
		<Check />
	</div>
	
	<p class="text">
		<span class="caps">Vote</span>
		<span class="month-day">Nov. 4<sup>th</sup></span>
		<span class="year">2025</span>
	</p>
</div>

<style>
	.vote {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
	}

	.check-wrapper {
		width: 100px;
	}

	.text {
		font-size: 1.25rem;
		margin-bottom: 0;
		display: flex;
		flex-direction: column;
		font-weight: 700;
		line-height: 1.1;
		text-transform: uppercase;
		text-align: justify;

		sup {
			text-transform: lowercase;
		}
	}

	.caps {
		font-size: 1.36em;
	}

	.year {
		font-size: 1.95em;
	}
</style>
