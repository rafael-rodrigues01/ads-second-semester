import React from "react";
import Sidebar from "../../components/Sidebar";

export default function Sensor() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        <h1>Sensores</h1>
      </main>
    </div>
  );
}