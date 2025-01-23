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
			let size = 12;
			let xoff = 0;
			let yoff = 0;
			let zoff = 0;
			let inc = 0.05;
			let heightScrollInc = 0.02;
			let heightInc = 0.00005;

			let maxHeight = 250;

			let width = 0;

			let totalWidth = 0;

			p5.setup = () => {
				width = Math.max(350, window.innerWidth);

				p5.createCanvas(width, 380, p5.WEBGL);
				p5.angleMode(p5.DEGREES);

				totalWidth = cols * size;
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

						const r = 130;
						const g = 172;
						const b = 152;

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

{#if !isP5enabled}
	<div class="fixed left-0 top-0 z-[-1] flex h-full w-full items-center justify-center">
		<img {src} {alt} class="animated-image h-auto w-[90%] max-w-[900px] rounded-md md:w-[70%]" />
	</div>
{:else}
	<div class="fixed left-0 top-0 z-[-1] flex h-full w-full flex-col items-center justify-start">
		<!-- <h1 class="text-400 pt-[175px] font-['Gugi'] text-[12rem] leading-[12rem] text-slate-800">
			MOT
		</h1>
		<h2
			class="text-400 align-right mb-[2rem] mr-[-11rem] font-['Roboto'] text-[2.5rem] leading-[2rem] tracking-wider text-slate-800"
		>
			arquitectura
		</h2> -->
		<img
			{src}
			{alt}
			class="animated-image h-auto w-full max-w-[900px] rounded-md pt-[170px] md:mb-[-80px] md:w-[40%] md:pt-[120px]"
		/>
		<P5 {sketch} />
	</div>
{/if}

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
