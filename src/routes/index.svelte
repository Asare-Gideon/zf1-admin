<script type="ts">
	// @ts-nocheck
	import { sideBarToggle } from '../store/globalVariables';
	import { onMount } from 'svelte';

	onMount(() => {
		FusionCharts.ready(function () {
			var chartObj = new FusionCharts({
				type: 'line',
				renderAt: 'chart-container',
				width: '93%',
				height: '390',
				dataFormat: 'json',
				dataSource: {
					chart: {
						bgColor: '#222',
						canvasbgColor: '#111',
						theme: 'fusion',
						caption: 'can be anything',
						subCaption: 'Last week',
						xAxisName: 'Day',
						yAxisName: 'No. of Visitors',
						lineThickness: '2',
						canvasBgAngle: '50'
					},
					data: [
						{
							label: 'Mon',
							value: '15123',
							color: '#fb8931'
						},
						{
							label: 'Tue',
							value: '14233',
							color: '#fb8931'
						},
						{
							label: 'Wed',
							value: '23507',
							color: '#fb8931'
						},
						{
							label: 'Thu',
							value: '9110',

							color: '#fb8931'
						},
						{
							label: 'Fri',
							value: '15529',
							color: '#fb8931'
						},
						{
							label: 'Sat',
							value: '20803',
							color: '#fb8931'
						},
						{
							label: 'Sun',
							value: '19202',
							color: '#fb8931'
						}
					],
					trendlines: [
						{
							line: [
								{
									startvalue: '18500',
									color: '#fb8931',
									displayvalue: 'Average{br}weekly{br}footfall',
									valueOnRight: '1',
									thickness: '2'
								}
							]
						}
					]
				}
			});
			chartObj.render();
		});
	});
</script>

<div class="w-full flex flex-col items-center px-5  pt-3">
	<div class="w-full">
		<h1 class="mt-1 mb-3 font-bold text-slate-600 dark:text-slate-50 pl-2 text-3xl ">Analytices</h1>
	</div>
	<div class="" id="chart-container" />
	<div class="w-full my-3">
		<div class="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
			<div
				class="bg-white dark:bg-[#000222] hover:scale-105 shadow cursor-pointer rounded-lg p-4 sm:p-6 xl:p-8 "
			>
				<div class="flex items-center">
					<div class="flex-shrink-0">
						<span
							class="text-2xl dark:text-slate-50 sm:text-3xl leading-none font-bold text-gray-900"
							>2,340</span
						>
						<h3 class="text-base dark:text-slate-50 font-normal text-gray-500">
							New products this week
						</h3>
					</div>
					<div
						class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold"
					>
						14.6%
						<svg
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
				</div>
			</div>
			<div
				class="bg-white hover:scale-105 dark:bg-[#000222] shadow cursor-pointer rounded-lg p-4 sm:p-6 xl:p-8 "
			>
				<div class="flex items-center">
					<div class="flex-shrink-0">
						<span
							class="text-2xl dark:text-slate-50 sm:text-3xl leading-none font-bold text-gray-900"
							>5,355</span
						>
						<h3 class="text-base dark:text-slate-50 font-normal text-gray-500">
							Visitors this week
						</h3>
					</div>
					<div
						class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold"
					>
						32.9%
						<svg
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
				</div>
			</div>
			<div
				class="bg-white hover:scale-105 dark:bg-[#000222] shadow rounded-lg  cursor-pointer p-4 sm:p-6 xl:p-8 "
			>
				<div class="flex items-center">
					<div class="flex-shrink-0">
						<span
							class="text-2xl sm:text-3xl leading-none font-bold dark:text-slate-50 text-gray-900"
							>385</span
						>
						<h3 class="text-base font-normal dark:text-slate-50 text-gray-500">
							User signups this week
						</h3>
					</div>
					<div
						class="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold"
					>
						-2.7%
						<svg
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
