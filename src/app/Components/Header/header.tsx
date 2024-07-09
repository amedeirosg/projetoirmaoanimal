import "./Header.css";
import { Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import logo from "../../../assets/logo.png";
import Image from "next/image";
export default function Header() {
  return (
    <div className="HeaderContainer">
      <a href="/">
        <Image src={logo} alt="logo" width={50} height={50}></Image>
      </a>
      <nav className="HeaderNav">
        <span className="navOptions">Início</span>
        <span className="navOptions">Ações</span>
        <span className="navOptions">Ajudar</span>
        <span className="navOptions">Contato</span>
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
