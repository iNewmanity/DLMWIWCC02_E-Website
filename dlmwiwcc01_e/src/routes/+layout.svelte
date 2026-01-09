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
<div class="flex min-h-screen flex-col overflow-x-hidden">
    <div class="mt-4 mr-4 ml-4">
        <Navigation/>
    </div>
    <div class="mx-4 flex-grow">
        {@render children()}
    </div>
    <div class="mt-auto">
        <Footer/>
    </div>
</div>


