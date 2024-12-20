<script>
	import { page } from '$app/stores';
	import Header from '$lib/components/Header.svelte';
	import '../../../app.css';

	let menu = $state($page.data.menu);
</script>

<Header {menu} />
<main>
	{#key $page.params.slug || $page.params.lang}
		<slot />
	{/key}
</main>
