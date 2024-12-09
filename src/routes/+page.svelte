<script>
	import BackgroundImage from '$lib/components/BackgroundImage.svelte';
	import ProjectList from '$lib/components/ProjectList.svelte';
	import data from '../lib/data/data.json';
	// take json and transform it into an object
	const body = data;
	const { background, projectList } = body.home;
</script>

{#if background}
	<BackgroundImage
		isP5enabled={background.isP5enabled}
		src={background.src}
		alt={background.alt}
		code={background.code}
	/>
{/if}

{#if projectList}
	<ProjectList list={projectList} />
{/if}
