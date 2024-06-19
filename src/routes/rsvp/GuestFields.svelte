<script lang="ts">
	export let guest: string;
	export let i: number;

	let isComing = 'no';
</script>

<div class="guest-fields">
	<h3>{guest}</h3>
	<input type="hidden" name={`${i}-name`} value={guest} />
	<fieldset class="attendance">
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
		<label class="meal">
			<div>Meal</div>
			<select name={`${i}-meal`} required>
				<option value="">--Please choose a meal--</option>
				<option value="prime-rib">Prime Rib</option>
				<option value="chicken-parm">Chicken Parmesan</option>
				<option value="vegetarian">Vegetarian</option>
				<option value="kids-meal">Kid's Meal (Chicken Tenders & Fries)</option>
			</select>
		</label>
		<label class="allergies">
			<div>Allergies</div>
			<textarea rows="2" name={`${i}-allergies`} />
		</label>
	{/if}
</div>

<style>
	.guest-fields:not(:first-of-type) {
		margin-top: 2rem;
	}

	.attendance {
		text-align: left;

		& label {
			display: block;
		}
	}

	.meal,
	.allergies {
		display: block;
		margin-top: 1rem;
		text-align: left;
	}

	.meal {
		& select {
			width: 100%;
		}
	}

	.allergies {
		& textarea {
			box-sizing: border-box;
			width: 100%;
			resize: vertical;
		}
	}
</style>
