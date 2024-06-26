<script lang="ts">
	import GuestFields from './GuestFields.svelte';
	import guestData from './guestData';
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	import xmark from '$lib/images/xmark.svg';

	export let form: ActionData;

	let dialog: HTMLDialogElement;
	let guestCode = '';
	let isGuestCodeValid = false;
	let errorMessage = '';
	let sending = false;

	const cleanCode = (code: string) => code.toLowerCase().trim();

	const checkGuestCode = () => {
		if (Object.keys(guestData).includes(cleanCode(guestCode))) {
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
		<h1>RSVP</h1>
		<p>You should have a guest code from your rsvp card. Enter that here to RSVP!</p>
		<form class="guest-code-form" on:submit|preventDefault={checkGuestCode}>
			<label class="guest-code-field">
				<div class="visually-hidden">Guest Code</div>
				<input type="text" bind:value={guestCode} autocomplete="off" autocapitalize="off" />
			</label>
			<button type="submit">Look-up</button>
		</form>

		{#if errorMessage}
			<p>{errorMessage}</p>
		{/if}

		<dialog bind:this={dialog} class="rsvp-dialog">
			<div class="dialog-header">
				<h2 class="guest-code-heading">{cleanCode(guestCode)}</h2>
				<button type="button" class="icon-button" on:click={() => dialog.close()}>
					<img srcset={xmark} alt="close" />
				</button>
			</div>
			{#if isGuestCodeValid}
				<form
					name="rsvp"
					method="POST"
					use:enhance={() => {
						sending = true;
						return ({ update }) => {
							// Set invalidateAll to false if you don't want to reload page data when submitting
							update({ invalidateAll: true }).finally(async () => {
								sending = false;
							});
						};
					}}
				>
					<input type="hidden" name="guest-code" value={guestCode} />
					{#each guestData[cleanCode(guestCode)] as guest, i}
						<GuestFields {guest} {i} />
					{/each}
					<button type="submit" class="submit-rsvp" disabled={sending}>
						{#if sending}
							Sending...
						{:else}
							RSVP
						{/if}
					</button>
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
		padding: 2rem var(--padding-h) 0 var(--padding-h);

		& h2 {
			font-family: var(--font-headings);
		}
	}

	.guest-code-form {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
		margin-top: 2rem;
	}

	.rsvp-dialog {
		box-sizing: border-box;
		position: relative;
		padding: 1rem 2rem;
		width: 100%;
		height: 100%;
	}

	.dialog-header {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;

		& .guest-code-heading {
			grid-column-start: 2;
		}

		& .icon-button {
			justify-self: end;
		}
	}

	.submit-rsvp {
		margin-top: 1.5rem;
	}

	@media (min-width: 800px) {
		.rsvp-dialog {
			width: revert;
			min-width: 50vw;
			max-height: 80vh;
		}
	}
</style>
