import { Rule } from "sanity";

const presentationSection = {
    name: 'presentationSection',
    title: 'Seção de Apresentação',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Título',
        type: 'string',
        required: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'image1',
        title: 'Primeira imagem',
        type: 'image',
        options: { hotspot: true },
        fields: [
            {
                name: 'alt',
                title: 'Texto alternativo para a primeira imagem',
                type: 'string',
            }
        ],
        required: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'image2',
        title: 'Segunda Imagem',
        type: 'image',
        options: { hotspot: true },
        fields: [
            {
                name: 'alt',
                title: 'Texto alternativo para a segunda imagem',
                type: 'string',
            }
        ],
        required: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'content',
        title: 'Conteúdo',
        type: 'string',
        required: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'primaryButtonLabel',
        title: 'Texto do botão',
        type: 'string',
      },
      {
        name: 'primaryButtonLink',
        title: 'Link do botão *',
        type: 'string',
      },
    ],
  };
  
  export default presentationSection;
  