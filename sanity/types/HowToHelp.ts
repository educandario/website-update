import { PortableTextBlock } from "sanity";

type BankAccount = {
    _key: string;
    bankName: string;
    agency: number;
    account: number;
    digit: number
}

type Campaign = {
    _key: string;
    title: string;
    content: PortableTextBlock[]; 
}

type Suggestion = {
    _key: string;
    title: string;
}
export type HowToHelp = {
    cnpj: number;
    banks: BankAccount[];
    campaigns: Campaign[];
    suggestions: Suggestion[];
}