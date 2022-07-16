<script type="ts">
	import { sideBarToggle } from '../store/globalVariables';

	let newToggle = $sideBarToggle;

	const handleToggle = (e: Event): void => {
		console.log(newToggle);
		newToggle = !$sideBarToggle;
		e.preventDefault();
		sideBarToggle.set(newToggle);
	};
</script>

<div
	class="flex flex-1 bg-slate-50 pl-2 justify-between pr-4 shadow-[0_3px_3px_-3px_rgba(0,0,0,0.3)] w-full  h-[3.5rem]"
>
	<div class="flex items-center  w-[50%] ">
		<span>
			<ion-icon class="text-xl pt-2" name="search-outline" />
		</span>
		<input class="w-full p-3 outline-none bg-slate-50" type="text" placeholder="search...." />
	</div>
	<div class="flex items-center">
		<a href="#" class="hover:text-orange-400">
			<ion-icon class="text-2xl" name="notifications-outline" />
		</a>
		<a href="#" class="hover:text-orange-400">
			<ion-icon class="text-2xl ml-4" name="person-circle-outline" />
		</a>
		<a
			on:click={(e) => {
				handleToggle(e);
			}}
			href="#"
			class="hover:text-orange-400"
		>
			<ion-icon
				class="text-2xl ml-4"
				name={$sideBarToggle ? 'arrow-forward-circle-outline' : 'arrow-back-circle-outline'}
			/>
		</a>
	</div>
</div>
