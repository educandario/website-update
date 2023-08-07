import { groq } from "next-sanity";
import { client } from "../lib/client";
import { HowToHelp } from "@/sanity/types/HowToHelp";

export async function getHowToHelp(): Promise<HowToHelp> {
    return client.fetch(
        groq`*[_type == "howToHelp"][0] {
            banks, 
            campaigns, 
            cnpj, 
            suggestions,
        }`
  )
}
