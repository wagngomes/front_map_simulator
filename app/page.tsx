import { DataTable } from "./saldos/data-table";
import { columns } from "./saldos/columns";
//import axios from "axios";

const data = [
  {
    produto: "xxxxxxx",
    descricao: "xxxxxxx",
    b_o: "xxxxxxx",
    mat_med: "xxxxxxx",
    fornecedor: "xxxxxxx",
    comprador: "xxxxxxx",
    primeira_filial_rota: "xxxxxxx",
    filial_dest: "xxxxxxx",
    sigla_dest: "xxxxxxx",
    empresa_dest: "xxxxxxx",
    grupo_tributacao: "xxxxxxx",
    flag_tributacao: "xxxxxxx",
    rota: "xxxxxxx",
    codigo: "xxxxxxx",
    gui_semana_saida: "xxxxxxx",
    gui_semana_chegada: "xxxxxxx",
    modo_compra: "xxxxxxx",
    dia_sugerido_pedido: "xxxxxxx",
    qtd_comprada: 200,
    preco_total: 1000,
    status: "xxxxxxx",
  },
];

/*const data = axios.get("http://localhost:3002/saldos").then((response) => {
  return response;
});*/

export default function Home() {
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
