import { Rule } from "sanity";

const partners = {
    name: 'partners',
    title: 'Apoiadores',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Nome do apoiador',
        type: 'string',
        required: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'logo',
        title: 'Logo do apoiador',
        type: 'image',
        required: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'link',
        title: 'Link do apoiador',
        type: 'url',
      },
    ],
  };
  
  export default partners;
  