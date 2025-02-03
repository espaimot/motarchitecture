<script lang="ts">
	import { marked } from 'marked';
	import DOMPurify from 'isomorphic-dompurify';
	import type { ProjectCard } from '../../types/Card';
	import { IconX } from '@tabler/icons-svelte';
	import Carousel from './Carousel.svelte';

	export let card: ProjectCard;
	let isExpanded = false;

	function toggleExpand(event: Event) {
		event.stopPropagation();
		isExpanded = true;
	}

	function closeExpand(event: Event) {
		event.stopPropagation();
		isExpanded = false;
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	class={`card relative cursor-pointer overflow-hidden text-ellipsis ${isExpanded ? 'expanded' : ''}`}
	on:click={(event) => toggleExpand(event)}
>
	<img src={card.images[0].src} alt={card.images[0].alt} class="h-full w-full object-contain" />
	<div
		class="card-overlay flex flex-col items-start justify-start gap-8 p-4 md:flex-row md:items-center md:justify-center md:gap-0"
	>
		{#if isExpanded}
			<Carousel {card} />
		{/if}
		<div class="flex w-full flex-col items-center justify-center">
			<h3 class="mb-2 text-center text-xs font-bold md:mb-4 md:text-xl">{card.title}</h3>
			<p
				class={`${!isExpanded ? 'line-clamp-5' : ''} max-w-[550px] text-justify text-xs font-medium md:text-sm`}
			>
				{@html DOMPurify.sanitize(marked(card.subtitle, { async: false }))}
			</p>
		</div>
	</div>
	{#if isExpanded}
		<button type="button" class="close-button" on:click={(event) => closeExpand(event)}
			><IconX size={25} stroke={1} /></button
		>
	{/if}
</div>

<style>
	.card-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.7);
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	.card:hover .card-overlay {
		opacity: 1;
		cursor: pointer;
	}

	.card.expanded {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 1000;
		background-color: white;
	}

	.card.expanded .card-overlay {
		opacity: 1;
		background-color: rgba(255, 255, 255);
	}

	.close-button {
		position: absolute;
		top: 10px;
		right: 25px;
		background: none;
		border: none;
		font-size: 24px;
		cursor: pointer;
		z-index: 1001;
	}
</style>
