import { Rule } from "sanity";

const data = {
    name: 'data',
    title: 'Data',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Nome da transparência',
        type: 'string',
        required: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'value',
        title: 'Valor da transparência',
        type: 'number',
        required: (Rule: Rule) => Rule.required(),
      },
    ],
  };

export default data;