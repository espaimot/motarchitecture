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
			let heightInc = 0.0001;

			let maxHeight = 170;

			p5.setup = () => {
				p5.createCanvas(400, 400, p5.WEBGL);
				p5.rectMode(p5.CENTER);
				p5.angleMode(p5.DEGREES);
			};

			p5.draw = () => {
				p5.background(220);

				p5.rotateX(-45);
				p5.rotateY(45);

				xoff = 0;
				for (let i = 0; i < cols; i++) {
					yoff = 0;
					for (let j = 0; j < rows; j++) {
						const boxHeight = p5.map(p5.noise(xoff, yoff, zoff), 0, 1, 0, maxHeight);
						yoff += inc;

						let r = p5.noise(zoff) * 255;
						let g = p5.noise(zoff + 10) * 255;
						let b = p5.noise(zoff + 40) * 255;

						p5.fill(r, g, b);
						p5.push();
						p5.translate(i * size - p5.width / 4, 0, j * size - p5.width / 4);
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
