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

export type Drp = {
  produto: string;
  descricao: string;
  fornecedor: string,
  LDA: number,
  CAJ: number,
  REC: number,

};

export const columns: ColumnDef<Drp>[] = [
  {
    accessorKey: "produto",
    header: "produto",
  },
  {
    accessorKey: "descricao",
    header: "descricâo",
  },
  {
    accessorKey: "fornecedor",
    header: "fornecedor",
  },
  {
    accessorKey: "LDA",
    header: "LDA",
  },
  {
    accessorKey: "CAJ",
    header: "CAJ",
  },
  {
    accessorKey: "REC",
    header: "REC",
  }
  
  
];
