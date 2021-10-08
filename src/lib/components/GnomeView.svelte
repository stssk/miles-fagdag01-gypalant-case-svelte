<script lang="ts">
    import type { Gnome } from "$lib/types";
    import RoundBody from "./items/GnomeBodies/RoundBody.svelte";
    import TriangleHat from "./items/Hats/TriangleHat.svelte";

    export let gnome: Gnome;
</script>

<div class="gnome-view">
    <!-- <div class="gnome-hat">
        <TriangleHat></TriangleHat>
    </div> -->
    <div class="gnome-head">
        <RoundBody></RoundBody>
    </div>
    <!-- <div class="facial-hair"></div> -->
    <div class="gnome-body">
        <TriangleHat></TriangleHat>
    </div>
    <div class="gnome-feet">
        <TriangleHat></TriangleHat>
    </div>
</div>

<style>
    .gnome-view {
        display: grid;
        grid:
        "tl head tr" auto
        "arml torso armr" auto
        "bl feet br" auto;
    }

    .gnome-head {
        grid-area: head;
    }

    .gnome-body {
        grid-area: torso;
    }

    .gnome-feet {
        grid-area: feet;
    }
</style>
