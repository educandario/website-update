import { PortableTextBlock } from "sanity";

export type News = {
    _id: string;
    _createdAt: Date;
    title: string;
    date: Date;
    slug: string;
    image: string;
    content: PortableTextBlock[];
}