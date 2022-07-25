<script type="ts">
	import { goto } from '$app/navigation';

	import AddRoleModal from '../components/AddRoleModal.svelte';
	let isToggled = false;
	const handleToggle = () => {
		isToggled = !isToggled;
	};
	let rolesArr = [
		{
			id: '1',
			roleName: 'CEP Manager',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ut',
			link: '/permission'
		},
		{
			id: '2',
			roleName: 'Accountant',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ut',
			link: '/permission'
		}
	];

	const handleDelete = () => {};
	const handleGoto = (link: string) => {
		goto(link);
	};
</script>

<div class="px-5 py-3">
	<h1 class="dark:text-slate-50 text-2xl font-bold">Create Roles</h1>
	<h3 class="dark:text-slate-50 mt-3 text-md md:text-lg font-serif text-black font-semibold">
		Grant permission on general level.
	</h3>
	<p class="font-mono text-sm md:text-lg dark:text-slate-50">
		there are several default roles defined, but you can define your own according to your needs.
	</p>

	<div class="w-[93%] my-3">
		<div class="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
			<div
				on:click={() => {
					handleGoto('/permission');
				}}
				class="bg-slate-200 hover:scale-105 relative border-dashed  border-2 border-orange-300 overflow-hidden items-center justify-center flex dark:bg-slate-800 shadow cursor-pointer rounded-lg p-4 sm:p-6 xl:p-8 "
			>
				<i class="fa-solid fa-square-plus dark:text-slate-50 text-5xl" />
			</div>
			{#each rolesArr as role}
				<div
					on:click={() => {
						handleGoto(role.link);
					}}
					class="bg-white hover:scale-105 relative dark:border-2 border-orange-300 overflow-hidden dark:bg-[#000222] shadow cursor-pointer rounded-lg p-4 sm:p-6 xl:p-8 "
				>
					<button
						on:click={() => handleDelete()}
						class="absolute group active:outline-none outline-none active:ring-0 ring-0 border-none active:border-none right-5 cursor-pointer top-4"
					>
						<i class="fa-solid fa-trash-can group-hover:text-orange-400 dark:text-white" />
					</button>
					<div class="flex items-center">
						<div class="flex-shrink-0">
							<span
								class="text-2xl dark:text-slate-50 sm:text-3xl leading-none font-bold text-gray-900"
								>{role.roleName}</span
							>
							<h3
								class="text-base mt-2 dark:text-slate-50 font-normal md:w-[75%]  w-[45%] text-gray-500"
							>
								{role.description}
							</h3>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
