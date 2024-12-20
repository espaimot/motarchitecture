<script>
	import { page } from '$app/stores';
	import Header from '$lib/components/Header.svelte';
	import '../../../app.css';

	let menu = $state($page.data.menu);
	let lang = $state($page.data.lang);
	let defaultLang = $state($page.data.defaultLang);
</script>

<Header {menu} {lang} {defaultLang} />
<!-- La key permite que se renderice el contenido solo si el slug o el idioma cambian, sino el contenido se mantiene estatico en el DOM. -->
<main>
	{#key $page.params.slug || $page.params.lang}
		<slot />
	{/key}
</main>
