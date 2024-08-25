<script lang="ts">
	let {
		name,
		label,
		value,
		type = 'text'
	}: { name: string; label: string; value: string; type?: string } = $props();
</script>

<div class="flex flex-col">
	<label for={name} class="uppercase font-montserrat font-semibold text-darkBlue">{label}</label>
	<input {type} bind:value class="border-gray border" {name} />
</div>
