import { useState } from "react";
import { Stage, Layer } from "react-konva";
import LienzoGeometria from "./componente-lienzo-geometrico";
import "../../App.css";

const QuizGeometria = ({ pregunta, elementos, opciones, respuestaCorrecta,onRespuesta, setDeshabilitadoPrincipal }) => {
  const [seleccionada, setSeleccionada] = useState(null);
  const [resultado, setResultado] = useState(null); // "correcto" | "incorrecto" | null

   const handleOpcion = (opcion) => {
    setSeleccionada(opcion);
    const esCorrecta = opcion === respuestaCorrecta;
    setResultado(esCorrecta ? "correcto" : "incorrecto");
    onRespuesta && onRespuesta(opcion, esCorrecta);
  };

  return (
    <div className="quiz-geometria-contenedor">
      <div className="quiz-texto">
        <p>{pregunta}</p>
      </div>

      <div className="quiz-lienzo">
        <Stage width={window.innerWidth - 930} height={300}>
          <Layer>
            <LienzoGeometria
              elementos={elementos}
              setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
            />
          </Layer>
        </Stage>
      </div>

       <div className="quiz-opciones">
        {opciones.map((opcion, i) => (
          <button
            key={i}
            onClick={() => handleOpcion(opcion)}
            className={`quiz-boton ${
              seleccionada === opcion
                ? resultado === "correcto"
                  ? "correcto activo"
                  : resultado === "incorrecto"
                  ? "incorrecto activo"
                  : ""
                : ""
            }`}
          >
            {opcion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizGeometria;