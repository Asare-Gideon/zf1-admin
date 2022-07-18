import { writable } from 'svelte/store';

export let sideBarToggle = writable(true);

export function filterArr(id: String, items: any) {
	let newitems = items.map((item: any) => {
		if (item.id === id) {
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
	return newitems;
}
