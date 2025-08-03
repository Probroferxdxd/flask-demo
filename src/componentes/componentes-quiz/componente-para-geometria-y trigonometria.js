import { Stage, Layer } from "react-konva";
import LienzoGeometria from "./componente-lienzo-geometrico";
import "../../App.css";

const QuizGeometria = ({ pregunta, elementos, opciones, onRespuesta }) => {
  return (
    <div className="quiz-geometria-contenedor">
      <div className="quiz-texto">
        <p>{pregunta}</p>
      </div>

      <div className="quiz-lienzo">
        <Stage width={window.innerWidth - 40} height={300}>
          <Layer>
            <LienzoGeometria elementos={elementos} />
          </Layer>
        </Stage>
      </div>

      <div className="quiz-opciones">
        {opciones.map((opcion, i) => (
          <button key={i} onClick={() => onRespuesta(opcion)} className="quiz-boton">
            {opcion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizGeometria;