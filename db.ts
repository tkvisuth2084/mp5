import {Collection, Db, MongoClient} from "mongodb";


const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) {
    throw new Error("key aint working");
}

const DB_NAME = "tk_url_shortener"

export const POSTS_COLLECTION = "posts-collection";
export const LINKS_COLLECTION = "links-collection";

let client: MongoClient;
let db: Db;

async function connect(): Promise<Db> {

    if (!client) {
        client = new MongoClient(MONGO_URI);
        await client.connect();
    }
    return client.db(DB_NAME);
}

export default async function getCollection(collectionName: string): Promise<Collection>  {

    if(!db){
        db= await connect();
    }
    return db.collection(collectionName);
}
