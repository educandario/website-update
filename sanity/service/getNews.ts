import { groq } from 'next-sanity'
import { client } from '../lib/client';
import { News } from '@/sanity/types/News';

export async function getAllNews(): Promise<News[]> {
    return client.fetch(
        groq`*[_type == "news"]{
            _id,
            _createdAt,
            title,
            date,
            "slug": slug.current,
            "image": image.asset->url,
            content
        }`
    )
}

export async function getNews(slug: string): Promise<News> {
    return client.fetch(
        groq`*[_type == "news" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            date,
            "slug": slug.current,
            "image": image.asset->url,
            content
        }`, 
        { slug }
    )
}