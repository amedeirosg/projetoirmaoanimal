"use client";
import "./Project.css";
import teste from "../../../assets/projetos.jpg";
import teste2 from "../../../assets/bgHeroHeaderpng.png";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Project() {
  const settings = {
    dots: true, // Mostra pontos de navegação
    infinite: true, // Faz o carousel girar infinitamente
    speed: 500, // Velocidade de transição
    slidesToShow: 1, // Número de slides mostrados ao mesmo tempo
    slidesToScroll: 1, // Número de slides a serem rolados por vez
    arrows: true, // Mostra setas de navegação
    autoplay: true,
  };

  const sliderImgs = [
    {
      image: teste,
      title: "Voluntários em uma de nossas feiras para arredação de verba",
    },
    { image: teste2, title: "titulo teste 2 imagem" },
  ];

  return (
    <div className="ProjectContainer">
      <div className="ProjectTitle">
        <h2>O projeto irmão animal</h2>
        <div className="ProjectSubtitle">
          <span>
            O Irmão Animal é uma iniciativa de jovens líderes com o propósito de
            melhorar a vida dos animais que vivem nas ruas de Pedro Leopoldo e
            região.
          </span>
          <span>
            <ul>
              <li>
                Arrecadação financeira para apoiar cuidadores de animais através
                de doação de ração, kit para primeiros socorros e ajudas
                pontuais em casos com risco de vida;
              </li>
              <li>
                Promoção de adoções responsáveis dos animais resgatados por nós;
              </li>
              <li>
                Promover projetos e campanhas de médio a longo prazo com o
                propósito de conscientizações e bem-estar animal.
              </li>
            </ul>
          </span>
        </div>
      </div>
      <div className="ProjectSlider">
        <Slider {...settings}>
          {sliderImgs.map((img, index) => {
            return (
              <div className="card" key={index}>
                <div className="ProjectSliderTitle">
                  <h2>{img.title}</h2>
                </div>
                <Image src={img.image} alt="imagem projeto" className="img" />
              </div>
            );
          })}
        </Slider>
      </div>

      {/* <div className="ProjectImages">
        <div className="ProjectImgTitle">
          <h2>Voluntários em uma de nossas feiras para arredacação de verba</h2>
        </div>
      </div> */}
    </div>
  );
}
