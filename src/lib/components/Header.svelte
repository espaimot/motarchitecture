<script lang="ts">
	import { IconMenu, IconX } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';
	import type { MenuMultiLang } from '../../types/Menu';
	import type { Languages } from '../../types/DataInput';

	export let menu: MenuMultiLang;
	export let lang: string;
	export let defaultLang: string;
	const languages = ['en', 'ca', 'es'];

	let active: string = '';
	onMount(() => {
		active = window.location.pathname.split('/').pop() || '';
	});

	$: menuTranslated = menu[lang as Languages].entries.sort((a, b) => a.order - b.order);
	$: open = false;

	const buildLink = (key: string) => {
		if (key === 'home') return lang !== defaultLang ? `/${key}/${lang}` : '/';
		return lang !== defaultLang ? `/${key}/${lang}` : `/${key}`;
	};

	const buildLinkTranslation = (lang: string) => {
		if (active === 'home' || active === '') return lang !== defaultLang ? `/home/${lang}` : '/';
		return lang !== defaultLang ? `/${active}/${lang}` : `/${active}`;
	};
</script>

<header class="sticky top-0 z-10 flex min-h-14 items-center bg-white px-4 text-black md:px-10">
	<nav class={`w-full`}>
		<ul
			class={`${open ? 'fixed' : 'hidden'} left-0 z-10 flex w-full flex-col gap-4 bg-white p-8 pt-14 text-xl md:flex md:w-auto md:flex-row md:justify-end md:gap-8 md:p-0`}
		>
			<li class={`absolute left-8 top-0 flex gap-1 md:top-2`}>
				{#each languages as language}
					<a
						class={`cursor-pointer ${lang === language ? 'border-b border-black pb-[0px]' : ''}`}
						on:click={() => {
							lang = language;
							open = false;
						}}
						href={buildLinkTranslation(language)}
					>
						{language} .
					</a>
				{/each}
			</li>
			{#each menuTranslated as menuEntry}
				<li>
					<a
						class={`hover:shadow-xl ${active === menuEntry['slug'] ? 'border-b border-black pb-[2px]' : ''}`}
						on:click={() => {
							active = menuEntry['slug'] || '';
							open = false;
						}}
						href={buildLink(menuEntry['slug'])}>{menuEntry['title']}</a
					>
				</li>
			{/each}
		</ul>
	</nav>

	<button class="absolute right-4 top-4 z-20 md:hidden" on:click={() => (open = !open)}>
		{#if open}
			<IconX size={35} stroke={1} />
		{:else}
			<IconMenu size={35} stroke={1} />
		{/if}
	</button>
</header>
