import { Rule } from "sanity";

const campaing = {
    type: 'object',
    name: 'campaing',
    title: 'Campanha',
    fields: [
      {
        name: 'title',
        title: 'Nome da campanha',
        type: 'string',
        required: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'content',
        title: 'Descrição da campanha',
        type: 'array',
        of: [{ type: 'block' }],
        required: (Rule: Rule) => Rule.required(),
      },
    ],
  };
  
  export default campaing;