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

<ul
	class="z-1 relative flex grid-rows-10 flex-col gap-8 px-2 pt-[100vh] md:grid md:h-[4000px] md:grid-cols-6 md:gap-0 md:px-0 md:pt-8"
>
	{#each list as card}
		<li
			class={`md:max-h-auto max-h-[12rem] overflow-hidden shadow-xl md:overflow-visible md:shadow-none col-span-${sizeToSpan[card.size]} col-start-${card.column} row-start-${card.row}`}
		>
			<Card {card} />
		</li>
	{/each}
</ul>

<div
	class="blink fixed bottom-[20px] z-[-1] flex w-full cursor-pointer items-center justify-center text-xl md:hidden"
>
	Scroll to see our projects
</div>

<style>
	.blink {
		animation: blink-animation 2s steps(5, start) infinite;
	}

	@keyframes blink-animation {
		to {
			opacity: 0;
		}
	}
</style>
