"use client";
import "./Actions.css";
import Image from "next/image";
import teste from "../../../assets/comedouro.jpeg";
import recycable from "../../../assets/reciclagens.jpg";
import votes from "../../../assets/catcaocourse.jpg";
import charllote from "../../../assets/catcaocoursefirst.jpg";
import barto from "../../../assets/catcaocoursesecond.jpg";
import raffleOne from "../../../assets/raffle1.jpg";
import raffleTwo from "../../../assets/raffle2.jpg";
import helpDogBefore from "../../../assets/helpdogbefore.jpg";
import helpDogAfter from "../../../assets/helpdogafter.jpg";
import helpDogOne from "../../../assets/helpdogs1.jpg";
import helpDogTwo from "../../../assets/helpdogs2.jpg";
import adoption1 from "../../../assets/adocao1.jpg";
import adoption2 from "../../../assets/adocao2.jpg";
import adoption3 from "../../../assets/adocao3.jpg";
import Link from "next/link";

export default function Actions() {
  const sliderImgs = [
    {
      image: teste,
      title: "Voluntários em uma de nossas feiras para arredação de verba",
    },
    { image: recycable, title: "titulo teste 2 imagem" },
  ];

  const settings = {
    dots: true, // Mostra pontos de navegação
    infinite: true, // Faz o carousel girar infinitamente
    speed: 500, // Velocidade de transição
    slidesToShow: 1, // Número de slides mostrados ao mesmo tempo
    slidesToScroll: 1, // Número de slides a serem rolados por vez
    arrows: true, // Mostra setas de navegação
    autoplay: true,
  };

  return (
    <div className="ActionsContainer" id="actions">
      <h2>Nossas ações</h2>
      <div className="ActionsSlider">
        <div className="ActionsCatCaoCourse">
          <h3>Nosso concurso de aumigos :)</h3>
          <span>
            Concurso realizado pelo nosso{" "}
            <Link
              href="https://www.instagram.com/projetoirmaoanimal/"
              style={{
                all: "unset",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              <span>Instagram</span>
            </Link>
          </span>
          <div className="ActionsCatCaoCourseImg">
            <Image
              src={votes}
              alt="aumigos"
              className="ImgsStyle"
              width={300}
              height={500}
            />
            <Image
              src={charllote}
              alt="aumigos"
              className="ImgsStyle"
              width={300}
              height={500}
            />
            <Image
              src={barto}
              alt="aumigos"
              className="ImgsStyle"
              width={300}
              height={500}
            />
          </div>
        </div>
        <div className="ActionsRaffle">
          <h3>Rifas realizadas</h3>
          <span>
            Rifas realizadas pelo nosso{" "}
            <Link
              href="https://www.instagram.com/projetoirmaoanimal/"
              style={{
                all: "unset",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              <span>Instagram</span>
            </Link>
          </span>
          <div className="ActionsRaffleImgs">
            <Image
              src={raffleOne}
              alt="aumigos"
              className="ImgsStyle"
              width={300}
              height={500}
            />
            <Image
              src={raffleTwo}
              alt="aumigos"
              className="ImgsStyle"
              width={300}
              height={500}
            />
          </div>
        </div>
        <div className="ActionsHelped">
          <h3>Animais resgatados</h3>
          <div className="ActionsRaffleImgs">
            <div className="ActionsInfo">
              <Image
                src={helpDogBefore}
                alt="aumigos"
                width={300}
                height={500}
                className="ImgsStyle"
              />
              <span>Caso cachorro tal... (Antes)</span>
            </div>
            <div className="ActionsInfo">
              <Image
                src={helpDogAfter}
                alt="aumigos"
                className="ImgsStyle"
                width={300}
                height={500}
              />
              <span>Caso cachorro tal... (Depois)</span>
            </div>

            <div className="ActionsInfo">
              <Image
                src={helpDogOne}
                alt="aumigos"
                className="ImgsStyle"
                width={300}
                height={500}
              />
              <span>Filhotes tal...</span>
            </div>
            <div className="ActionsInfo">
              <Image
                src={helpDogTwo}
                alt="aumigos"
                className="ImgsStyle"
                width={300}
                height={500}
              />
              <span>Filhotes tal...</span>
            </div>
          </div>
        </div>
        <div className="ActionsAdopted">
          <h3>Adoções</h3>
          <div className="ActionsAdoptedImgs">
            <div className="ActionsInfo">
              <Image
                src={adoption1}
                alt="aumigos"
                className="ImgsStyle"
                width={300}
                height={500}
              />
              <span>Adoção feita na nossa feira em Pedro Leopoldo 🥰</span>
            </div>

            <div className="ActionsInfo">
              <Image
                src={adoption2}
                alt="aumigos"
                className="ImgsStyle"
                width={300}
                height={500}
              />
              <span>Adoção feita na nossa feira em Pedro Leopoldo 🥰</span>
            </div>

            <div className="ActionsInfo">
              <Image
                src={adoption3}
                alt="aumigos"
                className="ImgsStyle"
                width={300}
                height={500}
              />
              <span>Adoção feita por uma de nossas voluntárias 🥰</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
