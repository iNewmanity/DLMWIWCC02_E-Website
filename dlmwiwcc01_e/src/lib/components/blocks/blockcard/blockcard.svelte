<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import Markdown from '$lib/components/custom/markdown/markdown.svelte';

    let { title, author, released, content } = $props();
</script>



<Card.Root class="-my-4 w-full max-w-sm">
    <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Description
        >Released by {author} on {released}</Card.Description
        >
    </Card.Header>
    <Card.Content>
        <Markdown markdown={content}></Markdown>
    </Card.Content>
    <Card.Footer class="flex-col gap-2">

    </Card.Footer>
</Card.Root>