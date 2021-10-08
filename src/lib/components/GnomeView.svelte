<script lang="ts">
    import type { Gnome } from "$lib/types";
    import TriangleHat from "./items/Hats/TriangleHat.svelte";

    export let gnome: Gnome;
</script>

<div class="gnome-view">
    <TriangleHat></TriangleHat>
</div>

<style>

</style>
