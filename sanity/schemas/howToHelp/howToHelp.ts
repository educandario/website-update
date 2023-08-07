import bankAccount from "./modules/bankAccount";
import campaing from "./modules/campaign";
import suggestion from "./modules/suggestion";


const howToHelp = {
  name: 'howToHelp',
  title: 'Como Ajudar',
  type: 'document',
  fields: [
    {
      name: 'cnpj',
      title: 'CNPJ',
      description: 'CNPJ do Educandário',
      type: 'number',
    },
    {
      name: 'banks',
      title: 'Bancos',
      description: 'Adicione os bancos para doação',
      type: 'array',
      of: [bankAccount],
    },
    {
      name: 'campaigns',
      title: 'Campanhas',
      description: 'Adicione as campanhas de doação',
      type: 'array',
      of: [campaing],
    },
    {
      name: 'suggestions',
      title: 'Sugestões',
      description: 'Adicione as sugestões de doação',
      type: 'array',
      of: [suggestion],
    },
  ],
};

export default howToHelp;
