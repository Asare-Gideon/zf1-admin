<script type="ts">
	import ClientModal from '../components/ClientModal.svelte';
	import Table1 from '../components/Table1.svelte';
	let isToggled = false;
	const handleViewDetail = () => {
		isToggled = !isToggled;
	};
	let tableData = {
		itemText: 'Detail',
		headerText: 'Message',
		headerMethod: '',
		itemMethod: handleViewDetail,
		tableHeader: ['Container Num', 'Load Date', 'Container rate'],
		tableContent: [
			{
				id: '1',
				text: ['GDE339499', '23/04/2020', '4.3333']
			},
			{
				id: '2',
				text: ['BEEE339499', '23/04/2020', '20.3333']
			}
		]
	};
</script>

<div class="w-[90%] md:w-full flex justify-center p-5">
	<div class="w-full md:w-[95%]">
		<h1 class="md:text-2xl text-lg mb-3 text-gray-600">Client Detials</h1>
		<div class="flex justify-between flex-wrap flex-col md:flex-row">
			<div class="flex items-center ml-3 mt-3 md:px-10 px-2 md:py-3 py-2 bg-slate-800 rounded-md">
				<ion-icon class="md:text-2xl text-lg text-orange-400" name="person" />
				<h3 class="md:text-lg text-sm text-slate-50 ml-3">Asare Gideon</h3>
			</div>
			<div class="flex items-center md:px-10 px-2 ml-3 mt-3 md:py-3 py-2 bg-slate-800 rounded-md">
				<ion-icon class="md:text-2xl text-lg text-orange-400" name="mail" />
				<h3 class="md:text-lg text-sm text-slate-50 ml-3">asaredampale@gmail.com</h3>
			</div>
			<div class="flex items-center ml-3 mt-3 md:px-10 px-2 md:py-3 py-2 bg-slate-800 rounded-md">
				<ion-icon class="md:text-2xl text-lg text-orange-400" name="bookmark" />
				<h3 class="md:text-lg text-sm text-slate-50 ml-3">AD4005400</h3>
			</div>

			<div class="flex ml-3 mt-3 items-center md:px-10 px-2 md:py-3 py-2 bg-slate-800 rounded-md">
				<ion-icon class="md:text-2xl text-lg text-orange-400" name="call" />
				<h3 class="md:text-lg text-sm text-slate-50 ml-3">05554483944</h3>
			</div>
		</div>
		<div class="mt-5">
			<Table1 {tableData} />
		</div>
	</div>
	<ClientModal {isToggled} handleIsToggled={handleViewDetail} />
</div>
