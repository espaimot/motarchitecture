<script lang="ts">
	import BackgroundImage from '$lib/components/BackgroundImage.svelte';
	import ProjectList from '$lib/components/ProjectList.svelte';
	import type { ProjectCard } from '../../../types/Card';
	import type { Languages, PageData } from '../../../types/DataInput';
	import '../../../app.css';
	import Timeline from '$lib/components/Timeline.svelte';
	import ContactBlock from '$lib/components/ContactBlock.svelte';

	export let data: { content: PageData; lang: Languages };
	const { background, projects, timelineProjects, contactInfo } = data.content;
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

{#if timelineProjects}
	<Timeline lang={data.lang} list={timelineProjects} />
{/if}

{#if contactInfo}
	<ContactBlock content={contactInfo} />
{/if}
