<script>
import {itemsInCart, cartContents, totalPrice} from './stores';
import Item from "./Item.svelte";
let items = ["Momo", "Pizza", "Burger", "Chowmin", "Lafing", "Samosa"];
</script>

<style>
	.items {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
</style>

<main>
  <div class = "items">
    {#each items as item}
      <Item item={item}/>
    {/each}
  </div>

	<p>There are { $itemsInCart } items in your cart.</p>
  <p>Cart total: ${ $totalPrice }</p>
	
  <p>Cart contents:</p>
	<ol>
    {#each $cartContents as item}
      <li>{item}</li>
    {/each}
  </ol>
</main>
