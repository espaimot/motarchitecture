<script lang="ts">
	import BackgroundImage from '$lib/components/BackgroundImage.svelte';
	import ProjectList from '$lib/components/ProjectList.svelte';
	import type { ProjectCard } from '../../../types/Card';
	import type { PageData } from '../../../types/DataInput';
	import '../../../app.css';

	export let data: { content: PageData };
	const { background, projects } = data.content;
</script>

{#if background}
	<BackgroundImage
		isP5enabled={background.isP5enabled}
		src={background.src}
		alt={background.alt}
		code={background.code}
	/>
{/if}

{#if projects}
	<ProjectList list={projects as ProjectCard[]} />
{/if}
