import Image from "next/image";

export default function Logo() {
  return (
    <a href="#">
      <Image src="/assets/images/logo.png" alt="logo" width={50} height={50} />
    </a>
  );
}
