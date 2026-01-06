<script lang="ts">
    import {marked} from 'marked';

    let {markdown} = $props();

    marked.use({
        async: true,
        pedantic: false,
        gfm: true,
    });

    function renderMarkdown() {
        const result = marked.parse(markdown);
        return result;
    }
</script>

{@html renderMarkdown()}
