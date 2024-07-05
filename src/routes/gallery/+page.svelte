<div class="constrained">
	<div class="page-body">
		<h1>Gallery</h1>
		<p>
			Cindy and Thomas met when they were in middle school, since then they have become inseparable.
			What started off as a beautiful friendship turned into a lifetime partnership and commitment.
		</p>

		<p>Please enjoy some of the beautiful pictures we took in Vietnam &lt;3</p>
	</div>
</div>

<section class="gallery">
	<enhanced:img src="$lib/images/gallery/back1.jpg" />
	<enhanced:img src="$lib/images/gallery/drama.jpg" />
	<enhanced:img src="$lib/images/gallery/passenger-queen.jpg" />
	<enhanced:img src="$lib/images/gallery/sunset1.jpg" />
	<enhanced:img src="$lib/images/gallery/sunset2.jpg" />
	<enhanced:img src="$lib/images/gallery/vietnamese-royalty2.jpg" />
	<enhanced:img src="$lib/images/gallery/vietnamese-royalty.jpg?rotate=-90" />
	<enhanced:img src="$lib/images/gallery/back2.jpg?rotate=-90" />
</section>

<style>
	.constrained {
		padding-top: 2rem;
	}

	.page-body {
		padding: 0 var(--padding-h);
	}

	.gallery {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		margin-top: 4rem;

		& img {
			display: block;
			width: 100%;
			height: auto;
		}
	}

	@media (min-width: 600px) {
		.gallery {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1000px) {
		.gallery {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
