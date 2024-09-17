import React from "react";
import Sidebar from "../../components/Sidebar";

export default function User() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        <h1>Users</h1>
      </main>
    </div>
  )
}