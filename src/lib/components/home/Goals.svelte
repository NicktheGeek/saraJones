<div class="outer">
	<div class="wrapper">
		<div class="inner">
			<h2 class="title">Vision <span class="and">and</span><span class="amp">&</span> goals</h2>
			<div class="content">
				<ol>
					<li>
						<h3>Prioritize Student Achievement</h3>
						<span>Implement policies and allocate resources strategically to drive measurable improvements in student outcomes and academic success.</span>
					</li>
					<li>
						<h3>Strengthen Family Engagement</h3>
						<span>Promote transparent, consistent communication between schools and families to build trust and support student learning at home and in the classroom.</span>
					</li>
					<li>
						<h3>Ensure Equitable Resource Allocation</h3>
						<span>Advocate for the responsible and equitable use of district funds to maximize support for all students, with a focus on closing achievement gaps and enhancing educational opportunities.</span>
					</li>
					<li>
						<h3>Recruit and Retain High-Quality Educators</h3>
						<span>Foster a supportive, collaborative work environment that empowers educators to thrive, while advocating for competitive salaries to attract and retain top teaching talent within our schools.</span>
					</li>
				</ol>
			</div>
		</div>
	</div>
</div>

<style>
	.outer {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		background-color: var(--color-primary);

	}
	.wrapper {
		--content-width: 800px;
		--text: white;
		color: var(--text);
	}

	h2.title {
		text-align: center;
		font-size: 2.5rem;
		text-transform: uppercase;
		margin-bottom: 0;
		width: 100%;
		text-wrap: balance;
		
		.and {
			display: block;
		}
		.amp {
			display: none;
		}

		@media (min-width: 370px) {
			.amp {
				display: inline;
			}

			.and {
				display: none;
			}
		}

		@media (min-width: 500px) {
			.and {
				display: inline;
			}
			.amp {
				display: none;
			}
		}
	}

	
	ol {
		list-style: none;
		counter-reset: item;
		margin-left: 0;
		padding-left: 0;

		li {
			counter-increment: item;
			margin-bottom: 2em;
			margin-top: 3em;
			position: relative;
			text-wrap: balance;
			text-align: center;

			&:before,
			&:after {
				font-size: 2rem;
				content: '';
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
			}

			&:last-child {
				margin-bottom: 0;
			}

			&:after {
				content: counter(item);
				top: -1.5em;
				font-weight: bold;
				background-color: var(--color-primary);
				color: var(--text);
				padding: 0.5em;
				aspect-ratio: 1;
				width: 1.5em;
				height: 1.5em;
				line-height: 1;
				border-radius: 50%;
				display: inline-flex;
				justify-content: center;
				align-items: center;
			}

			&:before {
				top: -0.75em;
				height: 2px;
				width: 10rem;
				background-color: var(--color-secondary);
			}

			h3 {
				font-size: 1.2em;
				line-height: 1.2;
				font-weight: 700;
				display: block;
				margin-bottom: 0;
			}
			span {
				font-weight: 500;
				display: block;
			}
		}
	}
</style>