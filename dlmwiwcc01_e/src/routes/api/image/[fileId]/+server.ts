import {error} from "@sveltejs/kit";
import type {RequestHandler} from "./$types";
import {buildBucketURI} from "$lib/server/media/media";

export const GET: RequestHandler = async ({params, fetch}) => {
    const {fileId} = params;

    const url = buildBucketURI(fileId)

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw error(response.status, 'Image could not be loaded');
        }

        const blob = await response.blob();

        return new Response(blob, {
            headers: {
                'Content-Type': response.headers.get('Content-Type') || 'image/png',
                'Cache-Control': 'public, max-age=31536000'
            }
        });
    } catch (e) {
        throw error(500, 'Internal Server Error');
    }
}