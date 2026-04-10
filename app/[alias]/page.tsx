import getLinkAlias from "@/lib/getLinkAlias";
import {redirect} from "next/navigation";

export default async function AliasPage({params}:{params: Promise<{alias:string}>}) {
    const {alias}=await params;

    if(alias === "error") return <h1>Not found</h1>;

    const link = await getLinkAlias(alias);

    if(link == null){
        return redirect('/error');
    }

    return redirect(link.url);
}