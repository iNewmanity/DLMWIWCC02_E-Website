import { PROJECT_ID, BUCKET_TOKEN, CMS_BUCKET_ID } from "$env/static/private";

export function buildBucketURI(fileId: string){

    return `https://fra.cloud.appwrite.io/v1/storage/buckets/${CMS_BUCKET_ID}/files/${fileId}/view?project=${PROJECT_ID}&token=${BUCKET_TOKEN}`
}