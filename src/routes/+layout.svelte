<script>
	import './styles.css';
	import bars from '$lib/images/bars.svg';

	let isOpen = false;
</script>

<div class="app">
	<header class="header">
		<div class="banner">
			<p class="on-lg">October 12, 2024</p>
			<div class="nav-trigger-wrapper on-sm">
				<button class="icon-button" on:click={() => (isOpen = !isOpen)}>
					<img srcset={bars} alt="menu" />
				</button>
			</div>
			<p class="logo">C | T</p>
			<p>
				<span class="on-sm">10/4/24</span>
				Stow, MA
			</p>
		</div>
		<nav class={`nav-primary${isOpen ? ' open' : ''}`}>
			<ul class="nav-list">
				<li><a href="/" class="nav-link">Home</a></li>
				<li><a href="/rsvp" class="nav-link">RSVP</a></li>
				<li><a href="/travel-and-hotel" class="nav-link">Travel &amp; Hotel</a></li>
				<li><a href="/wedding-party" class="nav-link">The Wedding Party</a></li>
				<li><a href="/photos" class="nav-link">PICS OR IT DIDNT HAPPEN</a></li>
			</ul>
		</nav>
	</header>

	<main>
		<slot />
	</main>
</div>

<style>
	.header {
		padding: 1rem var(--padding-h);
	}

	.banner {
		display: flex;
		justify-content: space-between;
		align-items: center;

		& * {
			flex: 1;
		}

		& :first-child {
			text-align: left;
		}

		& :last-child {
			text-align: right;
		}
	}

	.on-lg {
		display: none;
	}

	.on-sm {
		display: block;
	}

	.logo {
		font-family: var(--font-headings);
		font-size: 1.5rem;
	}

	.nav-trigger-wrapper {
		display: flex;
		justify-content: start;
	}

	.nav-primary {
		display: none;

		&.open {
			display: block;
		}
	}

	.nav-list {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1.5rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.nav-link {
		color: black;
		text-decoration: none;
		text-transform: uppercase;

		&:hover {
			color: var(--maroon);
		}
	}

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	@media (min-width: 800px) {
		.on-lg {
			display: block;
		}

		.on-sm {
			display: none;
		}

		.nav-primary {
			display: block;
		}

		.nav-list {
			flex-direction: row;
		}
	}
</style>
