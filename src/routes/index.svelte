<script type="ts">
	// @ts-nocheck
	import { setDark, sideBarToggle } from '../store/globalVariables';
	import { onMount } from 'svelte';
	import StatisticsCard from '../components/StatisticsCard.svelte';
	import SocialActivities from '../components/SocialActivities.svelte';
	import Transactions from '../components/Transactions.svelte';
	import TodoList from '../components/TodoList.svelte';

	onMount(() => {
		FusionCharts.ready(function () {
			var chartObj = new FusionCharts({
				type: 'column2d',
				renderAt: 'barChart-container',
				width: '100%',
				height: '390',
				dataFormat: 'json',
				dataSource: {
					chart: {
						bgColor: $setDark ? '#1f2937' : '#effffff',
						canvasbgColor: '#fb8931',
						caption: 'Monthly revenue for last year',
						subCaption: "Harry's SuperMart",
						xAxisName: 'Month',
						yAxisName: 'Revenues (In USD)',
						numberPrefix: '$',
						theme: 'fusion'
					},
					data: [
						{
							label: 'Jan',
							value: '420000'
						},
						{
							label: 'Feb',
							value: '810000'
						},
						{
							label: 'Mar',
							value: '720000'
						},
						{
							label: 'Apr',
							value: '550000'
						},
						{
							label: 'May',
							value: '910000'
						},
						{
							label: 'Jun',
							value: '510000'
						},
						{
							label: 'Jul',
							value: '680000'
						},
						{
							label: 'Aug',
							value: '620000'
						},
						{
							label: 'Sep',
							value: '610000'
						},
						{
							label: 'Oct',
							value: '490000'
						},
						{
							label: 'Nov',
							value: '900000'
						},
						{
							label: 'Dec',
							value: '730000'
						}
					],
					trendlines: [
						{
							line: [
								{
									startvalue: '700000',
									valueOnRight: '1',
									displayvalue: 'Monthly Target'
								}
							]
						}
					]
				}
			});
			chartObj.render();
		});
		FusionCharts.ready(function () {
			var chartObj = new FusionCharts({
				type: 'line',
				renderAt: 'chart-container',
				width: '100%',
				height: '390',
				dataFormat: 'json',
				dataSource: {
					chart: {
						bgColor: $setDark ? '#1f2937' : '#effffff',
						canvasbgColor: '#fb8931',
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
									color: '#1f2937',
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

<div class="w-full flex flex-col items-center sm:px-5 px-0 pb-5 pt-3">
	<div class="w-full">
		<h1 class="mt-1 mb-3 font-bold text-slate-600 dark:text-slate-50 pl-3 text-3xl ">Analytics</h1>
	</div>
	<div class="grid w-full grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 p-4 gap-2">
		<div class="w-full" id="chart-container" />
		<SocialActivities />
	</div>
	<StatisticsCard />

	<!-- Transaction cont -->
	<div class="grid w-full grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 p-4 gap-2">
		<Transactions />
		<div class="w-full mt-4 ml-2" id="barChart-container" />
	</div>

	<!-- Task Summaries -->
	<TodoList />
	<!-- End of Task Summaries -->
</div>
