import React from "react";
import Sidebar from "../../components/Sidebar";

export default function Reports() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        <h1>Reports</h1>
      </main>
    </div>
  );
}