<script context="module" lang="ts">
	// see https://kit.svelte.dev/docs#loading
	export function load({ page }) {
		return {
			props: {
				characterName: page.params.name
			}
		};
	}
</script>

<script lang="ts">
	import { browser, dev } from '$app/env';
	import GnomeCustomizer from '$lib/components/GnomeCustomizer.svelte';
	import GnomeView from '$lib/components/GnomeView.svelte';

	export let characterName;

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
	console.log();
	let testGnome: Gnome;
</script>

<svelte:head>
	<title>Customizer</title>
</svelte:head>

<div class="content">
	<h2>Customize {characterName}!</h2>
	
	<div class="char-creation">
		<div class="gnome-view">
			<GnomeView gnome={testGnome} />
		</div>
		<div class="gnome-customizer">	
			<GnomeCustomizer></GnomeCustomizer>
		</div>
	</div>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}

	.char-creation {
		margin-top: 50px;
		display: grid;
        grid:
        "viewer picker" auto
	}

	.gnome-view {
		grid-area: "viewer";
	}

	.gnome-customizer {
		grid-area: "picker"
	}
</style>
