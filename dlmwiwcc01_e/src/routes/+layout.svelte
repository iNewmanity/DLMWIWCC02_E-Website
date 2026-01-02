<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
    import Navigation from "$lib/components/blocks/navigation/navigation.svelte";

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="mt-4 mr-4 ml-4">
    <Navigation/>
</div>
<div class="mr-4 ml-4">
    {@render children()}
</div>

