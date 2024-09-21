import Sidebar from '@/components/layouts/Sidebar';
import Header from '@/components/layouts/Header';
import React from 'react';
import PhotoCard from '@/components/cards/PhotoCard'


export default function User() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header title="Usuários" username="Rafael Rodrigues" />
        <main className="flex-1">
          <PhotoCard />
        </main>
      </div>
    </div>
  );
}
