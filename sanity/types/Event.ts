import { PortableTextBlock } from "sanity";

export type Event = {
    _id: string;
    _createdAt: Date;
    title: string;
    startDate: Date;
    endDate: Date;
    slug: string;
    image: string;
    content: PortableTextBlock[];
}