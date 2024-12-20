<script lang="ts">
	import BackgroundImage from '$lib/components/BackgroundImage.svelte';
	import ProjectList from '$lib/components/ProjectList.svelte';
	import type { CardType } from '../../types/Card';
	import type { DataType } from '../../types/DataInput';
	import '../../app.css';

	export let data: { content: DataType };
	const { background, projectList } = data.content;
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
	<ProjectList list={projectList as CardType[]} />
{/if}
