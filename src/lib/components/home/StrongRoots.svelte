<script>
	import Check from "../Check.svelte";

</script>
<div class="wrapper">
	<div class="inner">
		<h2>Strong roots in the community</h2>
		<ul class="two-col-list">
			<li class="item">
				<Check />
				<span class="text">Third generation, lifelong resident of Warren County.</span>
			</li>
			<li class="item">
				<Check />
				<span class="text">Parent of two Warren County Public Schools students.</span>
			</li>
			<li class="item">
				<Check />
				<span class="text">Participated in the WCPS 101 program.</span>
			</li>
			<li class="item">
				<Check />
				<span class="text">Currently serving on the Modified School Calendar
					Committee.</span>
			</li>
			<li class="item">
				<Check />
				<span class="text">Currently support schools through fundraising and volunteering.</span>
			</li>
		</ul>
	</div>
</div>

<style>
	.wrapper {
		--inner-flex-align: stretch;
	}

	h2 {
		text-align: center;
		font-size: 3rem;
		text-transform: uppercase;
		margin-bottom: 0;
		background-color: var(--bg);
		padding: 0.5rem 1rem;
		width: 100%;
		margin-bottom: 0;
	}

	.two-col-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
	}

	.item {
		flex: 1 1 45%;
		display: flex;
		align-items: center;
		gap: 1rem;
		font-size: 1.5rem;
	}

	.text {
		font-size: 2rem;
		line-height: 1.2;
	}
</style>