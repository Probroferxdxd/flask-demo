import { useState } from "react";
import "../../App.css";

const IdentificarPalabra = ({ texto, palabraClave }) => {
  const [seleccion, setSeleccion] = useState(null);
  const [resultado, setResultado] = useState(null);

  const palabras = texto.split(" ");

  const manejarClick = (palabra, indice) => {
    setSeleccion(indice);
    if (palabra.replace(/[.,;!?]/g, "").toLowerCase() === palabraClave.toLowerCase()) {
      setResultado("correcto");
    } else {
      setResultado("incorrecto");
    }
  };

  return (
    <div className="quiz-identificar-contenedor">
      <p className="quiz-identificar-texto">
        {palabras.map((palabra, i) => (
          <span
            key={i}
            className={`quiz-palabra ${
              seleccion === i ? (resultado === "correcto" ? "correcto" : "incorrecto") : ""
            }`}
            onClick={() => manejarClick(palabra, i)}
          >
            {palabra}{" "}
          </span>
        ))}
      </p>
      {resultado && (
        <div className={`quiz-resultado ${resultado}`}>
          {resultado === "correcto" ? "✅ ¡Correcto!" : "❌ Incorrecto"}
        </div>
      )}
    </div>
  );
};

export default IdentificarPalabra;
