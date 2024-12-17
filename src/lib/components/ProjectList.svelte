<script lang="ts">
	import Card from './Card.svelte';
	import type { CardType } from '../../types/Card';

	export let list: CardType[];
	const colPos = [1, 5, 2, 5, 1, 6, 3];
	const rowPos = [1, 3, 5, 8, 10, 11, 12, 14, 15];
	const sizeToSpan = {
		small: 1,
		medium: 2,
		large: 3
	};
</script>

<div class="z-1 relative h-screen overflow-y-scroll">
	<ul class="grid grid-flow-row grid-cols-6">
		{#each list as card, i}
			<li class={`col-span-${sizeToSpan[card.size]} col-start-${colPos[i]} row-start-${rowPos[i]}`}>
				<Card {card} />
			</li>
		{/each}
	</ul>
</div>
