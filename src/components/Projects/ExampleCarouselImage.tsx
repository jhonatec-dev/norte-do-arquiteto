import Image from "next/image";

export default function ExampleCarouselImage({ text }: any) {
  return (
    <div>
      <h1>{text}</h1>
      <Image
        src="/assets/images/01.jpeg"
        alt="example"
        width={500}
        height={500}
      />
    </div>
  );
}
