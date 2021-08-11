<script>
  export let item;
  import AddItem from './AddItem.svelte';
</script>

<div class="item">
  <h2>{ item }</h2>
  <AddItem item={item}/>
</div>

<style>
  .item {
    width: 25%;
  }
</style>