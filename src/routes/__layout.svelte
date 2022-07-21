<script>
	import Topbar from '../components/Topbar.svelte';
	import Login from '../components/Login.svelte';
	import '../global.css';
	import Sidebar2 from '../components/Sidebar2.svelte';
	let isLogIn = true;
</script>

<div class="bg-slate-900">
	{#if isLogIn}
		<div class="flex">
			<Sidebar2 />
			<div class="w-full">
				<Topbar />
				<div class="contentCont h-[95vh] w-full ">
					<slot />
				</div>
			</div>
		</div>
	{:else}
		<Login />
	{/if}
</div>
