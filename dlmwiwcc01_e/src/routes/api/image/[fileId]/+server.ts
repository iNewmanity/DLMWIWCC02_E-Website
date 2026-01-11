import {error} from "@sveltejs/kit";
import type {RequestHandler} from "./$types";
import {buildBucketURI} from "$lib/server/media/media";
import {type CachedImage, imageCache} from "$lib/server/cache/cache"

export const GET: RequestHandler = async ({params, fetch}) => {
    const {fileId} = params;

    const cached = imageCache.get<CachedImage>(fileId);

    if (cached) {
        return new Response(cached.data as any, {
            headers: {
                'Content-Type': cached.contentType,
                'X-Cache': 'HIT',
                'Cache-Control': 'public, max-age=31536000'
            }
        });
    }

    const url = buildBucketURI(fileId)

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw error(response.status, 'Image could not be loaded');
        }
        const contentType = response.headers.get('Content-Type') || 'image/png';
        const arrayBuffer = await response.arrayBuffer();
        const data = Buffer.from(arrayBuffer);

        imageCache.set(fileId, {data, contentType});

        return new Response(data as any, {
            headers: {
                'Content-Type': contentType,
                'X-Cache': 'MISS',
                'Cache-Control': 'public, max-age=31536000'
            }
        });
    } catch (e) {
        throw error(500, 'Internal Server Error');
    }
}