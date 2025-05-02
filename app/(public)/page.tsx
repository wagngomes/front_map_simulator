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
        <div className="flex flex-col justify-center items-start p-4">
          <h1 className="text-6xl font-bold antialiased tracking-wide text-gray-200 shadow-md">Pare de reagir.</h1>
          <h1 className="text-6xl font-bold antialiased tracking-wide text-gray-200">Comece a prever.</h1>
          <p className="text-base font-light antialiased tracking-wide text-gray-400">
            Transforme seu histórico de vendas em decisões estratégicas com precisão cartesiana.
          </p>
          <Button variant="outline" className="ml-1 mt-2 w-40">COMECE AGORA</Button>
        </div>

        {/* Coluna da direita com imagem */}
        <div className="relative w-full h-full">
          <Image
            src="/Banner_2.jpg"
            alt="Logo"
            fill
            className="object-cover mix-blend-screen opacity-80"
            priority
          />

        </div>
      </section>
      <section className="grid grid-cols-2 h-[calc(100vh)]">
          {/* Coluna da esquerda */}
            <div className="flex flex-col justify-center items-start p-4">
          <h1 className="text-5xl font-light antialiased tracking-wide text-gray-200 shadow-md">
            A imprevisibilidade custa caro.
            </h1>
          <p className="text-base font-light antialiased tracking-wide text-gray-400">
            A falta de previsibilidade gera rupturas, excessos de estoque e decisões baseadas em achismos.
            Com a Cartesian Time Series você ganha visão, controle e assertividade no planejamento.
          </p>
          
        </div>


      </section>
    </>
  );
}

