import { PortableTextBlock } from "sanity";

type Presentation = {
    title: string;
    image1: string;
    image2: string;
    content: string;
    primaryButtonLabel: string;
    primaryButtonLink: string;
}

type Banner = {
    title: string;
    description: string;
    primaryButtonLabel: string;
    primaryButtonLink: string;
    secondaryButtonLabel: string;
    secondaryButtonLink: string;
}

type Advertisement = {
    title: string;
    description: string;
    primaryButtonLabel: string;
    primaryButtonLink: string;
    secondaryButtonLabel: string;
    secondaryButtonLink: string;
    image: string;
}
export type Home = {
    presentationSection: Presentation;
    bannerSection: Banner;
    advertisementSection: Advertisement;
}