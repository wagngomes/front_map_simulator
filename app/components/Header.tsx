import Image from 'next/image';
export default function Header(){

    return(
        <>
        <div className="flex justify-center h-24">

            <Image src="/Logotipo.png" alt="Logo" width={160} height={180}  />

            <h1>isso é um header</h1>
        </div>


        </>
    )
}