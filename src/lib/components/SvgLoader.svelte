<script lang="ts">
	export let svgImage;
	export let alt;
	const imageSource = `/images/${svgImage}.svg`;
</script>

<div class="svg-loader">
	<img class="svg-image" src={imageSource} {alt} />
</div>

<style>
	.svg-image {
		width: 100px;
	}
</style>
