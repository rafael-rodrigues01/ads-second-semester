import Sidebar from "@/components/layouts/Sidebar";
import Header from "@/components/layouts/Header";
import React from "react";


export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header title="Sensores" username="Rafael Rodrigues"/>
        <main>
        <h1>Sensores</h1>
      </main>
      </div>
    </div>

  );
}
