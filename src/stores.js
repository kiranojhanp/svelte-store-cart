import { writable, derived } from 'svelte/store';

export const itemsInCart = writable(parseInt(localStorage.getItem("itemsInCart")) || 0);
export const cartContents = writable(JSON.parse(localStorage.getItem("cartContents"))|| []);

export const totalPrice = derived(itemsInCart, $itemsInCart => $itemsInCart * .5);

cartContents.subscribe(items => {
  localStorage.setItem("cartContents", JSON.stringify(items));
})

itemsInCart.subscribe(item => {
  localStorage.setItem("itemsInCart", item);
})