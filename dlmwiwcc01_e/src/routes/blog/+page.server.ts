import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getArticlesForSite} from "$lib/server/articles/article";

export const load: PageServerLoad = async () => {
    const contents = await getArticlesForSite("/blog");

    if (contents) {
        return {contents};
    }

    error(404, 'Not found');
};