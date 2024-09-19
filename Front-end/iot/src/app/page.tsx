'use client';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Card from '@/components/Card';
import React from 'react';
import LineChart from '../components/dashboard/LineChart';
import DashDataFrame from '@/components/dashboard/DataTable';

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header title="Página Inicial" username="Rafael Rodrigues" />
        <main>
          <div className="grid grid-cols-4 gap-4 mt-8">
            <Card bgcolor="bg-red-300">
              <div>
                <i className="pi pi-clock pr-4 text-2xl"></i>
                <span className="text-3xl">30s</span>
                <div className="text-xl pt-2">Tempo de Ciclo Médio</div>
              </div>
            </Card>
            <Card bgcolor="bg-green-200">
              <div>
                <i className="pi pi-clock pr-4 text-2xl"></i>
                <span className="text-3xl">30s</span>
                <div className="text-xl pt-2">Tempo de Ciclo Médio</div>
              </div>
            </Card>
            <Card bgcolor="bg-yellow-900">
              <div>
                <i className="pi pi-clock pr-4 text-2xl"></i>
                <span className="text-3xl">30s</span>
                <div className="text-xl pt-2">Tempo de Ciclo Médio</div>
              </div>
            </Card>
            <Card bgcolor="bg-red-300">
              <div>
                <i className="pi pi-clock pr-4 text-2xl"></i>
                <span className="text-3xl">30s</span>
                <div className="text-xl pt-2">Tempo de Ciclo Médio</div>
              </div>
            </Card>
          </div>

          {/*

          Código do gráfico

          */}

          <div className="grid grid-cols-2 gap-4 mt-8">
            {' '}
            {/* Ajuste para dispor os dois elementos lado a lado */}
            <Card header="Produção vs Defeito" bgcolor="bg-black-200">
              <LineChart />
            </Card>
            <Card header="Produção vs Defeito" bgcolor="bg-blue-200">
              <DashDataFrame />
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
