import { Rule } from "sanity";
import link from "./modules/link";

const header = {
    name: 'header',
    title: 'Cabeçalho',
    type: 'document',
    fields: [
      {
        name: 'logo',
        title: 'Logo para navegador',
        type: 'image',
        options: { hotspot: true },
        fields: [
            {
                name: 'alt',
                title: 'Texto alternativo para imagem',
                type: 'string',
            }
        ],
      },
      {
        name: 'logoMobile',
        title: 'Logo para celular',
        type: 'image',
        options: { hotspot: true },
        fields: [
            {
                name: 'alt',
                title: 'Texto alternativo para imagem',
                type: 'string',
            }
        ],
      },
      {
        name: 'links',
        title: 'Links',
        type: 'array',
        of: [link],
        required: (Rule: Rule) => Rule.required(),
      },
    ],
  };
  
  export default header;