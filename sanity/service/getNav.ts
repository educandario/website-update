import { groq } from "next-sanity";
import { client } from "../lib/client";
import { Footer } from "@/sanity/types/Footer";
import { Header } from "@/sanity/types/Header";

type NavigationProps = {
    header: Header;
    footer: Footer;
}

export async function getNav(): Promise<NavigationProps> {
    return client.fetch(
        groq`{
            "header": *[_type == "header"][0]{
                logo,
                logoMobile,
                links,
            },
            "footer": *[_type == "footer"][0]{
                workTime,
                address,
                socials,
                phones,
                emails,
            }
          }`
    )
}
