<script lang="ts">
	interface Card {
		title: string;
		subtitle: string;
		date: string;
		size: string;
		images: { src: string; alt: string }[];
	}
	export let list: Card[];
	const colPos = [1, 5, 2, 4, 6];
	const rowPos = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11];
</script>

<div class="scroll-container">
	<ul class="grid grid-flow-row grid-cols-6">
		{#each list as item, i}
			<li class={`col-span-1 col-start-${colPos[i]} row-start-${rowPos[i]} card`}>
				<div class="card-inner">
					<div class="card-front">
						<img src={item.images[0].src} alt={item.images[0].alt} />
					</div>
					<div class="card-back">
						<img src={item.images[0].src} alt={item.images[0].alt} />
						<div class="card-overlay">
							<h3>{item.title}</h3>
							<p>{item.subtitle}</p>
						</div>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.scroll-container {
		position: relative;
		z-index: 1;
		overflow-y: scroll;
		height: 100vh;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-auto-rows: 200px; /* Ajusta la altura de las filas según sea necesario */
		gap: 10px;
		padding: 20px;
	}

	.card {
		perspective: 1000px;
	}

	.card-inner {
		position: relative;
		transition: transform 0.6s;
		transform-style: preserve-3d;
	}

	.card:hover .card-inner {
		transform: rotateY(180deg);
		cursor: pointer;
	}

	.card-front,
	.card-back {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
	}

	.card-back {
		transform: rotateY(180deg);
	}

	.card-back img {
		filter: invert(1);
	}

	.card-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
