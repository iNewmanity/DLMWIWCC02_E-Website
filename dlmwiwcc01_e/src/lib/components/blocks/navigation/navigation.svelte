<script lang="ts">
    import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
    import { cn } from "$lib/utils.js";
    import { navigationMenuTriggerStyle } from "$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte";
    import type { HTMLAttributes } from "svelte/elements";
    import Icon from "$lib/assets/favicon.png";

    import { IsMobile } from "$lib/hooks/is-mobile.svelte.js";

    const isMobile = new IsMobile();

    type ListItemProps = HTMLAttributes<HTMLAnchorElement> & {
        title: string;
        href: string;
        content: string;
    };
</script>

<NavigationMenu.Root viewport={isMobile.current}>
    <NavigationMenu.List class="flex-wrap">
        <NavigationMenu.Item>
            <NavigationMenu.Link>
                {#snippet child()}
                    <a href="/" class={navigationMenuTriggerStyle()}>
                        <img src={Icon} alt="Mieter Cloud" class="h-6 w-auto" />
                        Mieter Cloud
                    </a>
                {/snippet}
            </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
            <NavigationMenu.Link>
                {#snippet child()}
                    <a href="/blog" class={navigationMenuTriggerStyle()}>Blog</a>
                {/snippet}
            </NavigationMenu.Link>
        </NavigationMenu.Item>
    </NavigationMenu.List>
</NavigationMenu.Root>