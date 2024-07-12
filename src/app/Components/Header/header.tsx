import "./Header.css";
import { Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import logo from "../../../assets/logo.png";
import Image from "next/image";
export default function Header() {
  return (
    <div className="HeaderContainer" id="home">
      <a href="/">
        <Image src={logo} alt="logo" width={50} height={50}></Image>
      </a>
      <nav className="HeaderNav">
        <Link href="#home" style={{ all: "unset" }}>
          <span className="navOptions">Início</span>
        </Link>
        <Link href="#project" style={{ all: "unset" }}>
          <span className="navOptions">Sobre</span>
        </Link>
        <Link href="#actions" style={{ all: "unset" }}>
          <span className="navOptions">Ações</span>
        </Link>
        <Link href="#help" style={{ all: "unset" }}>
          <span className="navOptions">Ajudar</span>
        </Link>

        <Link href="#contact" style={{ all: "unset" }}>
          <span className="navOptions">Contato</span>
        </Link>
      </nav>
      <div className="HeaderSocial">
        <Link
          href="https://www.instagram.com/projetoirmaoanimal/"
          target="_blank"
          className="linkInst"
        >
          <div className="HeaderInsta">
            <Instagram />
            <span>Instagram</span>
          </div>
        </Link>
        <Link
          href="https://www.facebook.com/projetoirmaoanimal/"
          target="_blank"
          className="linkInst"
        >
          <div className="HeaderFacebook">
            <Facebook />
            <span>Facebook</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
