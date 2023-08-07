import { Rule } from "sanity";
import data from "./modules/data";

const transparency = {
    name: 'transparency',
    title: 'Transparência',
    type: 'document',
    fields: [
      {
        name: 'transparencies',
        title: 'Dados *',
        type: 'array',
        of: [data],
        required: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'font',
        title: 'Fonte de dados',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Descrição',
        type: 'string',
      },
    ],
  };
  
  export default transparency;
  