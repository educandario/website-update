import { Rule } from "sanity";

const news = {
    name: 'news',
    title: 'Notícias',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Título da notícia',
        type: 'string',
        required: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'date',
        title: 'Data',
        type: 'date',
        options: {
          dateFormat: 'YYYY-MM-DD',
        },
        required: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'image',
        title: 'Imagem da notícia',
        type: 'image',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: (news: any) => `${news.date.split('-').join('')}/${news.title}`
        }
      },
    ],
  };
  
  export default news;