<script>
	import './styles.css';
</script>

<div class="app">
	<header class="header">
		<div class="banner">
			<p>October 12, 2024</p>
			<p class="logo">C | T</p>
			<p>Stow, MA</p>
		</div>

		<nav class="nav-primary">
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

	.logo {
		font-family: var(--font-headings);
		font-size: 1.5rem;
	}

	.nav-primary {
	}

	.nav-list {
		display: flex;
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
			color: var(--dress-red);
		}
	}

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
