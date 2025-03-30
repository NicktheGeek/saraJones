<div class="wrapper">
	<div class="inner">
		<div class="content">
			<h2 class="title">
				<span class="text">Stronger Schools</span>
				<span class="red-rounded-star">
					<svg width="100%" height="100%" viewBox="0 0 110 105" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
						<g transform="matrix(1,0,0,1,-42.5766,-30)">
							<path d="M92.923,33.248C93.603,31.303 95.439,30 97.5,30C99.561,30 101.397,31.303 102.077,33.248L113.4,65.615L147.682,66.382C149.743,66.428 151.549,67.771 152.186,69.732C152.823,71.692 152.151,73.84 150.511,75.088L123.228,95.859L133.092,128.7C133.684,130.674 132.965,132.807 131.298,134.018C129.63,135.23 127.379,135.255 125.686,134.081L97.5,114.552L69.314,134.081C67.621,135.255 65.37,135.23 63.702,134.018C62.035,132.807 61.316,130.674 61.908,128.7L71.772,95.859L44.489,75.088C42.849,73.84 42.177,71.692 42.814,69.732C43.451,67.771 45.257,66.428 47.318,66.382L81.6,65.615L92.923,33.248Z" style="fill:rgb(205,47,35);"/>
						</g>
					</svg>					
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

	.red-rounded-star svg {
		width: 100%;
		height: auto;
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