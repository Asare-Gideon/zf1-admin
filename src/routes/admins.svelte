<script>
	import AddminModal from '../components/AddminModal.svelte';
	import Select from '../components/Select.svelte';
	import Table1 from '../components/Table1.svelte';
	let isToggled = false;
	const handleIsToggled = () => {
		isToggled = !isToggled;
	};
	let tableData = {
		headerText: 'Add More',
		headerMethod: handleIsToggled,
		itemMethod: '#',
		tableHeader: ['Shipping Mark', 'Name', 'email', 'phonek Number'],
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
	<div class=" sm:w-[95%] py-4 w-full p-3 flex sm:justify-between flex-col sm:flex-row ">
		<h1 class="text-2xl font-bold dark:text-slate-50 mb-8   sm:ml-0 text-gray-600">ADMINS</h1>
		<div>
			<Select {data} />
		</div>
	</div>
	<div class="w-[95%] flex self-center">
		<Table1 {tableData} />
	</div>
	<AddminModal {isToggled} {handleIsToggled} />
</div>
