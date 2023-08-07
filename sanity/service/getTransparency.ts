import { groq } from "next-sanity";
import { client } from "../lib/client";
import { Transparency } from "@/sanity/types/Transparency";


export async function getTransparency(): Promise<Transparency> {
    return client.fetch(
        groq`*[_type == "transparency"][0] {
            transparencies,
            font,
            description,
        }`
    )
}
