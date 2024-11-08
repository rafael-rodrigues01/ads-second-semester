import Sidebar from "@/components/layouts/Sidebar";
import Header from "@/components/layouts/Header";

export default function Climate () {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header title="Clima" username="Rafael"/>
        <main>
          <h1>Meus produtos</h1>
          
        </main>
      </div>
    </div>
  )
}