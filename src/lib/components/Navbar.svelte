<script>
	import { goto } from '$app/navigation';
</script>

<nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-purple-100 shadow-xl z-50">
	<div class="flex max-w-lg mx-auto">
		<button
			class="flex flex-col items-center gap-1 flex-1 py-3 text-gray-500 hover:text-purple-600 transition-colors"
			on:click={() => goto('/recipes')}
		>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z" />
			</svg>
			<span class="text-xs font-medium">Lista</span>
		</button>
		<button
			class="flex flex-col items-center gap-1 flex-1 py-3 text-gray-500 hover:text-purple-600 transition-colors"
			on:click={() => goto('/recipe/new')}
		>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
			</svg>
			<span class="text-xs font-medium">Nueva receta</span>
		</button>
	</div>
</nav>
