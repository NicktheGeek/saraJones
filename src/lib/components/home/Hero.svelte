<script lang="ts">
	import Check from "../svgs/Check.svelte";
</script>
<section class="wrapper">
	<div class="inner">
		<div class="hero-text">
			<h1 class="hero-title">Sara Jones</h1>
			<div class="hero-vote-date">
				<div class="check-wrapper">
					<Check />
				</div>
				
				<p class="hero-vote-date-text">
					<span class="caps">Vote</span>
					<span class="hero-vote-date-month-day">November 4<sup>th</sup></span>
					<span class="hero-vote-date-year">2025</span>
				</p>
			</div>
		</div>
		<figure class="hero-image">
			<img src="/images/sara-jones.jpg" alt="Sara Jones in a white blouse in front of the Front Royal gazebo." />
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

	.check-wrapper {
		width: 100px;
		transform: translateX(15px);
	}

	.hero-vote-date {
		background-color: var(--bg);
		color: var(--text);
		padding: 0.5rem 1rem;
		border-bottom-right-radius: 1rem;
		border-bottom-left-radius: 1rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 200px;
		margin-right: 43px;
	}

	.hero-vote-date-text span {
		display: block;
		font-weight: 700;
		margin: 0;
		line-height: 1.1;
	}

	.caps {
		text-transform: uppercase;
		font-size: 2.5rem;
	}

	.hero-vote-date-month-day {
		font-size: 1.5rem;
	}

	.hero-vote-date-year {
		font-size: 2.5rem;
	}

	.hero-image {
		flex: 1 1 50%;
		margin: 0;
		padding: 0;
	}
</style>