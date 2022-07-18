<script>
	export /**
	 * @type {() => void}
	 */
	let handleIsToggled;
	export /**
	 * @type {boolean}
	 */
	let isToggled;
</script>

{#if isToggled}
	<div
		id="defaultModal"
		tabindex="-1"
		class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
		role="dialog"
	>
		<div class="bg-black absolute left-0 top-0 right-0 bottom-0 opacity-70" />
		<div
			class="animate__animated animate__bounceIn relative p-4 w-full max-w-[90%] h-full md:h-auto"
		>
			<!-- Modal content -->
			<div class="relative bg-white rounded-lg shadow dark:bg-slate-800">
				<!-- Modal header -->
				<div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
					<h3 class="text-xl font-semibold text-gray-900 dark:text-white">Add New Client</h3>
					<button
						on:click={() => {
							handleIsToggled();
						}}
						type="button"
						class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
						data-modal-toggle="defaultModal"
					>
						<svg
							aria-hidden="true"
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/></svg
						>
						<span class="sr-only">Close modal</span>
					</button>
				</div>
				<!-- Modal body -->
				<div class="p-6 space-y-6">
					<div class="overflow-x-auto relative">
						<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
							<thead
								class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
							>
								<tr>
									<th scope="col" class="py-3 px-6">Shipping Mark </th>
									<th scope="col" class="py-3 px-6"> Description </th>
									<th scope="col" class="py-3 px-6">China Tracking</th>
									<th scope="col" class="py-3 px-6"> CBM </th>
									<th scope="col" class="py-3 px-6"> Quantity </th>
									<th scope="col" class="py-3 px-6"> Rate </th>
									<th scope="col" class="py-3 px-6">New</th>
								</tr>
							</thead>
							<tbody>
								<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
									<th
										scope="row"
										class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
									>
										<div class="relative z-0 mb-0 w-full group">
											<input
												type="text"
												name="floating_phone"
												id="floating_phone"
												class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
												placeholder=" "
											/>
											<label
												for="floating_phone"
												class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
												>search for shipping mark</label
											>
										</div>
									</th>
									<td class="py-4 px-6">
										<div class="relative z-0 mb-0 w-full group">
											<input
												type="text"
												name="floating_phone"
												id="floating_phone"
												class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
												placeholder=" "
											/>
											<label
												for="floating_phone"
												class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
												>Enter Description</label
											>
										</div>
									</td>
									<td class="py-4 px-6">
										<div class="relative z-0 mb-0 w-full group">
											<input
												type="text"
												name="floating_phone"
												id="floating_phone"
												class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
												placeholder=" "
											/>
											<label
												for="floating_phone"
												class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
												>Enter China Tracking</label
											>
										</div>
									</td>
									<td class="py-4 px-6">
										<div class="relative z-0 mb-0 w-full group">
											<input
												type="text"
												name="floating_phone"
												id="floating_phone"
												class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
												placeholder=" "
											/>
											<label
												for="floating_phone"
												class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
												>Enter CBM</label
											>
										</div>
									</td>
									<td class="py-4 px-6">
										<div class="relative z-0 mb-0 w-full group">
											<input
												type="text"
												name="floating_phone"
												id="floating_phone"
												class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
												placeholder=" "
											/>
											<label
												for="floating_phone"
												class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
												>Enter Quantity</label
											>
										</div>
									</td>
									<td class="py-4 px-6">
										<div class="relative z-0 mb-0 w-full group">
											<input
												type="text"
												name="floating_phone"
												id="floating_phone"
												class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
												placeholder=" "
											/>
											<label
												for="floating_phone"
												class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
												>Enter Rating</label
											>
										</div>
									</td>
									<td class="py-4 px-6">
										<button class="bg-blue-700 outlingInput px-3 py-1 rounded-sm text-slate-50"
											>Add</button
										>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<!-- Modal footer -->
				<div
					class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"
				>
					<button
						data-modal-toggle="defaultModal"
						type="button"
						class="text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-blue-800"
						>Add To Container</button
					>
				</div>
			</div>
		</div>
	</div>
{/if}
