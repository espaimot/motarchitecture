<script>
	import { page } from '$app/stores';
</script>

<main>
	{#key $page.params.slug}
		<slot />
	{/key}
</main>
