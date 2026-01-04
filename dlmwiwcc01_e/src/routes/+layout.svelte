<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
    import Navigation from "$lib/components/blocks/navigation/navigation.svelte";
    import Footer from "$lib/components/blocks/footer/footer.svelte";

	let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <title>Mieter Cloud</title>
</svelte:head>
<div class="w-full h-full">
    <div class="mt-4 mr-4 ml-4">
        <Navigation/>
    </div>
    <div class="mr-4 ml-4">
        {@render children()}
    </div>
    <div class="sticky bottom-0">
        <Footer/>
    </div>
</div>


