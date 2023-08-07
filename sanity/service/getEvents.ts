import { groq } from 'next-sanity'
import { client } from '../lib/client';
import { Event } from '@/sanity/types/Event';

export async function getEvents(): Promise<Event[]> {
    return client.fetch(
        groq`*[_type == "events"]{
            _id,
            _createdAt,
            title,
            startDate,
            endDate,
            "slug": slug.current,
            "image": image.asset->url,
            content
        }`
    )
}

export async function getEvent(slug: string): Promise<Event> {
    return client.fetch(
        groq`*[_type == "events" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            startDate,
            endDate,
            "slug": slug.current,
            "image": image.asset->url,
            content
        }`, 
        { slug }
    )
}