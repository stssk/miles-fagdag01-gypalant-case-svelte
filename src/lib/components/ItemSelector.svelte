<script>
	let items = [
		{ name: 'Test-item' },
        { name: 'Test-item1' },
		{ name: 'Test-item2' },
		{ name: 'Test-item3' },
		{ name: 'Test-item4' },
		{ name: 'Test-item5' },
	];
    export let selectedItem = items[0];
</script>

<div class="item-selector">
    {#each items as item}
        <button class="item-image" on:click={() => selectedItem=item}>{item.name}</button>
    {/each}
    <p>selected item={selectedItem.name}</p>
</div>

<style>
    .item-selector {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
    }
    .item-image {

    }
</style>