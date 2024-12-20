<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	let { data } = $props();
	let menu = $state(data.menu);
</script>

<Header {menu} />

<main>
	<slot />
</main>
