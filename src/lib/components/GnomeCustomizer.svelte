<script lang="ts">
	import ColourPicker from './ColourPicker.svelte';
	import ItemSelector from './ItemSelector.svelte';

	let selectedItem;
</script>

<div class="item-view">
	<ItemSelector bind:selectedItem />
	<ColourPicker />
	<p>{selectedItem != null ? selectedItem.name : ''}</p>
</div>
