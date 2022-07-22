<script>
	import Select from '../components/Select.svelte';
	import Table1 from '../components/Table1.svelte';
	const dome = () => {};
	let tableData = {
		headerMethod: '',
		itemMethod: '/clientdetail',
		tableHeader: ['Shipping Mark', 'Name', 'email', 'phone Number'],
		tableContent: [
			{
				id: '1',
				text: ['GDE339499', 'Asare Gideon', 'asaredampale@gmail.com', '0554433453']
			},
			{
				id: '2',
				text: ['DBE339499', 'Yaw Fish', 'fisheredampale@gmail.com', '0554433453']
			}
		]
	};
	let data = [
		{
			id: '2',
			title: 'All',
			selected: true
		},
		{
			id: '3',
			title: 'Last Year',
			selected: false
		}
	];
</script>

<div class="flex flex-col items-center">
	<div class=" w-[95%] py-4  flex justify-between ">
		<h1 class="text-2xl font-bold dark:text-slate-50 text-gray-600 ">CLIENTS</h1>
		<div>
			<Select {data} />
		</div>
	</div>
	<div class="w-[95%] flex self-center">
		<Table1 {tableData} />
	</div>
</div>
