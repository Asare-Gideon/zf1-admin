<script type="ts">
	// @ts-nocheck
	import { onMount } from 'svelte';
	onMount(() => {
		FusionCharts.ready(function () {
			console.log('inside fus');
			var chartObj = new FusionCharts({
				type: 'line',
				renderAt: 'chart-container',
				width: '95%',
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

<div class="w-full flex flex-col items-center pl-2 pt-3">
	<div class="w-full">
		<h1 class="mt-1 mb-3 text-slate-600 dark:text-slate-50 pl-2 text-3xl ">Analytices</h1>
	</div>
	<div class="" id="chart-container" />
</div>
