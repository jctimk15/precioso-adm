import type { Schema, Struct } from '@strapi/strapi';

export interface ProdutosVariacao extends Struct.ComponentSchema {
  collectionName: 'components_produtos_variacaos';
  info: {
    displayName: 'Variacao';
  };
  attributes: {
    nome: Schema.Attribute.String;
    price: Schema.Attribute.Decimal;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'produtos.variacao': ProdutosVariacao;
    }
  }
}
