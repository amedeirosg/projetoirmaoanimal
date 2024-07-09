import "./Help.css";
import Image from "next/image";
import cats from "../../../assets/cats.png";
import dog from "../../../assets/dog.png";
import dogs from "../../../assets/dogs.png";
import house from "../../../assets/house.png";
export default function Help() {
  return (
    <div className="HelpContainer">
      <h2>Como ajudar?</h2>
      <div className="HelpArea group">
        <div className="HelpTags item">
          <Image src={cats} alt="imagem" />
          <h2>Seja um parceiro do projeto</h2>
          <span>
            Se você deseja ter uma parceria com a gente, entre em contato
            conosco!
          </span>
        </div>
        <div className="HelpTags item">
          <Image src={dog} alt="imagem" />
          <h2>Seja voluntário!</h2>
          <span>Ajude com tarefas importantes para o nosso projeto!</span>
        </div>
        <div className="HelpTags item">
          <Image src={dogs} alt="imagem" />
          <h2>Ofereça lar temporário</h2>
          <span>
            O lar temporário significa muito para os pets que estão
            incapacitados
          </span>
        </div>
        <div className="HelpTags item">
          <Image src={house} alt="imagem" />
          <h2>Apadrinhe um animal</h2>
          <span>
            O apadrinhamento é uma maneira de “adotar” um pet, cuidando dele de
            onde estiver!
          </span>
        </div>
      </div>
    </div>
  );
}
