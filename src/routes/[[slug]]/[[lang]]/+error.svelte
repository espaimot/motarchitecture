<script>
	import { page } from '$app/stores';
</script>

<h1>{page.error?.status}: {page.error?.message || 'Unknown error'}</h1>
