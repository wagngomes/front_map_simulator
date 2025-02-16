"use client"

import { DataTable } from "./saldos/data-table";
import { columns } from "./saldos/columns";
import { useEffect, useState } from "react";

interface MapData {
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
}

export default function Home() {

  const [data, setData] = useState<MapData[]>([]); // ou o tipo específico dos seus dados

  // Função para buscar os dados
  async function fetchData() {
    try {
      const response = await fetch('http://localhost:3002/completeMap');
      const data = await response.json();

      // Garantir que os dados sejam do tipo MapData[]
      const typedData: MapData[] = data as MapData[]; // Type assertion (casting)

      setData(typedData); // Atualiza o estado com os dados tipados
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }

  // Chama a função fetchData quando o componente é montado
  useEffect(() => {
    fetchData();
  }, []);



  return (  
    <>
    <div className="flex justify-center flex-col m-4">
      <div className="flex justify-center bg-zinc-800 h-10">
        <h1>**************PAGINA INICIAL *******************</h1>;
      </div>

      <div className="flex mx-auto m-8">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
    </>
  );
}
