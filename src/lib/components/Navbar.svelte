<script>
	import { goto } from '$app/navigation';
</script>

<nav class="bg-purple-400 flex gap-2 fixed w-full left-0 bottom-0">
	<button
		class="bg-purple-500 p-3 w-1/2 text-center"
		on:click={() => {
			goto('/recipes');
		}}
	>
		lista
	</button>
	<button
		class="bg-purple-500 p-3 w-1/2 text-center"
		on:click={() => {
			goto('/recipe/new');
		}}
	>
		nueva receta
	</button>
</nav>
