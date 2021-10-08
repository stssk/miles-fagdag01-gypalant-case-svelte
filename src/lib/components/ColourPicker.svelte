<script lang="ts">
	import { Colour, colours } from '$lib/types';

	export let colour: Colour;
</script>

<div class="colour-picker"> 
    {#each colours as colour}
        <div class="colour-square"></div>
    {/each}

</div>

<style>
	.colour-picker {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
	}

    .colour-square {
        width: 50 px;
        height: 50px;
        
    }
</style>
