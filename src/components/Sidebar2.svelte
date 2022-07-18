<script type="ts">
	import { goto } from '$app/navigation';
	import { sideBarToggle } from '../store/globalVariables';
	let items = [
		{
			id: '1',
			title: 'Dashboard',
			selected: true,
			iconName: 'grid-outline',
			link: '/'
		},
		{
			id: '2',
			title: 'Client',
			selected: false,
			iconName: 'people-outline',
			link: '/clients'
		},
		{
			id: '3',
			title: 'Containers',
			selected: false,
			iconName: 'bookmarks',
			link: '/containers'
		},
		{
			id: '4',
			title: 'Rate',
			selected: false,
			iconName: 'people-outline'
		}
	];
	function handleClick(id: String, e: Event) {
		e.preventDefault();
		let newitems = items.map((item) => {
			if (item.id === id) {
				goto(item.link as any);
				return {
					...item,
					selected: true
				};
			} else {
				return {
					...item,
					selected: false
				};
			}
		});
		items = newitems;
	}
</script>

<div class="min-h-screen bg-slate-800">
	<div
		class={`sidebar min-h-screen ${
			$sideBarToggle ? 'w-[3.35rem]' : 'w-56'
		} overflow-hidden border-r  hover:bg-slate-800 hover:shadow-lg`}
	>
		<div class="flex h-screen flex-col justify-between  pb-6">
			<div class="">
				<div class="w-full bg-slate-700 py-1">
					<div class="w-max p-2.5">
						<img src="/images/logo3.png" class="w-32" alt="" />
					</div>
				</div>
				<ul class="mt-6 space-y-2 tracking-wide">
					{#each items as item}
						<li class="min-w-max">
							<a
								on:click={(e) => {
									handleClick(item.id, e);
								}}
								href={item.link}
								aria-label="dashboard"
								class={`relative group cursor-pointer flex items-center space-x-4 ${
									item.selected ? 'bg-gradient-to-r from-orange-400 to-orange-500' : ''
								} px-4 py-3 `}
							>
								<ion-icon
									class={`text-xl text-white ${item.selected ? '' : 'group-hover:text-orange-400'}`}
									name={item.iconName}
								/>
								<span class="-mr-1 font-medium text-white group-hover:text-slate-50"
									>{item.title}</span
								>
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="w-max -mb-3">
				<a href="#" class="group flex items-center space-x-4 rounded-md px-4 py-3 text-slate-50">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 group-hover:fill-orange-500"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
							clip-rule="evenodd"
						/>
					</svg>
					<span class="group-hover:text-slate-50">Settings</span>
				</a>
			</div>
		</div>
	</div>
</div>
