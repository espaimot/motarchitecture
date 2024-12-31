<script lang="ts">
	import type { ProjectCard } from '../../types/Card';

	export let card: ProjectCard;
</script>

<div class="card">
	<img src={card.images[0].src} alt={card.images[0].alt} class="card-image" />
	<div class="card-overlay">
		<div class="card-text">
			<h3 class="mb-2 text-xs font-bold md:mb-4 md:text-xl">{card.title}</h3>
			<p class="text-xs font-medium md:text-sm md:leading-6">{card.subtitle}</p>
		</div>
	</div>
</div>

<style>
	.card {
		position: relative;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.card-image {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.card-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.7);
		display: flex;
		justify-content: center;
		align-items: center;
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	.card:hover .card-overlay {
		opacity: 1;
		cursor: pointer;
	}

	.card-text {
		text-align: justify;
		color: black;
		padding: 1rem;

		h3 {
			text-align: center;
		}
	}
</style>
