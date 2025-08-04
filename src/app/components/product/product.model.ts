export interface Product {
  proId?: number;               // ID do Produto
  proNome: string;               // Nome do Produto
  proPrecoCusto: number;         // Preço de Custo
  proPrecoVenda: number;         // Preço de Venda
  proQuantidadeEstoque: number;  // Quantidade em Estoque
  proCategoria: string;          // Categoria do Produto
  proCodigoDeBarras: string;     // Código de Barras
  proMarca: string;              // Marca do Produto
  proUnidadeMedida: string;     // Unidade de Medida
  proAtivo: boolean;             // Se o Produto está Ativo ou Não
  proDataCadastro: string;       // Data de Cadastro
  proDataAtualizacao: string;    // Data de Atualização
  proDescricao?: string;         // Descrição do Produto (campo opcional)
}
