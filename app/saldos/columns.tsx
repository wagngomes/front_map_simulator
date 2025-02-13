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
  codigo: string;
  filial: string;
  empresa: string;
  descricao: string;
  fornecedor: string;
  tributacao: string;
  forecast: number;
  vendido: number;
  media: number;
  estoque: number;
  po_compas: number;
  transferencias: number;
  estoque_total: number;
  CMV: number;
  politica: number;
  periodo: string;
};

export const columns: ColumnDef<Saldos>[] = [
  {
    accessorKey: "codigo",
    header: "codigo",
  },
  {
    accessorKey: "filial",
    header: "filial",
  },
  {
    accessorKey: "empresa",
    header: "empresa",
  },
  {
    accessorKey: "descricao",
    header: "descricao",
  },
  {
    accessorKey: "fornecedor",
    header: "fornecedor",
  },
  {
    accessorKey: "tributacao",
    header: "tributacao",
  },
  {
    accessorKey: "forecast",
    header: "forecast",
  },
  {
    accessorKey: "vendido",
    header: "vendido",
  },
  {
    accessorKey: "media",
    header: "media",
  },
  {
    accessorKey: "estoque",
    header: "estoque",
  },
  {
    accessorKey: "po_compras",
    header: "po_compras",
  },
  {
    accessorKey: "transferencias",
    header: "transferencias",
  },
  {
    accessorKey: "estoque_total",
    header: "estoque_total",
  },
  {
    accessorKey: "CMV",
    header: "CMV",
  },
  {
    accessorKey: "politica",
    header: "politica",
  },
  {
    accessorKey: "periodo",
    header: "periodo",
  },
];
