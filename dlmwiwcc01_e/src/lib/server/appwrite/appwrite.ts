import { Client} from "node-appwrite"
import { PUBLIC_API_BASE_URL  } from '$env/static/public';
import { PROJECT_ID, API_KEY} from '$env/static/private';

export const createAppwriteClient = (
    appwriteClient: Client = new Client().setEndpoint(PUBLIC_API_BASE_URL).setProject(PROJECT_ID).setKey(API_KEY)
) => appwriteClient

export const appwriteClient = createAppwriteClient()

