<script lang="ts">
	import Card from './Card.svelte';
	import type { ProjectCard } from '../../types/Card';

	export let list: ProjectCard[];
	const sizeToSpan = {
		small: 1,
		medium: 2,
		large: 3
	};
</script>

<ul class="z-1 relative grid h-[2000px] grid-cols-6 grid-rows-10 pt-8 md:h-[4000px]">
	{#each list as card}
		<li class={`col-span-${sizeToSpan[card.size]} col-start-${card.column} row-start-${card.row}`}>
			<Card {card} />
		</li>
	{/each}
</ul>
