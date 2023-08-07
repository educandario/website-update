const advertisementSection = {
    name: 'advertisementSection',
    title: 'Seção de anúncio',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Título',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Descrição',
        type: 'string', 
      },
      {
        name: 'primaryButtonLabel',
        title: 'Texto do botão primário',
        type: 'string',
      },
      {
        name: 'primaryButtonLink',
        title: 'Link do botão primário',
        type: 'string',
      },
      {
        name: 'secondaryButtonLabel',
        title: 'Texto do botão secundário',
        type: 'string',
      },
      {
        name: 'secondaryButtonLink',
        title: 'Link do botão secundário',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Imagem',
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
    ],
  };
  
  export default advertisementSection;
  