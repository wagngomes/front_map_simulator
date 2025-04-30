"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
/*export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}*/

export type Saldos = {
  produto: string;
  descricao: string;
  b_o: string;
  mat_med: string;
  fornecedor: string;
  comprador: string;
  primeira_filial_rota: string;
  filial_dest: string;
  sigla_dest: string;
  empresa_dest: string;
  grupo_tributacao: string;
  flag_tributacao: string;
  rota: string;
  codigo: string;
  gui_semana_saida: string;
  gui_semana_chegada: string;
  modo_compra: string;
  dia_sugerido_pedido: string;
  qtd_comprada: number;
  preco_total: number;
  status: string;
};

export const columns: ColumnDef<Saldos>[] = [
  {
    accessorKey: "produto",
    header: "produto",
  },
  {
    accessorKey: "descricao",
    header: "descricâo",
  },
  {
    accessorKey: " b_o",
    header: "BO",
  },
  {
    accessorKey: "mat_med",
    header: "mat_med",
  },
  {
    accessorKey: "fornecedor",
    header: "fornecedor",
  },
  {
    accessorKey: "comprador",
    header: "comprador",
  },
  {
    accessorKey: "primeira_filial_rota",
    header: "primeira_filial",
  },
  {
    accessorKey: "filial_dest",
    header: "filial_dest",
  },
  {
    accessorKey: "sigla_dest",
    header: "sigla_dest",
  },
  {
    accessorKey: "empresa_dest",
    header: "empresa_dest",
  },
  {
    accessorKey: "grupo_tributacao",
    header: "grupo_tributacao",
  },
  {
    accessorKey: "flag_tributacao",
    header: "flag_tributacao",
  },
  {
    accessorKey: "rota",
    header: "rota",
  },
  {
    accessorKey: "codigo",
    header: "codigo",
  },
  {
    accessorKey: "gui_semana_saida",
    header: "gui_semana_saida",
  },
  {
    accessorKey: "gui_semana_chegada",
    header: "gui_semana_chegada",
  },
  {
    accessorKey: "modo_compra",
    header: "modo_compra",
  },
  {
    accessorKey: "dia_sugerido_pedido",
    header: " dia_sugerido_pedido",
  },
  {
    accessorKey: "qtd_comprada",
    header: "qtd_comprada",
  },
  {
    accessorKey: "preco_total",
    header: "preco_total",
    cell: ({ row: { original: transaction } }) =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(transaction.preco_total)),
  },
  {
    accessorKey: "status",
    header: "status",
  },
];
