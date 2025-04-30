import { Card, CardHeader } from "../components/ui/card";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const produtos = [{
    produto: '33456',
    descricao: 'issi é um tste',  
    fornecedor: 'astrazeneca',
    LDA: 45,
    CAJ: 10,
    REC: 60,
}]


const Drp = () => {
  return (
    <>

        <DataTable columns={columns} data={produtos}/>    
    </>

      
  );
};

export default Drp;