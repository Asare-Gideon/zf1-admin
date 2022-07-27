<script type="ts">
	import { goto } from '$app/navigation';

	//@ts ignore
	// itemMtheod and the headerMethod can take link or a method
	interface tableProp {
		itemText?: string;
		headerText?: string;
		itemMethod: (() => void) | string;
		headerMethod: (() => void) | string;
		tableHeader: string[];
		tableContent: {
			id: string;
			text: string[];
		}[];
	}

	export /**
* @type {{
	itemText?: string
	headerText?: string
	itemMethod: (() => void) | string;
	headerMethod: (() => void) | string;
	tableHeader: string[];
	tableContent: {
		id: string;
		text: string[];
	}[];
}
}
*/
	let tableData: tableProp;

	const handleHeaderMethod = (): void => {
		if (typeof tableData.headerMethod === 'string') {
			goto(tableData.headerMethod);
		} else {
			tableData.headerMethod();
		}
	};
	const handleItemMehtod = (): void => {
		if (typeof tableData.itemMethod === 'string') {
			goto(tableData.itemMethod);
		} else {
			tableData.itemMethod();
		}
	};
</script>

<div class=" pr-4 sm:pr-0 w-full mx-auto">
	<div class="flex flex-col">
		<div class="overflow-x-auto shadow-md sm:rounded-lg">
			<div class="inline-block min-w-full align-middle">
				<div class="overflow-hidden ">
					<table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
						<thead class="bg-gray-100 dark:bg-gray-700">
							<tr>
								<th scope="col" class="p-4">
									<div class="flex items-center">
										<input
											id="checkbox-all"
											type="checkbox"
											class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
										/>
										<label for="checkbox-all" class="sr-only">checkbox</label>
									</div>
								</th>
								{#each tableData.tableHeader as header}
									<th
										scope="col"
										class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
									>
										{header}
									</th>
								{/each}

								<th
									scope="col"
									class="p-4 cursor-pointer  flex justify-end"
									on:click={() => handleHeaderMethod()}
								>
									<span class="text-blue-600 dark:text-blue-500 hover:underline"
										>{tableData.headerText ? tableData.headerText : 'MSG ALL'}</span
									>
								</th>
							</tr>
						</thead>
						<tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
							{#each tableData.tableContent as content}
								<tr
									class="hover:bg-gray-100 dark:hover:bg-gray-700"
									on:click={() => {
										handleItemMehtod();
									}}
								>
									<td class="p-4 w-4">
										<div class="flex items-center">
											<input
												id="checkbox-table-1"
												type="checkbox"
												class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
											/>
											<label for="checkbox-table-1" class="sr-only">checkbox</label>
										</div>
									</td>
									{#each content.text as text}
										<td
											class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
											>{text}</td
										>
									{/each}
									<td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
										<a
											on:click={() => {
												handleItemMehtod();
											}}
											href={typeof tableData.itemMethod === 'string' ? tableData.itemMethod : '#'}
											class="text-blue-600 cursor-pointer dark:text-blue-500 hover:underline"
											>{tableData.itemText ? tableData.itemText : 'View'}</a
										>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
