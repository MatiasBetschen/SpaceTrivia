import { writable } from 'svelte/store';

export const state = writable(0);
export const result = writable(0);
export const time = writable(0);
export const penaltycount = writable(0);
export const startCounter = writable(false);
