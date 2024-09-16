import Image from 'next/image';

export function Header() {
  return (
    <>
      <div className="bg-gray-800  text-white h-1/2">
        <h2 className="text-white h-5 text-2xl text-center">Lemonade</h2>
        <p className="m-6 text-center text-4xl align-middle">
          Stories about Life, <br />
          Tech & Insurance
        </p>
        <p className="m-5 text-sm text-center">
          Subscribe to our exclusive page
        </p>
      </div>
    </>
  );
}
