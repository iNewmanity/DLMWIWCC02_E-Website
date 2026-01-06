<script lang="ts">
    import Markdown from '$lib/components/custom/markdown/markdown.svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<div class="m-4">
    <h1 class="scroll-m-20 text-2xl font-extrabold tracking-tight text-balance">
        {data.contents[0].title}
    </h1>
    <p class="text-muted-foreground text-l leading-7">
        Last Updated: {data.contents[0].released}
    </p>
    <Markdown markdown={data.contents[0].text} />

</div>