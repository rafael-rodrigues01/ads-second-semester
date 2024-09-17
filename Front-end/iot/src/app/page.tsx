import Link from "next/link";
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <div className="flex">
    <Sidebar/>
    <main className="flex-1 p-4">
      <h1>Página inicial</h1>
    </main>
    </div>
  );
}
