<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	let { children } = $props();

	const menu = {
		'': 'Espai.MOT',
		projectes: 'Projectes',
		contacte: 'Contacte'
	};
</script>

<Header {menu} />
{@render children()}
