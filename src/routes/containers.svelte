<script type="ts">
	import Select from '../components/Select.svelte';
	import ClientModal from '../components/ClientModal.svelte';
	import Table1 from '../components/Table1.svelte';
	import AddContModal from '../components/AddContModal.svelte';
	let isToggled = false;
	const handleViewDetail = () => {
		isToggled = !isToggled;
	};

	const handleAddCont = () => {};
	let tableData = {
		headerText: 'Add Cont',
		headerMethod: handleViewDetail,
		itemMethod: '/containerdetails',
		tableHeader: ['Container Number', 'Loading Date', 'Container rate'],
		tableContent: [
			{
				id: '1',
				text: ['GDE339499', '23/04/2020', '4.3333']
			},
			{
				id: '13',
				text: ['GDE339499', '23/04/2020', '4.3333']
			},
			{
				id: '2',
				text: ['BEEE339499', '23/04/2020', '20.3333']
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
	<div class=" w-[95%] py-4 md:flex-row flex-col  mb-1 md:mb-0 flex justify-between ">
		<h1 class=" text-2xl font-bold dark:text-slate-50 text-gray-600 ">CONTAINERS</h1>
		<div class="md:mt-0 mt-4">
			<Select {data} />
		</div>
	</div>
	<div class="w-full ml-8 md:ml-0 mr-24 md:mr-0 md:w-[95%] flex self-center">
		<Table1 {tableData} />
	</div>
	<AddContModal {isToggled} handleIsToggled={handleViewDetail} />
</div>
