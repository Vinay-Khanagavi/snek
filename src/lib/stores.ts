import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const initialTheme = (browser && localStorage.getItem('theme')) || 'light';

export const theme = writable(initialTheme);

if (browser) {
	theme.subscribe((value) => {
		localStorage.setItem('theme', value);
	});
}
