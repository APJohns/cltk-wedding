<script lang="ts">
	export let guest: string;
	export let i: number;

	let isComing = 'no';
</script>

<h3>{guest}</h3>
<input type="hidden" name={`${i}-name`} value={guest} />
<fieldset>
	<legend>Can you attend?</legend>
	<label>
		<input type="radio" bind:group={isComing} name={`${i}-attendance`} value="yes" required />
		Yes, I'll be there!
	</label>
	<label>
		<input type="radio" bind:group={isComing} name={`${i}-attendance`} value="no" required />
		Sorry, I can not attend.
	</label>
</fieldset>
{#if isComing === 'yes'}
	<label>
		<div>Meal</div>
		<select name={`${i}-meal`} required>
			<option value="">--Please choose a meal--</option>
			<option value="prime-rib">Prime Rib</option>
			<option value="chicken-parm">Chicken Parmesan</option>
			<option value="vegetarian">Vegetarian</option>
			<option value="kids-meal">Kid's Meal (Chicken Tenders & Fries)</option>
		</select>
	</label>
	<label>
		<div>Allergies</div>
		<textarea rows="2" name={`${i}-allergies`} />
	</label>
{/if}
