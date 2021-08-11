<script>
  import { itemsInCart, cartContents } from './stores.js';
  export let item;

  const addItem = () => {
  itemsInCart.update(items => items + 1);
  cartContents.update(contents => [...contents, item]);
}
</script>

<button on:click={addItem}>
  Add Item
</button>