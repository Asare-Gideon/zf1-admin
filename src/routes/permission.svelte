<div class="px-5 py-4">
	<h1 class="dark:text-slate-50 text-2xl font-bold">Permissions</h1>

	<div class="mt-4 w-full grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-4">
		<div
			class="bg-white  relative overflow-hidden flex-col  flex dark:bg-slate-800 shadow cursor-pointer rounded-lg p-4 sm:p-6 xl:p-8 "
		>
			<div>
				<div class="flex flex-col mb-4">
					<label class="text-lg dark:text-slate-50 mb-2" for="name">Name</label>
					<input
						type="text"
						placeholder="Admin"
						class="outline-none border-none rounded-lg px-3 bg-slate-200 dark:bg-slate-600 dark:text-slate-50"
					/>
				</div>
				<div class="flex flex-col mb-4">
					<label class="text-lg dark:text-slate-50 mb-2" for="name">Description</label>
					<textarea
						type="text"
						placeholder="Description"
						class="outline-none border-none rounded-lg h-28 bg-slate-200 resize-none px-3 dark:bg-slate-600 dark:text-slate-50"
					/>
				</div>
			</div>
		</div>

		<div
			class="bg-white  relative overflow-hidden  dark:bg-slate-800 shadow cursor-pointer rounded-lg p-4 sm:p-6 xl:p-8 "
		>
			<!--table  -->

			<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
				<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead
						class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
					>
						<tr>
							<th scope="col" class="py-3 px-6">TYPE </th>
							<th scope="col" class="py-3 px-6">
								<span class="mr-1">READ</span>
								<input
									id="checkbox-all-search"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
							</th>
							<th scope="col" class="py-3 px-6">
								<span class="mr-1">ADMIN</span>
								<input
									id="checkbox-all-search"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
							</th>
							<th scope="col" class="py-3 px-6">
								<span class="mr-1">CREATE</span>
								<input
									id="checkbox-all-search"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
							</th>
							<th scope="col" class="py-3 px-6">
								<span class="mr-1">UPDATE</span>
								<input
									id="checkbox-all-search"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr
							class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
						>
							<th
								scope="row"
								class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
							>
								Account
							</th>
							<td class="py-4 px-6">
								<input
									id="checkbox-all-search"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
							</td>
							<td class="py-4 px-6">
								<input
									id="checkbox-all-search"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
							</td>
							<td class="py-4 px-6">
								<input
									id="checkbox-all-search"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
							</td>
							<td class="py-4 px-6">
								<input
									id="checkbox-all-search"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
							</td>
						</tr>
						<tr
							class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
						>
							<th
								scope="row"
								class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
							>
								Event
							</th>
							<td class="py-4 px-6">
								<input
									id="checkbox-all-search"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
							</td>
							<td class="py-4 px-6">
								<input
									id="checkbox-all-search"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
							</td>
							<td class="py-4 px-6">
								<input
									id="checkbox-all-search"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
							</td>
							<td class="py-4 px-6">
								<input
									id="checkbox-all-search"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
							</td>
						</tr>
						<tr
							class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
						>
							<th
								scope="row"
								class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
							>
								Alarms
							</th>
							<td class="py-4 px-6">
								<input
									id="checkbox-all-search"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
							</td>
							<td class="py-4 px-6">
								<input
									id="checkbox-all-search"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
							</td>
							<td class="py-4 px-6">
								<input
									id="checkbox-all-search"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
							</td>
							<td class="py-4 px-6">
								<input
									id="checkbox-all-search"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
							</td>
						</tr>
						<tr
							class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
						>
							<th
								scope="row"
								class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
							>
								Accountant
							</th>
							<td class="py-4 px-6">
								<input
									id="checkbox-all-search"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
							</td>
							<td class="py-4 px-6">
								<input
									id="checkbox-all-search"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
							</td>
							<td class="py-4 px-6">
								<input
									id="checkbox-all-search"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
							</td>
							<td class="py-4 px-6">
								<input
									id="checkbox-all-search"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
							</td>
						</tr>
						<tr
							class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
						>
							<th
								scope="row"
								class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
							>
								Product Manager
							</th>
							<td class="py-4 px-6">
								<input
									id="checkbox-all-search"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
							</td>
							<td class="py-4 px-6">
								<input
									id="checkbox-all-search"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
							</td>
							<td class="py-4 px-6">
								<input
									id="checkbox-all-search"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
							</td>
							<td class="py-4 px-6">
								<input
									id="checkbox-all-search"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>

	<div class="flex items-center justify-center mt-24">
		<button
			class="animate__animated animate__bounceIn text-slate-50 w-[15rem] p-3 rounded-md outline-none ring-0 border-none active:right-0 focus:ring-0 focus:outline-none focus:border-none bg-orange-500"
			>SAVE</button
		>
	</div>
</div>
