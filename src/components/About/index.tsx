import ananda from '@/assets/images/ananda.jpeg';
import Image from "next/image";

export default function About() {
  return (
    <div className="About flex justify-between items-center gap-4 max-w-md py-8 px-4">
      <h2 className='align-self-start mt-4'>Sobre <span className='font-light'>mim</span></h2>
      <Image src={ananda} alt="ananda" width={500} className='ananda-color' />
      <div className='align-self-end w-64'>
        <p>Sou Ananda Rosa, Graduada
          em Arquitetura e Urbanismo
          pela UNIVALE, no ano de 2017.
          Sempre tive fascínio por essa
          área de Maquetes Eletrônicas
          na Arquitetura, o que me faz
          sentir êxtase e paixão por
          desenvolver imagens realistas
          e proporcionar aos clientes a
          gostosa sensação de como
          ficará o seu sonho!!!</p>
      </div>
    </div>
  )
}