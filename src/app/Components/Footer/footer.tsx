import "./Footer.css";
import { Mail, Facebook, Instagram } from "lucide-react";
export default function Footer() {
  return (
    <div className="FooterContainer">
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
          O Irmão Animal é uma iniciativa de jovens líderes com o propósito de
          melhorar a vida dos animais que vivem nas ruas de Pedro Leopoldo e
          região.
        </span>
      </div>
      <div className="FooterStuffs">
        <div className="FooterNav">
          <span>Inicio</span>
          <span>Ações</span>
          <span>Ajudar</span>
          <span>Contato</span>
        </div>
        <div className="FooterSocial">
          <div className="FooterInsta">
            <Instagram />
            <span>Instagram</span>
          </div>
          <div className="FooterFace">
            <Facebook />
            <span>Facebook</span>
          </div>
        </div>
      </div>
    </div>
  );
}
