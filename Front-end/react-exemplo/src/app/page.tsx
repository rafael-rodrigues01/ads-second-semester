import Image from 'next/image';
import {Header} from '@/components/header';
import {Grid} from '@/components/grid';

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <Header />
        <Grid />
      </div>
    </>
  );
}
