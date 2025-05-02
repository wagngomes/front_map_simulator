import Image from 'next/image';
import { Button } from './ui/button';
export default function Header(){

    return(
        <>
        <div className="flex justify-between items-start h-16">

            <Image src="/Logo_2x.png" alt="Logo" width={160} height={160} className="p-2" />
            

        </div>


        </>
    )
}