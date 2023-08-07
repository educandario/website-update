import { Rule } from "sanity"

const events = { 
    name: 'events',
    title: 'Eventos',
    type: 'document',
    fieldsets: [
        {
          title: 'Programação do evento',
          name: 'eventSchedule',
          options: {
            columns: 2
          }
        },
      ],
    fields: [
        {
            name: 'title',
            title: 'Título do evento',
            type: 'string',
            required: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'startDate',
            title: 'Data de início',
            type: 'date',
            fieldset: 'eventSchedule',
            required: (Rule: Rule) => Rule.required(),
          },
          {
            name: 'endDate',
            type: 'date',
            title: 'Data de fim',
            fieldset: 'eventSchedule',
          },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' },
            required: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'image',
            title: 'Imagem do evento',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                name: 'alt',
                title: 'Texto alternativo para a imagem',
                type: 'string',
                }
            ],
            
        },
        {
            name: 'content',
            title: 'Conteúdo do evento',
            type: 'array',
            of: [{ type: 'block' }],
         }
    ]
}
export default events