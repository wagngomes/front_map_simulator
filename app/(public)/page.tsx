"use client";

import Header from "../components/Header";
import Image from 'next/image';
import { Button } from "../components/ui/button";

export default function Home() {
    return (
        <>
            <Header />
            <section className="grid grid-cols-2 h-[calc(102vh-80px)]">
                {/* Coluna da esquerda */}
                <div className="flex flex-col justify-center items-start ml-20">
                    <h1 className="text-6xl font-bold antialiased tracking-wide text-gray-200 shadow-md">Pare de reagir.</h1>
                    <h1 className="text-6xl font-bold antialiased tracking-wide text-gray-200">Comece a prever.</h1>
                    <p className="text-xl font-light antialiased tracking-wide text-gray-400 mt-4">
                        Transforme seu histórico de vendas em decisões estratégicas <br />com precisão cartesiana.
                    </p>
                    <Button variant="outline" className="p-4 mt-2 w-40 h-12 mt-4">COMECE AGORA</Button>
                </div>

                {/* Coluna da direita com imagem */}
                <div className="relative w-[calc(108vh)] h-[calc(89.8vh)]">
                    <Image
                        src="/Banner_2.jpg"
                        alt="Logo"
                        fill
                        className="object-cover mix-blend-screen opacity-80 rounded-lg"
                        priority
                    />

                </div>
            </section>
            <section className="flex flex-col items-start justify-start h-screen px-4">
                <div className="flex flex-col items-center w-full pt-12">
                    <h1 className="text-6xl font-light antialiased tracking-wide text-gray-200 shadow-md text-center">
                        A imprevisibilidade custa caro.
                    </h1>
                    <p className="text-xl font-light antialiased tracking-wide text-gray-400 text-center max-w-4xl mt-4 mb-2">
                        A falta de previsibilidade gera rupturas, excessos de estoque e decisões baseadas em achismos.
                        Com a Cartesian Time Series você ganha visão, controle e assertividade no planejamento.
                    </p>
                    <Image
                        src="/prob.jpg"
                        alt="homem com problemas"
                        width={800}
                        height={400}
                        className="object-cover mix-blend-screen opacity-80 rounded-lg"
                        priority
                    />
                </div>
            </section>


        </>
    );
}

