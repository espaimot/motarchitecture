<script>
	import { page } from '$app/state';
</script>

<h1>{page.error?.message || 'Unknown error'}</h1>
