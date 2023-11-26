import Link from "next/link";
import Image from "next/image";
import LogoImg from "@public/favicon.ico";

export default function Logo() {
  return (
    <Link className="mb-2 inline-flex md:mb-0" href="/" aria-label="Cruip">
      <Image src={LogoImg} width={32} height={32} alt="Docs" />
    </Link>
  );
}
