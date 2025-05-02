import Image from 'next/image';
import { Button } from './ui/button';
export default function Header(){

    return(
        <>
        <div className="flex justify-between items-start h-16">

            <Image src="/Logo_2x.png" alt="Logo" width={200} height={200} className="p-2" />
            <div>
            </div>
            

        </div>


        </>
    )
}