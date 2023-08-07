import { groq } from "next-sanity";
import { client } from "../lib/client";
import { Home } from "@/sanity/types/Home";

export async function getHome(): Promise<Home> {
    return client.fetch(
        groq`*[_type == "home"][0] {
            presentationSection, 
            bannerSection, 
            advertisementSection, 
        }`
  )
}
