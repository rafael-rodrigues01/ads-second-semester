import Image from 'next/image';
import { Button } from 'primereact/button';

interface UserCardProps {
  imageSrc?: string;
  position?: string;
  department?: string;
  name?: string;
  lastAcess?: string;
  partsProducted?: string; 
  performance?: string;
  idProfile?: string;
}

export default function UserCard({imageSrc, position, department, name, lastAcess, partsProducted, performance, idProfile}: UserCardProps) {
  return (
    <div className="bg-white rounded-xl flex flex-col max-w-80">
    <div className="flex flex-col items-center p-4">
      {imageSrc &&
      <Image
        src={imageSrc}
        width={112}
        height={112}
        alt="User Profile"
        className="h-28 w-28 rounded-full"
      />}

      <p className="mt-4 font-extrabold text-lg">{position}</p>
      <p className="text-gray-500">{department}</p>
      <div className="bg-slate-300 flex-grow w-full rounded-xl mt-6 p-4 flex flex-col items-center justify-center">
        <div className="font-bold text-xl mb-2">Rafael Rodrigues</div>
        <div className="text-gray-600 mb-2">Acesso em 20/09/2024</div>
        <div className="text-gray-600 mb-2">Peças Produzidas</div>
        <div className="text-gray-600 mb-2">Desempenho</div>
        <Button
          className="bg-cyan-600 hover:bg-cyan-400 border-none py-2 px-6 rounded-xl mt-4"
          label="Ver Perfil"
          icon="pi pi-user"
        />
      </div>
    </div>
  </div>
  )
}