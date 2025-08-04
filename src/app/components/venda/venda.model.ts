export interface CompraDTO {
  proId: number;
  compraQuantidade: number;
  compraPrecoVenda: number;
}

export interface VendaDTO {
  id?: number;
  vendaCodigo?: string;
  vendaData?: string;
  cliId: number;
  fpgId: number;
  vendaValorTotal: number;
  compras: CompraDTO[];
}
