<script type="ts">
	import Select from '../components/Select.svelte';
	import Table1 from '../components/Table1.svelte';
	import AddClientModal from '../components/AddClientModal.svelte';
	import ClientEditModal from '../components/ClientEditModal.svelte';
	let isToggled = false;
	let viewDetailToggle = false;
	const handleViewDetailToggle = () => {
		viewDetailToggle = !viewDetailToggle;
	};
	const handleViewDetail = () => {
		isToggled = !isToggled;
	};

	const handleAddCont = () => {};
	let tableData = {
		itemText: 'View more',
		headerText: 'Add Client',
		headerMethod: handleViewDetail,
		itemMethod: handleViewDetailToggle,
		tableHeader: ['Shipping mark', 'Description', 'Tracking', 'CBM', 'Quantity', 'Rate'],
		tableContent: [
			{
				id: '1',
				text: ['GDE339499', 'shoes, Blenders etc', '334', '4.55', '4', '5.5']
			},
			{
				id: '13',
				text: ['GDE339499', 'shoes, Blenders etc', '334', '4.55', '4', '5.5']
			},
			{
				id: '2',
				text: ['GDE339499', 'shoes, Blenders etc', '334', '4.55', '4', '5.5']
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
		<h1 class="text-2xl font-bold text-gray-600 ">DD4455322</h1>
		<div>
			<Select {data} />
		</div>
	</div>
	<div class="w-[95%] flex self-center">
		<Table1 {tableData} />
	</div>
	<AddClientModal {isToggled} handleIsToggled={handleViewDetail} />
	<ClientEditModal isToggled={viewDetailToggle} handleIsToggled={handleViewDetailToggle} />
</div>
