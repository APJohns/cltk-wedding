<script>
	import './styles.css';
	import bars from '$lib/images/bars.svg';
	import xmark from '$lib/images/xmark.svg';
	import { page } from '$app/stores';

	let isOpen = false;
</script>

<div class="app">
	<header class="header">
		<div class="banner">
			<p class="on-lg">October 12, 2024</p>
			<div class="nav-trigger-wrapper on-sm">
				<button class="icon-button" on:click={() => (isOpen = !isOpen)}>
					<img srcset={isOpen ? xmark : bars} alt="toggle menu" />
				</button>
			</div>
			<p class="logo">C | T</p>
			<p>
				<span class="on-sm">10/12/24</span>
				Stow, MA
			</p>
		</div>
		<nav class={`nav-primary${isOpen ? ' open' : ''}`}>
			<ul class="nav-list">
				<li><a href="/" class="nav-link" class:active={$page.url.pathname === '/'}>Home</a></li>
				<li>
					<a href="/rsvp" class="nav-link" class:active={$page.url.pathname === '/rsvp'}>RSVP</a>
				</li>
				<li>
					<a
						href="/travel-and-hotel"
						class="nav-link"
						class:active={$page.url.pathname === '/travel-and-hotel'}>Travel &amp; Hotel</a
					>
				</li>
				<!-- <li><a href="/wedding-party" class="nav-link">The Wedding Party</a></li> -->
				<li>
					<a href="/gallery" class="nav-link" class:active={$page.url.pathname === '/gallery'}
						>Gallery</a
					>
				</li>
				<li>
					<a href="https://registry.theknot.com/-october-2023-ma/48868926" class="nav-link"
						>Registry</a
					>
				</li>
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
		border-bottom: 1px solid #ddd;
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

		& p {
			margin: 0;
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
		display: grid;
		grid-template-columns: 1fr;
		justify-content: center;
		gap: 1.5rem;
		margin: 2rem 0 0;
		padding: 0;
		list-style: none;
	}

	.nav-link {
		color: black;
		text-transform: uppercase;
		text-decoration: none;

		&.active {
			border-bottom: 1px solid black;
		}

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
			grid-template-columns: repeat(5, 1fr);
			margin-left: auto;
			margin-right: auto;
			max-width: fit-content;
		}
	}
</style>
