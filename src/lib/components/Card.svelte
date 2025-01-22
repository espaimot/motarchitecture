<script lang="ts">
	import { marked } from 'marked';
	import DOMPurify from 'isomorphic-dompurify';
	import type { ProjectCard } from '../../types/Card';

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
<div class={`card ${isExpanded ? 'expanded' : ''}`} on:click={(event) => toggleExpand(event)}>
	<img src={card.images[0].src} alt={card.images[0].alt} class="card-image" />
	<div
		class="card-overlay flex flex-col items-start justify-start md:flex-row md:items-center md:justify-center md:gap-8 md:p-8"
	>
		{#if isExpanded}
			<img
				src={card.images[0].src}
				alt={card.images[0].alt}
				class="h-1/2 w-full md:h-auto md:w-1/2"
			/>
		{/if}
		<div class="card-text">
			<h3 class="mb-2 text-xs font-bold md:mb-4 md:text-xl">{card.title}</h3>
			<p class="text-xs font-medium md:text-sm md:leading-6">
				{@html DOMPurify.sanitize(marked(card.subtitle, { async: false }))}
			</p>
		</div>
	</div>
	{#if isExpanded}
		<button type="button" class="close-button" on:click={(event) => closeExpand(event)}>X</button>
	{/if}
</div>

<style>
	.card {
		position: relative;
		overflow: hidden;
		text-overflow: ellipsis;
		cursor: pointer;
	}

	.card-image {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.card-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.7);
		display: flex;
		justify-content: center;
		align-items: center;
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	.card:hover .card-overlay {
		opacity: 1;
		cursor: pointer;
	}

	.card-text {
		text-align: justify;
		color: black;
		padding: 1rem;

		h3 {
			text-align: center;
		}
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
		background-color: rgba(255, 255, 255, 0.9);
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
