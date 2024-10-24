import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";

export default function Profile() {
  return  (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header title="Usuários" username="Rafael Rodrigues" />
        <main className="flex-1 flex justify-center items-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full mex-w-xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Editar Perfil</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <input type="text" id="name" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm" />
              </div>
              
              <div className="mb-4">
                <label htmlFor="name" className="formLabel">
                  Email
                </label>
                <input type="text" id="name" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm" />
              </div>
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Senha
                </label>
                <input type="text" id="name" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm" />
              </div>
              <button className="bg">Submit</button>
              
            </form>
          </div>
        </main>
      </div>
    </div>
    
  )

}