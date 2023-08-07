import { groq } from "next-sanity";
import { client } from "../lib/client";
import { GenericPage } from "@/sanity/types/GenericPage";

export async function getGeneric(slug: string): Promise<GenericPage> {
    return client.fetch(
        groq`*[_type == "genericPage" && slug.current == $slug][0]{
            title,
            description,
            "slug": slug.current,
            content
        }`, 
        { slug }
    )
}