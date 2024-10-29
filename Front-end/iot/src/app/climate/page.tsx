import Sidebar from "@/components/layouts/Sidebar";
import Header from "@/components/layouts/Header";
import ClimateData from "@/components/climate/ClimateData";

export default function Climate () {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header title="Clima" username="Rafael"/>
        <main>
          <h1>Previsão climática dos últimos 10 dias</h1>
          <ClimateData />
        </main>
      </div>
    </div>
  )
}