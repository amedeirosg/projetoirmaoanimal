import Image from "next/image";
import "./Actions.css";
import teste from "../../../assets/comedouro.jpeg";
export default function Actions() {
  return (
    <div className="ActionsContainer" id="actions">
      <h2>Nossas ações</h2>
      <div className="ActionsArea">
        <div className="ActionsEachOne" id="actions1">
          <h2>Bazar beneficente</h2>
          <p>
            Primeiro programa de arrecadação que foi realizado com a ajuda de
            doações de roupas pelos moradores da cidade.
          </p>
          <Image src={teste} alt="ações" />
          <p>
            O processo da venda foi feito online e o comprador buscava a peça de
            roupa na sede do Rotaract.
          </p>
        </div>
        <div className="ActionsEachOne" id="actions2">
          <h2>Rifa beneficente</h2>
          <p>
            Projeto em que os voluntários vendiam rifas com o objetivo de
            aumentar a visibilidade do nosso trabalho e promover a arrecadação
            para a construção dos comedouros.
          </p>
          <Image src={teste} alt="ações" />
          <p>Projeto realizado com a ajuda de patrocinadores.</p>
        </div>
        <div className="ActionsEachOne" id="actions3">
          <h2>Animais ajudados</h2>
          <p>Casos de abandono; </p>
          <p>Casos de acidente e/ou com risco de vida;</p>
          <Image src={teste} alt="ações" />
          <p>Casos de acidente e/ou com risco de vida;</p>
          <p>Animais que estão sob proteção de cuidadores.</p>
        </div>
        <div className="ActionsEachOne" id="actions3">
          <h2>Comedouros instalados</h2>
          <Image src={teste} alt="ações" />
        </div>
      </div>
    </div>
  );
}
