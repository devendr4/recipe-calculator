<script>
	import '../app.css';
</script>

<div class="bg-purple-300 p-8 h-screen">
	<slot />
</div>
<nav class="bg-purple-400 fixed w-full left-0 bottom-0">
	<ul class="flex gap-2">
		<li class="bg-purple-500 p-3 w-1/2 text-center">
			<button> lista </button>
		</li>
		<li class="bg-purple-500 p-3 w-1/2 text-center">
			<button> nueva receta </button>
		</li>
		<!-- <li class="bg-purple-500 p-3 w-1/3 text-center">nueva</li> -->
	</ul>
</nav>
