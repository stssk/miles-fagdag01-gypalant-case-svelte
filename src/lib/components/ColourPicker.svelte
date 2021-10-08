<script lang="ts">
    import { colors } from '$lib/consts'
    export let name;
    const colours = colors;
</script>

<div class="colour-picker"> 
    {#each colours as colour}
        <div style="background-color: {colour};" class="colour-square"></div>
    {/each}
</div>

<style>
	.colour-picker {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
	}

    .colour-square {
        width: 50px;
        height: 50px;
    }
</style>
