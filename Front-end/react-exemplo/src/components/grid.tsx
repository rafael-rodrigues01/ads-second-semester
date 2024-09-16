import Image from 'next/image';

export function Grid() {
  return (
    <div className="grid grid-cols-3 gap-4 m-5 mt-10 h-1/3">
      <div className="bg-cyan-200">
        <Image
          src={'/img/lucario.jpg'}
          alt="Lucario"
          className="w-full"
          width={225}
          height={225}
        ></Image>
      </div>
      <div className="bg-cyan-200 h-28">
        <Image
          src={'/img/lugia.jpg'}
          alt="Lucario"
          className="w-full"
          width={256}
          height={256}
        ></Image>
      </div>
      <div className="bg-cyan-200">
        <Image
          src={'/img/venusaur.jpg'}
          alt="Lucario"
          className="w-full"
          width={225}
          height={225}
        ></Image>
      </div>
    </div>
  );
}
