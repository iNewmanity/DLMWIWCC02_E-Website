<script lang="ts">
    import Markdown from '$lib/components/custom/markdown/markdown.svelte';
    import type { PageProps } from './$types';

    import { formatDate } from '$lib/services/utilities.service';

    let { data }: PageProps = $props();

    let articles = $derived(data.contents);


</script>

<div class="m-4 mx-8">
    <h1 class="scroll-m-20 text-2xl font-extrabold tracking-tight text-balance">
        {articles[0].title}
    </h1>
    <p class="text-muted-foreground text-l leading-7">
        Last Updated: {formatDate(articles[0].released)}
    </p>
    <Markdown markdown={articles[0].text} />

</div>