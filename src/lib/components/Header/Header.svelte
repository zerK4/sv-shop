<script lang="ts">
	import type { Collections } from '../../../interfaces/medusa';
	import Icon from '@iconify/svelte';

	export let collections: Collections['collections'][];

	console.log(collections);
</script>

<header class="px-10 h-28 gap-4 flex flex-col justify-center bg-black text-white">
	<div class="flex justify-between">
		<div class="">Logo</div>
		<div class="flex gap-4">
			<button class="relative">
				<span
					class="h-5 w-5 rounded-full absolute bg-red-500 -top-2 -right-2 flex items-center justify-center"
					>0</span
				>
				<Icon icon="iconamoon:shopping-bag-light" class="text-2xl" />
			</button>
			<button class="relative">
				<Icon icon="line-md:account" class="text-2xl" />
			</button>
		</div>
	</div>
	<div class="flex gap-4">
		{#each collections as { title, handle }}
			<li
				class="relative after:h-0.5 after:w-0.5 after:bg-neutral-700 after:rounded-full after:absolute after:-bottom-0.5 after:-left-0 hover:after:w-full hover:after:bg-white after:ease-in-out after:duration-300"
			>
				<a href={handle} class="">{title}</a>
			</li>
		{/each}
	</div>
</header>
