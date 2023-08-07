import { Rule } from 'sanity'
import socialInfo from './modules/socialInfo'

const footer = { 
    name: 'footer',
    title: 'Rodapé das páginas',
    type: 'document',
    fields: [
        {
            name: 'workTime',
            title: 'Horário de funcionamento',
            type: 'string',
            required: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'address',
            title: 'Endereço',
            type: 'string',
            required: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'socials',
            title: 'Redes sociais',
            type: 'array',
            of: [socialInfo],
            required: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'phones',
            title: 'Telefones',
            type: 'array',
            of: [
              {
                type: 'string',
              },
            ],
            required: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'emails',
            title: 'Emails',
            type: 'array',
            of: [
              {
                type: 'string',
              },
            ],
            required: (Rule: Rule) => Rule.required(),
         }
    ]
}
export default footer