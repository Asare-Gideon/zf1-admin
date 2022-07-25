<div class="md:p-5 p-2 flex flex-col items-center">
	<h1
		class="text-2xl text-center font-bold dark:text-slate-50 text-gray-600 ml-[-60px] md:mb-20 mb-10"
	>
		Assign Rates
	</h1>
	<div class="w-[76%] pl-2 pb-3">
		<label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
			>Select Rate</label
		>
		<select
			id="countries"
			class="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		>
			<option class="p-4" selected="">Dollar</option>
			<option value="DE">CBM </option></select
		>
	</div>
	<div class="flex justify-center w-[94%]">
		<form
			class=" ml-2 mr-[-10px] md:ml-0 w-full shadow-md md:w-[80%] bg-white p-5 rounded-md dark:bg-[#000222]"
		>
			<div class="grid  w-[100%] gap-6 mb-6 md:grid-cols-2">
				<div>
					<label
						for="dollar"
						class="block mb-2 text-2xl font-medium  text-gray-900 dark:text-gray-300">Dollar</label
					>
					<input
						type="text"
						id="dollar"
						class="bg-gray-50 border h-[8rem] text-5xl border-gray-300 text-gray-900 font-extrabold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="$1"
					/>
				</div>
				<div>
					<label
						for="dollar"
						class="block mb-2 text-2xl font-medium  text-gray-900 dark:text-gray-300">Rate</label
					>
					<input
						type="text"
						id="dollar"
						class="bg-gray-50 border h-[8rem] text-5xl border-gray-300 text-gray-900 font-extrabold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="₵ 8.7"
					/>
				</div>
			</div>

			<button
				type="submit"
				class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>Submit</button
			>
		</form>
	</div>
</div>
