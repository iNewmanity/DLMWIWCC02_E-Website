import NodeCache from 'node-cache';

export interface CachedImage {
    data: Buffer;
    contentType: string;
}

export const imageCache = new NodeCache({
    stdTTL: 12*3600,
    checkperiod: 600,
    useClones: false
})