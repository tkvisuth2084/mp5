"use server"

import { LinkProps } from "@/types";
import getCollection, {LINKS_COLLECTION} from "@/db";

export default async function getLinkAlias(alias:string): Promise<LinkProps | null> {

    const linksCollection = await getCollection(LINKS_COLLECTION);
    const link = await linksCollection.findOne({ alias });

    if (!link) {
        return null;
    }

    return {
        url: link.url,
        alias: link.alias,
        createdAt: new Date(link.createdAt).toISOString(),
    };
}