import {Client, Query, TablesDB} from "node-appwrite"
import { DATABASE_ID, SITES_TABLE_ID } from '$env/static/private';
import {appwriteClient} from "$lib/server/appwrite/appwrite";

const tablesDB = new TablesDB(appwriteClient);

interface Content {
    title: string;
    text: string;
    author: string;
    released: Date;
}

interface Site {
    path: string;
    content: Content[];
}

export async function getArticlesForSite(path: string) {
    try {
        const siteList= await tablesDB.listRows({
            databaseId: DATABASE_ID,
            tableId: SITES_TABLE_ID,
            queries: [
                Query.equal('path', path)
            ]
        })
        const siteId = siteList.rows[0].$id;
        const site = await tablesDB.getRow(
            DATABASE_ID,
            SITES_TABLE_ID,
            siteId,
            [
                Query.select(["*", "content.*"])
            ]
        )
        return site.content;
    } catch (error) {
        console.log(error);
    }
}