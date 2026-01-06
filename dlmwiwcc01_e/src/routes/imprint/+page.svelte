<script lang="ts">
    import Markdown from '$lib/components/custom/markdown/markdown.svelte';

    import imprint from '$lib/assets/imprint.md?raw';
</script>

<div class="m-4">
    <h1 class="scroll-m-20 text-2xl font-extrabold tracking-tight text-balance">
        Impress
    </h1>
    <p class="text-muted-foreground text-l leading-7">
        Last Updated: 2026-01-04
    </p>
    <Markdown markdown={imprint} />

</div>