<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import Markdown from '$lib/components/custom/markdown/markdown.svelte';
    import { formatDate } from '$lib/services/utilities.service';

    let { title, author, released, content } = $props();
</script>



<Card.Root class="-my-4 w-full max-w-full m-2">
    <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Description
        >Released by {author} on {formatDate(released)}</Card.Description
        >
    </Card.Header>
    <Card.Content>
        <Markdown markdown={content}></Markdown>
    </Card.Content>
    <Card.Footer class="flex-col gap-2">

    </Card.Footer>
</Card.Root>