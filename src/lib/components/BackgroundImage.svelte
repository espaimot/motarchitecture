<script lang="ts">
	export let isP5enabled: boolean;
	export let src: string;
	export let alt: string;
	export let code: string | null;
</script>

{#if isP5enabled}
	<script>
		import { onMount } from 'svelte';
		import p5 from 'p5';
		let myP5;
		onMount(() => {
			myP5 = new p5((p) => {
				p.setup = () => {
					p.createCanvas(window.innerWidth, window.innerHeight);
				};
				p.draw = () => {
					p.background(0);
					p.fill(255);
					p.ellipse(p.mouseX, p.mouseY, 50, 50);
				};
			});
		});
	</script>
{/if}

<div class="fixed left-0 top-0 z-[-1] flex h-full w-full items-center justify-center">
	{#if isP5enabled}
		{code}
	{:else}
		<img {src} {alt} class="animated-image h-auto w-[90%] max-w-[900px] rounded-md md:w-[70%]" />
	{/if}
</div>

<style>
	@keyframes invertToNormal {
		0% {
			filter: invert(1);
		}
		100% {
			filter: invert(0);
		}
	}

	.animated-image {
		animation: invertToNormal 2s ease-in-out forwards;
	}
</style>
