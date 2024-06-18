<script lang="ts">
	const target = new Date('October 12, 2024 16:30:00');

	$: countdown = '';

	let prevDays: number;
	let prevHours: number;
	let prevMins: number;

	$: {
		const showCountdown = () => {
			let now = new Date();
			let distance = target.getTime() - now.getTime();

			let days = Math.floor(distance / (1000 * 60 * 60 * 24));
			let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			let seconds = Math.floor((distance % (1000 * 60)) / 1000);

			if (distance >= 0) {
				if (days > 1) {
					if (days !== prevDays) {
						countdown = `${days} days to go!`;
						prevDays = days;
					}
				} else if (days <= 1 && hours >= 1) {
					if (hours !== prevHours || minutes !== prevMins) {
						countdown = `${hours + days * 24} hours ${minutes} minutes to go!`;
						prevHours = hours;
						prevMins = minutes;
					}
				} else {
					countdown = `Only ${minutes} minutes ${seconds} seconds to go!`;
				}
			} else {
				countdown = 'Time to get married! 💍';
			}
		};

		showCountdown();

		setInterval(() => {
			showCountdown();
		}, 1000);
	}

	function pad(number: number) {
		var str = '' + number;
		while (str.length < 2) {
			str = '0' + str;
		}
		return str;
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="hero">
	<h1>We're getting married!</h1>
</div>

<div class="names">
	<p class="name">Cindy Le</p>
	<p class="and">And</p>
	<p class="name">Thomas Kania</p>
</div>

<div class="countdown">
	{countdown}
</div>

<style>
	.hero {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2rem;
		min-height: 30rem;
		color: white;
		font-size: 3rem;
		text-transform: uppercase;
		font-family: 'Prata';
		background-image: url('$lib/images/dock.jpeg');
		background-size: cover;
		background-position: center;
	}

	.names {
		margin-top: 3rem;

		& .name {
			margin: 0;
			font-size: 3.5rem;
			font-family: 'Alex Brush';
		}

		& .and {
			margin: 0;
			text-transform: uppercase;
			font-weight: 500;
		}
	}

	.countdown {
		margin: 4rem auto 0;
		border-top: 2px solid #ddd;
		border-bottom: 2px solid #ddd;
		padding: 2rem 4rem;
		min-width: fit-content;
		width: 50%;
		font-size: 1.5rem;
	}
</style>
