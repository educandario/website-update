import { PortableTextBlock } from "sanity";

export type GenericPage = {
    title: string;
    description: string;
    slug: string;
    content: PortableTextBlock[];
}