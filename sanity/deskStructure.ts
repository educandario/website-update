import { StructureBuilder } from 'sanity/desk'

const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Conteúdo Educandário')
    .items([
      S.listItem()
        .title('Página Inicial')
        .child(S.document().documentId('homePage').schemaType('home')),

      S.listItem()
        .title('Rodapé')
        .child(S.document().title('Rodapé').documentId('footer').schemaType('footer')),

      S.listItem()
        .title('Cabeçalho')
        .child(S.document().title('Cabeçalho').documentId('header').schemaType('header')),

      S.listItem()
        .title('Transparência')
        .child(
          S.document().title('Transparência').documentId('transparencia').schemaType('transparency')
        ),

      S.listItem()
        .title('Como Ajudar')
        .child(S.document().title('Como Ajudar').schemaType('howToHelp')),

      S.divider(),

      S.documentTypeListItem('partners'),
      S.documentTypeListItem('news'),
      S.documentTypeListItem('events'),
      S.documentTypeListItem('genericPage'),
    ])

export default deskStructure