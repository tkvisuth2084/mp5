"use server";
import { LinkProps } from "@/types";
import getCollection, {LINKS_COLLECTION} from "@/db";

export default async function createNewLink(url:string, alias:string):Promise<LinkProps | null> {

    try{
        new URL(url);
    }catch{
        return null;
    }
    const linksCollection = await getCollection(LINKS_COLLECTION);

    const existing = await linksCollection.findOne({ alias });
    if (existing) {
        return null;
    }

    const link = {
        url: url,
        alias: alias,
        createdAt: new Date().toISOString(),
    }

    const res = await linksCollection.insertOne(link);
    if (!res.acknowledged) {
        return null;
    }

    return { url: link.url, alias: link.alias, createdAt: link.createdAt };
}
