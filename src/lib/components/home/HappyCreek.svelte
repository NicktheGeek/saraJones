<script>

	import AppleMedal from "../AppleMedal.svelte";
	import Check from "../Check.svelte";

</script>
<div class="wrapper">
	<div class="inner">
		<div class="content">
			<h2 class="title">Happy Creek School Board</h2>
			<ul class="list">
				<li class="item">
					<Check />
					<span class="text">Advocating for students, teachers, and parents</span>
				</li>
				<li class="item">
					<Check />
					<span class="text">Fully funding our schools</span>
				</li>
				<li class="item">
					<Check />
					<span class="text">Focused on education</span>
				</li>
			</ul>
		</div>
		<div class="medal-wrapper">
			<AppleMedal />
		</div>
	</div>
</div>

<style>
	.wrapper {
        --inner-flex-direction: row;
        --inner-flex-align: stretch;
        --inner-flex-justify: space-between;
	}

	.content {
		flex: 1 1 40%;
		max-width: 500px;
		text-transform: uppercase;
	}

	.list {
		list-style: none;
		padding: 0;
		margin: 0;
		margin-left: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.title {
		font-size: 3.5rem;
		width: 100%;
		padding: 1.5rem 1rem;
		text-align: center;
		background-color: var(--bg);
	}

	.item {
		font-size: 1.5rem;
		display: flex;
		gap: 1ch;
		align-items: center;
	}

	.text {
		display: inline-block;
		font-size: 1.75rem;
		line-height: 1.2;
	}

	.medal-wrapper {
		flex: 1 0;
		width: 400px;
		max-width: 100%;
	}

	@media (max-width: 800px) {
		.wrapper {
			--inner-flex-direction: column;
			--inner-flex-align: center;
			--inner-flex-justify: center;
		}
	}
</style>
