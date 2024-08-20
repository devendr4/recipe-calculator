<script>
	import Input from '$lib/Input.svelte';
	import Label from '$lib/Label.svelte';
	import Title from '$lib/Title.svelte';
</script>

<Title variant="h1">Nueva receta</Title>
<form>
	<Input value={''} label="titulo" name="title" />
	<Input value={''} label="foto" name="img" />
	<div class="mt-2">
		<Title variant="h3">Ingredientes</Title>
		<div class="flex justify-between">
			<div class="flex flex-wrap flex-col w-1/2">
				<Label className="w-3/6 !text-left">Ingrediente</Label>
				<Label className="w-1/6">Cantidad</Label>
				<Label className="w-1/6">Unidad</Label>
			</div>
			<div class="w-1/2 flex flex-col gap-2 justify-between mt-2">
				<input />
				<input />
				<input />
			</div>
		</div>
	</div>
</form>
