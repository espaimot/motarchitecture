<script lang="ts">
	import type { ContactCard } from '../../types/Card';

	export let content: ContactCard;
</script>

<div class="relative mx-auto flex h-[85vh] w-[60%] flex-col items-center justify-center gap-8">
	{#if content.image}
		<img src={content.image.src} alt={content.image.alt} class="w-full max-w-[350px] rounded-md" />
	{/if}
	<div class="text-md flex flex-col items-center justify-center gap-2 font-light">
		{#if content.text}
			<div>{content.text}</div>
		{/if}
		{#if content.email}
			<a href={`mailto:${content.email}`} class="underline">{content.email}</a>
		{/if}
		{#if content.phone}
			<a href={`tel:${content.phone}`}>{content.phone}</a>
		{/if}
	</div>
</div>
