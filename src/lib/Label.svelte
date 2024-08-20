<script lang="ts">
	import type { Snippet } from 'svelte';

	let { name, children, className }: { className?: string; name?: string; children: Snippet } =
		$props();
</script>

<label
	for={name}
	class={'uppercase text-sm font-montserrat font-semibold text-darkBlue ' + className}
	>{@render children()}</label
>
