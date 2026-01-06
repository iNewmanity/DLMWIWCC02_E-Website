<script lang="ts">
    import { marked } from 'marked';
    import DOMPurify from 'dompurify';
    import { onMount } from 'svelte';

    let { markdown = '' } = $props();

    const htmlContent = $derived(marked.parse(markdown));

    let cleanHtml = $state('');

    $effect(() => {
        cleanHtml = DOMPurify.sanitize(htmlContent as string);
    });
</script>

<div class="prose max-w-none">
    {@html cleanHtml || htmlContent}
</div>