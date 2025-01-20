<script lang="ts">
	import type { TimelineCard } from '../../types/Card';
	import type { Languages } from '../../types/DataInput';

	export let lang: Languages;
	export let list: TimelineCard[];

	function formatDate(dateString: string, lang: Languages): string {
		const date = new Date(dateString);
		const options: Intl.DateTimeFormatOptions = {
			day: '2-digit',
			month: '2-digit',
			year: '2-digit'
		};
		const formattedDate = new Intl.DateTimeFormat(lang, options).format(date);
		return formattedDate.replace(/\//g, '.');
	}
</script>

<div class="relative mx-auto flex h-[90vh] w-[30%] items-center md:w-[60%]">
	<div
		class="absolute left-1/2 top-1/2 h-[95%] w-1 -translate-y-1/2 transform bg-black md:left-0 md:h-1 md:w-full"
	></div>
	<ul
		class="relative m-0 flex h-[90%] w-full list-none flex-col justify-between p-0 md:h-auto md:flex-row"
	>
		{#each list as { date, description }, i}
			<li class="timeline-point relative flex flex-col items-center">
				<div
					class={`absolute ${i % 2 ? `md:top-[-40px]` : `md:top-[-90px]`} left-[-40px] flex w-[100px] cursor-pointer items-center justify-center md:left-auto`}
				>
					{formatDate(date, lang)}
				</div>
				<div
					class={`absolute ${i % 2 ? `top-[-16px]` : `top-[-65px]`} ${i % 2 ? `h-4` : `h-16`} h-12 bg-white md:w-1 md:border`}
				></div>

				<div class="point h-2 w-2 cursor-pointer rounded-full bg-black"></div>
				<div
					class="align-center tooltip absolute top-[30px] flex hidden min-w-[200px] flex-col items-center md:right-auto"
				>
					<div class="w-full bg-white p-4 shadow-md">
						<div class="">{description}</div>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.timeline-point:hover .tooltip {
		display: flex;
		z-index: 20;
	}

	.timeline-point:hover .point {
		box-shadow: 0 0 0 2px black;
	}
</style>
