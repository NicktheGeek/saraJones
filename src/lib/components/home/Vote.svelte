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
		background-color: var(--bg);
		color: var(--text);
		padding: 0.5rem 1rem 2rem;
		border-bottom-right-radius: 2rem;
		border-bottom-left-radius: 2rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 200px;
		margin-right: 43px;

		@media (max-width: 900px) {
			margin-right: 0;
			width: fit-content;
			border-bottom-right-radius: 1rem;
			border-bottom-left-radius: 1rem;
			padding: 0.25rem 0.5rem 1rem;
			position: absolute;
			top: 0;
			right: 1rem;
		}

		@media (max-width: 500px) {
			right: 0.5rem;
		}

		@media (max-width: 400px) {
			right: 0;
			width: 100%;
			flex-direction: row;

			.check-wrapper {
				width: 50px;
				transform: translateX(0);
			}

			.text {
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-template-rows: 1fr 1fr;
				column-gap: 0.5rem;
				row-gap: 0;
				justify-items: left;
				align-items: center;
				line-height: 1;
			}

			/* make caps take up 2 rows in first column */
			.caps {
				grid-column: 1;
				grid-row: 1 / 3;
				font-size: 2.5em;
				transform: scaleY(1.3);
			}

			/* make month-day and year take up 1 row each in second column */
			/* month-day on top, year on bottom */
			.month-day {
				grid-column: 2 / -1;
				grid-row: 1 / 2;
			}
			.year {
				grid-column: 2 / -1;
				grid-row: 2 / 3;
				font-size: 1.5em;
			}
		}
	}

	.check-wrapper {
		width: 100px;
		transform: translateX(10px);
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
