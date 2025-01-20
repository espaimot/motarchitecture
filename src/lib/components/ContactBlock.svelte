<script lang="ts">
	import { marked } from 'marked';
	import DOMPurify from 'isomorphic-dompurify';
	import type { ContactCard } from '../../types/Card';

	export let content: ContactCard;
</script>

<div class="relative mx-auto flex h-[85vh] w-[60%] flex-col items-center justify-center gap-8">
	{#if content.image}
		<img src={content.image.src} alt={content.image.alt} class="w-full max-w-[350px] rounded-md" />
	{/if}
	<div class="text-md flex flex-col items-center justify-center gap-2 font-light">
		{#if content.text}
			<!-- Sveltekit content policy is configured so this is not a security risk -->
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<div>{@html DOMPurify.sanitize(marked(content.text, { async: false }))}</div>
		{/if}
		{#if content.email}
			<a href={`mailto:${content.email}`} class="underline">{content.email}</a>
		{/if}
		{#if content.phone}
			<a href={`tel:${content.phone}`}>{content.phone}</a>
		{/if}
	</div>
</div>
