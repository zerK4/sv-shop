<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import '../app.postcss';
	import type { Collections } from '../interfaces/medusa';

	export let data;
</script>

<div class="list-none">
	<Header collections={data.collections} />
	<div class="px-10 my-2">
		<slot />
	</div>
</div>
