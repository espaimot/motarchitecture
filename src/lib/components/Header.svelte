<script lang="ts">
	import { IconMenu, IconX } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	export let menu: { [key: string]: string };
	export let lang: string;
	export let defaultLang: string;

	let active: string = '';
	onMount(() => {
		active = window.location.pathname.split('/').pop() || '';
	});

	$: open = false;

	const buildLink = (key: string) => {
		if (key === 'home') return lang !== defaultLang ? `/${key}/${lang}` : '/';
		return lang !== defaultLang ? `/${key}/${lang}` : `/${key}`;
	};
</script>

<header class="sticky top-0 z-10 flex min-h-14 items-center bg-white px-4 text-black md:px-10">
	<nav class={`w-full`}>
		<ul
			class={`${open ? 'fixed' : 'hidden'} left-0 z-10 w-full flex-col items-center justify-center gap-y-4 bg-white p-8 md:flex md:w-auto md:flex-row md:justify-between md:p-0`}
		>
			{#each Object.entries(menu) as [key, text]}
				<li>
					<a
						class={`hover:underline ${active === key ? 'underline' : ''}`}
						on:click={() => (active = key || '')}
						href={buildLink(key)}>{text}</a
					>
				</li>
			{/each}
		</ul>
	</nav>

	<button class="absolute right-4 top-4 z-20 md:hidden" on:click={() => (open = !open)}>
		{#if open}
			<IconX size={25} stroke={1} />
		{:else}
			<IconMenu size={25} stroke={1} />
		{/if}
	</button>
</header>
