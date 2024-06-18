<script lang="ts">
	import GuestFields from './GuestFields.svelte';
	import guestData from './guestData';
	import type { ActionData } from './$types';

	export let form: ActionData;

	let dialog: HTMLDialogElement;
	let guestCode = '';
	let isGuestCodeValid = false;
	let errorMessage = '';

	const checkGuestCode = () => {
		if (Object.keys(guestData).includes(guestCode)) {
			isGuestCodeValid = true;
			dialog.showModal();
		} else {
			isGuestCodeValid = false;
			errorMessage = 'Invalid guest code. Check to make sure your code is spelled correctly.';
		}
	};
</script>

<div class="wrapper">
	{#if !form?.success && !form?.error}
		<h2>RSVP</h2>
		<p>You should have a guest code from your rsvp card. Enter that here to RSVP!</p>
		<form class="guest-code-form" on:submit|preventDefault={checkGuestCode}>
			<label class="guest-code-field">
				<div class="visually-hidden">Guest Code</div>
				<input type="text" bind:value={guestCode} />
			</label>
			<button type="submit">Look-up</button>
		</form>

		{#if errorMessage}
			<p>{errorMessage}</p>
		{/if}

		<dialog bind:this={dialog}>
			<h3>{guestCode}</h3>
			{#if isGuestCodeValid}
				<form name="rsvp" method="POST">
					<input type="hidden" name="guest-code" value={guestCode} />
					{#each guestData[guestCode].names as guest, i}
						<GuestFields {guest} {i} />
					{/each}
					<button type="submit">RSVP</button>
				</form>
			{/if}
		</dialog>
	{/if}

	{#if form?.success}
		<p>Thank you for your RSVP. Can't wait to see you there!</p>
	{/if}

	{#if form?.error}
		<p>{form.error}</p>
	{/if}
</div>

<style>
	.wrapper {
		border-top: 1px solid #ddd;
		padding-top: 2rem;

		& h2 {
			font-family: var(--font-headings);
		}
	}

	.guest-code-form {
		display: flex;
		gap: 1rem;
		justify-content: center;
		margin-top: 2rem;
	}
</style>
