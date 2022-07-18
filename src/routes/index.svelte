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
						theme: 'fusion',
						caption: 'can be anything',
						subCaption: 'Last week',
						xAxisName: 'Day',
						yAxisName: 'No. of Visitors',
						lineThickness: '2'
					},
					data: [
						{
							label: 'Mon',
							value: '15123'
						},
						{
							label: 'Tue',
							value: '14233'
						},
						{
							label: 'Wed',
							value: '23507'
						},
						{
							label: 'Thu',
							value: '9110'
						},
						{
							label: 'Fri',
							value: '15529'
						},
						{
							label: 'Sat',
							value: '20803'
						},
						{
							label: 'Sun',
							value: '19202'
						}
					],
					trendlines: [
						{
							line: [
								{
									startvalue: '18500',
									color: '#29C3BE',
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

<div id="chart-container" />
