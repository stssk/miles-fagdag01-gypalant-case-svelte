<script context="module" lang="ts">
	import { enhance } from '$lib/form';
	import type { Load } from '@sveltejs/kit';

	// see https://kit.svelte.dev/docs#loading
	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/characters.json');

		if (res.ok) {
			const characters = await res.json();

			return {
				props: { characters }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	};
</script>

<script lang="ts">
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import type { Character, Gnome } from '$lib/types';
	import GnomeView from '$lib/components/GnomeView.svelte';

	export let characters: Character[];
	export let testGnome: Gnome;

	async function patch(res: Response) {
		const character = await res.json();

		characters = characters.map((c) => {
			if (c.uid === character.uid) return character;
			return c;
		});
	}
</script>

<svelte:head>
	<title>Characters</title>
</svelte:head>

<div class="characters">
	<h1>Characters</h1>

	<form
		class="new"
		action="/characters.json"
		method="post"
		use:enhance={{
			result: async (res, form) => {
				const created = await res.json();
				characters = [...characters, created];

				form.reset();
			}
		}}
	>
		<input class="add-character" name="name" aria-label="Add character" placeholder="+ tap to add a character" />
	</form>

	{#each characters as character (character.uid)}
		<a
			class="character"
			class:inPlay={character.inPlay}
			transition:scale|local={{ start: 0.7 }}
			animate:flip={{ duration: 200 }}
			sveltekit:prefetch href={`/customize/${character.name}`}
		>
			<form
				class="name"
				action="/characters/{character.uid}.json?_method=patch"
				method="post"
				use:enhance={{
					result: patch
				}}
			>
			{character.name}
			</form>

			<form
				action="/characters/{character.uid}.json?_method=delete"
				method="post"
				use:enhance={{
					pending: () => (character.pending_delete = true),
					result: () => {
						characters = characters.filter((c) => c.uid !== character.uid);
					}
				}}
			>
				<button class="delete" aria-label="Delete character" disabled={character.pending_delete} />
			</form>
		</a>
	{/each}
</div>

<style>
	.characters {
		width: -webkit-fill-available;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		line-height: 1;
	}

	.new {
		margin: 0 0 0.5rem 0;
	}

	input {
		border: 1px solid transparent;
	}

	input:focus-visible {
		box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.1);
		border: 1px solid #ff3e00 !important;
		outline: none;
	}

	.new input {
		font-size: 20px;
		font-family: var(--font-mono);
		width: 100%;
		padding: 0.5em 1em 0.3em 1em;
		box-sizing: border-box;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 8px;
		text-align: center;
	}

	.character {
		display: grid;
		grid-template-columns: auto 2rem;
		padding: 20px;
		align-items: center;
		margin: 0 0 0.5rem 0;
		background-color: white;
		border-radius: 8px;
		filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));
		transform: translate(-1px, -1px);
		transition: filter 0.2s, transform 0.2s;
		font-size: large;
		font-family: 'Press Start 2P', cursive;
		color: black;

	}
	.character:hover {
			background: var(--heading-color);
	}

	
	.inPlay {
		transform: none;
		opacity: 0.4;
		filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.1));
	}

	form.name {
		position: relative;
		display: flex;
		align-items: center;
		flex: 1;
	}

	.character input {
		flex: 1;
		padding: 0.5em 2em 0.5em 0.8em;
		border-radius: 3px;
		color: white;
	}

	.character button {
		width: 2em;
		height: 2em;
		border: none;
		background-color: transparent;
		background-position: 50% 50%;
		background-repeat: no-repeat;
	}

	button.toggle {
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-radius: 50%;
		box-sizing: border-box;
		background-size: 1em auto;
	}

	.inPlay .toggle {
		background-image: url("data:image/svg+xml,%3Csvg width='22' height='16' viewBox='0 0 22 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 1.5L7.4375 14.5L1.5 8.5909' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
	}

	.delete {
		background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 5V22H19.5V5H4.5Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M10 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 5H22' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8 5L9.6445 2H14.3885L16 5H8Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
		opacity: 0.2;
	}

	.delete:hover,
	.delete:focus {
		transition: opacity 0.2s;
		opacity: 1;
	}

	.save {
		position: absolute;
		right: 0;
		opacity: 0;
		background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 2H3.5C2.67158 2 2 2.67157 2 3.5V20.5C2 21.3284 2.67158 22 3.5 22H20.5C21.3284 22 22 21.3284 22 20.5V3.5C22 2.67157 21.3284 2 20.5 2Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M17 2V11H7.5V2H17Z' fill='white' stroke='white' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M13.5 5.5V7.5' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M5.99844 2H18.4992' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A");
	}

	.character input:focus + .save,
	.save:focus {
		transition: opacity 0.2s;
		opacity: 1;
	}
</style>
