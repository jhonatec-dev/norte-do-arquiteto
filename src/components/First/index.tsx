import ananda from '@/assets/images/ananda.jpeg';
import logo from '@/assets/images/logo.png';
import Image from "next/image";

export default function First() {
  return (
    <div className="flex justify-between items-center gap-4 max-w-md">
      <Image src={ananda} alt="ananda" width={500} className='ananda-no-color' />
      <div>
        <h1 className="max-w-m white-space-normal mb-">
          NORTE DO ARQUITETO
        </h1>
        <div className="flex justify-between items-center  gap-4">
          <div className="flex flex-col gap-2">
            <h3 className='max-w-md'>PORTFÓLIO DE IMAGENS REALISTAS 3D</h3>
            <button className="btn-primary text-white font-bold py-2 px-2 rounded-full">Veja mais</button>
          </div>
          <Image src={logo} alt="logo" width={150} />
        </div>
      </div>
    </div>
  )
}