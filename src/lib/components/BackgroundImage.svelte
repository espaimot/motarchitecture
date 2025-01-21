<script lang="ts">
	import P5, { type Sketch } from 'p5-svelte';

	export let isP5enabled: boolean;
	export let src: string;
	export let alt: string;
	let sketch: Sketch;

	if (isP5enabled) {
		sketch = (p5) => {
			let cols = 20;
			let rows = 20;
			let size = 10;
			let xoff = 0;
			let yoff = 0;
			let zoff = 0;
			let inc = 0.1;
			let heightScrollInc = 0.009;
			let heightInc = 0.00005;

			let maxHeight = 290;

			let width = 0;

			let totalWidth = 0;

			p5.setup = () => {
				width = Math.max(400, window.innerWidth);

				p5.createCanvas(width, 400, p5.WEBGL);
				p5.rectMode(p5.CENTER);
				p5.angleMode(p5.DEGREES);

				totalWidth = cols * (size * Math.sqrt(2));
			};

			p5.draw = () => {
				p5.background(255);

				p5.rotateX(-45);
				p5.rotateY(45);

				xoff = 0;
				for (let i = 0; i < cols; i++) {
					yoff = 0;
					for (let j = 0; j < rows; j++) {
						const boxHeight = p5.map(p5.noise(xoff, yoff, zoff), 0, 1, 0, maxHeight);
						yoff += inc;

						// const r = p5.noise(zoff) * 255;
						// const g = p5.noise(zoff + 10) * 255;
						// const b = p5.noise(zoff + 40) * 255;

						const r = 0;
						const g = 79;
						const b = 32;

						p5.fill(r, g, b);
						p5.push();
						p5.translate(i * size - totalWidth / 2, 0, j * size - totalWidth / 2);
						p5.box(size, boxHeight, size);
						p5.pop();
					}
					xoff += inc;
					zoff += heightInc;
				}
			};

			p5.mouseWheel = () => {
				zoff += heightScrollInc;
			};

			p5.touchMoved = () => {
				zoff += heightScrollInc;
			};
		};
	}
</script>

<div class="fixed left-0 top-0 z-[-1] flex h-full w-full items-center justify-center">
	{#if !isP5enabled}
		<img {src} {alt} class="animated-image h-auto w-[90%] max-w-[900px] rounded-md md:w-[70%]" />
	{:else}
		<P5 {sketch} />
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
