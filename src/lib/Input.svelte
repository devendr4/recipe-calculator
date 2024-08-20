<script lang="ts">
	let { name, label, value }: { name: string; label: string; value: string } = $props();
</script>

<div class="flex flex-col">
	<label for={name} class="uppercase font-montserrat font-semibold text-darkBlue">{label}</label>
	<input bind:value class="border-gray border" {name} />
</div>
