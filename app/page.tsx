import { DataTable } from "./saldos/data-table";
import { columns } from "./saldos/columns";
//import axios from "axios";

const data = [
  {
    codigo: "22456",
    filial: "1009",
    empresa: "mafra",
    descricao: "novalgina",
    fornecedor: "teuto",
    tributacao: "importado",
    forecast: 100,
    vendido: 45,
    media: 97,
    estoque: 245,
    po_compas: 40,
    transferencias: 20,
    estoque_total: 400,
    CMV: 11.45,
    politica: 30,
    periodo: "s1",
  },
];

/*const data = axios.get("http://localhost:3002/saldos").then((response) => {
  return response;
});*/

export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <h1>**************PAGINA INICIAL **** ****************</h1>;
      </div>

      <div className="flex mx-auto m-8">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
