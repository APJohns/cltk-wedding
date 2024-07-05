<script lang="ts">
	import dine from '$lib/images/dine.svg';
	import drinks from '$lib/images/drinks.svg';
	import party from '$lib/images/party.svg';
	import rings from '$lib/images/rings.svg';
	import sparkler from '$lib/images/sparkler.svg';
	import reception from '$lib/images/reception.svg';
	import cocktails from '$lib/images/cocktails.svg';
	import leave from '$lib/images/leave.svg';

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
	<a href="/rsvp" class="cta">RSVP Now!</a>
</div>

<div class="names">
	<p class="name">Cindy Le</p>
	<p class="and">And</p>
	<p class="name">Thomas Kania</p>
</div>

<div class="countdown">
	{countdown}
</div>

<div class="wedding-day">
	<h2>Wedding Day</h2>
	<ol class="schedule">
		<li class="event">
			<div class="event-time">4:30pm</div>
			<div class="event-details">
				<div class="event-name">
					<img src={rings} alt="" />
					Ceremony Time!
				</div>
			</div>
		</li>

		<li class="event">
			<div class="event-time">5:00pm</div>
			<div class="event-details">
				<div class="event-name">
					<img src={cocktails} alt="" />
					Cocktail Time!
				</div>
			</div>
		</li>

		<li class="event">
			<div class="event-time">6:00pm</div>
			<div class="event-details">
				<div class="event-name">
					<img src={reception} alt="" />
					Reception Time!
				</div>
			</div>
		</li>

		<li class="event">
			<div class="event-time">6:20pm</div>
			<div class="event-details">
				<div class="event-name">
					<img src={drinks} alt="" />
					Toast Time!
				</div>
			</div>
		</li>

		<li class="event">
			<div class="event-time">6:30pm</div>
			<div class="event-details">
				<div class="event-name">
					<img src={dine} alt="" />
					Dinner Time!
				</div>
			</div>
		</li>

		<li class="event">
			<div class="event-time">6:30pm</div>
			<div class="event-details">
				<div class="event-name">
					<img src={party} alt="" />
					Party Time!
				</div>
			</div>
		</li>

		<li class="event">
			<div class="event-time">10:00pm</div>
			<div class="event-details">
				<div class="event-name">
					<img src={leave} alt="" />
					Go Home Time!
				</div>
			</div>
		</li>
	</ol>
</div>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		min-height: 30rem;
		color: white;
		background-image: url('$lib/images/dock.jpeg');
		background-size: cover;
		background-position: center;
		font-size: 1.8rem;

		& h1 {
			text-transform: uppercase;
		}
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

	.wedding-day {
		margin-top: 4rem;
	}

	.schedule {
		text-align: left;
		list-style: none;
		padding: 0;
	}

	.event {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.event-time {
		text-align: right;
		align-self: center;
	}

	.event-details {
		position: relative;
		border-left: 2px solid black;
	}

	.event-details::before {
		content: '';
		display: block;
		position: absolute;
		top: 50%;
		left: -9px;
		width: 16px;
		border-bottom: 2px solid black;
	}

	.event-name {
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		width: 5.5rem;
		text-align: center;
	}

	.event-name img {
		display: block;
		width: 40px;
	}

	.event-time,
	.event-name {
		padding: 32px 24px;
	}

	@media (min-width: 800px) {
		.hero {
			padding: 2rem;
			font-size: 3rem;
		}
	}
</style>
