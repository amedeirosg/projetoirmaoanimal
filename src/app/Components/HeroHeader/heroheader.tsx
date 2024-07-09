import Image from "next/image";
import "./HeroHeader.css";
import FakeQRCode from "../../../assets/fakeQRCode.png";
export default function HeroHeader() {
  return (
    <div className="HeroHeaderContainer">
      <div className="HeroHeaderImg"></div>
      <div className="HeroHeaderLeftSide">
        <div className="HeroHeaderTitle">
          <h1>PROJETO IRMÃO ANIMAL</h1>
          <h2>Um projeto voluntário destinado a ajudar nossos aumigos!</h2>
        </div>
        <div className="HeroHeaderBtns">
          <button className="leftBtn">Veja nossas ações</button>
          <button className="rightBtn">Contato</button>
        </div>
      </div>
      <div className="HeroHeaderRightSide">
        <h2>
          Quer ser um apoiador? Faça sua doação e tenha o seu nome ou da sua
          empresa em nosso site!
        </h2>
        <Image src={FakeQRCode} alt="qrcode" className="qrcode" />
        <div className="HeroHeaderMobileQRCode">
          <button className="mobileQRCode">Copiar QR Code</button>
        </div>
      </div>
    </div>
  );
}
