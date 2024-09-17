'use client'
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Sidebar() {

  const pathname = usePathname();

  return (
    <nav className="navbar">
      <Link href={'/'} className={`navlink ${pathname === '/' ?  'active': ''}`}><i className="pi pi-home pr-4"></i>Home</Link>
      <Link href={'/users'} className={`navlink ${pathname === '/users' ?  'active': ''}`}><i className="pi pi-user pr-4"></i>Usuários</Link>
      <Link href={'/sensors'} className={`navlink ${pathname === '/sensors' ?  'active': ''}`}><i className="pi pi-bolt pr-4"></i>Sensores</Link>
      <Link href={'/reports'} className={`navlink ${pathname === '/reports' ?  'active': ''}`}><i className="pi pi-receipt pr-4"></i>Relatórios</Link>
    </nav>
  );
}