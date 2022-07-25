<script type="ts">
	//@ts-nocheck
	import { filterArr } from '../store/globalVariables';
	export let data;
	let toggle = false;
	let firstValue = data[0].title;

	const handleSelect = (id: string, e: Event, item: any) => {
		firstValue = item.title;
		toggle = !toggle;
		e.preventDefault();
		let newData = filterArr(id, data);
		data = newData;
	};
	const clearInput = () => {
		firstValue = '';
	};
	let typingValue;
</script>

<div class="max-w-md mx-auto">
	<div class="relative">
		<div
			class="h-10 dark:bg-slate-800 flex border bg-slate-50 border-slate-50 dark:border-slate-800 rounded items-center"
		>
			<input
				name="select"
				id="select"
				class="px-4 appearance-none outline-none bg-slate-50  dark:bg-slate-800 h-full dark:text-gray-50 w-full"
				checked
				bind:value={firstValue}
			/>

			<button
				on:click={(e) => {
					clearInput();
				}}
				class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600"
			>
				<svg
					class="w-4 h-4 mx-2 fill-current"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<line x1="18" y1="6" x2="6" y2="18" />
					<line x1="6" y1="6" x2="18" y2="18" />
				</svg>
			</button>
			<label
				for="show_more"
				class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600"
			>
				<svg
					class="w-4 h-4 mx-2 fill-current"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<polyline points="18 15 12 9 6 15" />
				</svg>
			</label>
		</div>

		<input
			type="checkbox"
			name="show_more"
			id="show_more"
			class="hidden"
			on:click={() => {
				toggle = !toggle;
			}}
		/>
		<div
			class={`absolute rounded shadow bg-slate-800 overflow-hidden ${
				toggle ? 'flex' : 'hidden'
			} flex-col w-full mt-1 border border-slate-800`}
		>
			{#each data as item}
				<div
					class="cursor-pointer group border-t bg-slate-900"
					on:click={(e) => handleSelect(item.id, e, item)}
				>
					<a
						class={`block p-2 border-transparent ${
							item.selected ? 'border-blue-600' : ''
						} border-l-4 text-slate-50 group-hover:border-blue-600 group-hover:bg-slate-700`}
						>{item.title}</a
					>
				</div>
			{/each}
		</div>
	</div>
</div>
