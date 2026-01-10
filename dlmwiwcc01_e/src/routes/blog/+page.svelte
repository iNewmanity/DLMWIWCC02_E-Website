<script lang="ts">
    import type { PageProps } from './$types';
    import Blockcard from '\$lib/components/blocks/blockcard/blockcard.svelte';

    let { data }: PageProps = $props();

    let articles = $derived(data.contents);
</script>

<div class="flex flex-col gap-4 w-full mt-4">
    {#each articles as article}
        <div>
            <Blockcard title={article.title} author={article.author} released={article.released} content={article.text} />
        </div>
    {/each}

</div>