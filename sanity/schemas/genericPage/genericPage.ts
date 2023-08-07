import { Rule } from "sanity";

const genericPage = {
    name: 'genericPage',
    title: 'Página de Conteúdos Genéricos',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Título',
        type: 'string',
        required: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'description',
        title: 'Descrição',
        type: 'string',
        required: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'content',
        title: 'Conteúdo',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'title' },
      },
    ],
  };
  
  export default genericPage;
  