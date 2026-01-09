<script lang="ts">
    import { page } from '$app/state';
</script>

<div class="m-4">
    <h1><strong>{page.status}</strong></h1>
    <h2>{page.error?.message}</h2>
</div>