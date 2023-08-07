import { Rule } from "sanity";

const bankAccount = {
    type: 'object',
    name: 'bankAccount',
    title: 'Conta bancária',
    fields: [
      {
        type: 'string',
        name: 'bankName',
        title: 'Banco',
        required: (Rule: Rule) => Rule.required(),
      },
      {
        type: 'number',
        name: 'agency',
        title: 'Agência',
        required: (Rule: Rule) => Rule.required(),
      },
      {
        type: 'number',
        name: 'account',
        title: 'Conta',
        required: (Rule: Rule) => Rule.required(),
      },
      {
        type: 'number',
        name: 'digit',
        title: 'Digito Verificador',
        required: (Rule: Rule) => Rule.required(),
      },
    ],
  };
  
  export default bankAccount