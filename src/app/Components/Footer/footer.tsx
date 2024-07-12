import Link from "next/link";
import "./Footer.css";
import { Mail, Facebook, Instagram } from "lucide-react";
export default function Footer() {
  return (
    <div className="FooterContainer" id="contact">
      <div className="FooterContact">
        <h1>Contato</h1>
        <div className="FooterContactIcoMail">
          <Mail />
          <span>email@gmail.com</span>
        </div>
      </div>
      <div className="FooterAboutUs">
        <h1>Sobre nós</h1>
        <span>
          O Projeto irmão Animal é uma iniciativa de jovens líderes com o propósito de
          melhorar a vida dos animais que vivem nas ruas de Pedro Leopoldo e
          região.
        </span>
      </div>
      <div className="FooterStuffs">
        <div className="FooterNav">
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
        </div>
        <div className="FooterSocial">
          <div className="FooterInsta">
            <Link
              href="https://www.instagram.com/projetoirmaoanimal/"
              target="_blank"
              className="linkInst FooterInsta"
            >
              <Instagram />
              <span>Instagram</span>
            </Link>
          </div>
          <div className="FooterFace">
            <Link
              href="https://www.facebook.com/projetoirmaoanimal/"
              target="_blank"
              className="linkInst FooterFace"
            >
              <Facebook />
              <span>Facebook</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
