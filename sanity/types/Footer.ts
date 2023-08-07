type SocialInfo = {
    _key: string;
    name: string;
    link: string;
}

export type Footer = {
    workTime: string;
    address: string;
    socials: SocialInfo[];
    phones: string[];
    emails: string[];
}