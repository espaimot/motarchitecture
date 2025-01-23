<script lang="ts">
	import type { ProjectCard } from '../../types/Card';
	import ChevronRight from '@tabler/icons-svelte/icons/chevron-right';
	import ChevronLeft from '@tabler/icons-svelte/icons/chevron-left';

	export let card: ProjectCard;

	$: imageIndex = 0;
</script>

<div class="flex w-full flex-col gap-2 pt-12 md:pt-0">
	<div class="flex w-full justify-start gap-4">
		<button type="button" disabled={imageIndex <= 0} on:click={() => (imageIndex -= 1)}
			><ChevronLeft size={20} stroke={2} /></button
		>
		<button
			disabled={imageIndex > card.images.length - 2}
			type="button"
			on:click={() => (imageIndex += 1)}><ChevronRight size={20} stroke={2} /></button
		>
	</div>
	<img
		src={card.images[imageIndex].src}
		alt={card.images[imageIndex].alt}
		class="h-auto w-full md:w-full"
	/>
</div>

<style>
	button[disabled] {
		cursor: not-allowed;
		opacity: 0.5;
	}
</style>
