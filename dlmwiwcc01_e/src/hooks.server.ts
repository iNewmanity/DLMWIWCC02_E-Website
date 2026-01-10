import type {Handle} from "@sveltejs/kit";

const BLACKLISTED_EXTENSIONS = [".php",".xml",".aspx",".jsp",".env"]

export const handle: Handle = async ({event, resolve}) => {
    const url: string = event.url.pathname.toLowerCase();

    if (BLACKLISTED_EXTENSIONS.some(ext => url.endsWith(ext))) {
        return new Response("Not Found", {status: 404});
    }

    return resolve(event);
}