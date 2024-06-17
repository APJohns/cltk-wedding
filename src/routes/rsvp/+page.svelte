<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import GuestFields from './GuestFields.svelte';
	import guestData from './guestData';

	let dialog: HTMLDialogElement;
	let guestCode = '';
	let isGuestCodeValid = false;

	const checkGuestCode = () => {
		if (Object.keys(guestData).includes(guestCode)) {
			isGuestCodeValid = true;
			dialog.showModal();
		} else {
			isGuestCodeValid = false;
			console.log('Ivalid code');
		}
	};
</script>

<form on:submit|preventDefault={checkGuestCode}>
	<label>
		Guest Code
		<input type="text" bind:value={guestCode} />
	</label>
	<button type="submit">Look-up</button>
</form>

<dialog bind:this={dialog}>
	<h2>{guestCode}</h2>
	{#if isGuestCodeValid}
		<form name="rsvp" method="POST" data-netlify="true">
			<input type="hidden" name="form-name" value="rsvp" />
			{#each guestData[guestCode].names as guest, i}
				<GuestFields {guest} {i} />
			{/each}
			<button type="submit">RSVP</button>
		</form>
	{/if}
</dialog>
