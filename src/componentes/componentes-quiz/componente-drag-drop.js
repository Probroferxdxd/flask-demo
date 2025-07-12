import { useState } from "react";
import "../../App.css";

const DragDropPreguntaEnTexto = ({
  textoConHuecos,
  correctas,
  opciones,
  setDeshabilitadoPrincipal,
}) => {
  const [respuestas, setRespuestas] = useState(
    Array(correctas.length).fill(null)
  );
  const [seleccionada, setSeleccionada] = useState(null);

  const handleCasillaClick = (index) => {
    if (seleccionada) {
      const nuevasRespuestas = [...respuestas];
      nuevasRespuestas[index] = seleccionada.texto;
      setRespuestas(nuevasRespuestas);
      setSeleccionada(null);
      console.log(
        "Funcion 2: Respuesta guardada en respuestas",
        nuevasRespuestas
      );
      // Verificar si todas están correctas
      const todasCorrectas = nuevasRespuestas.every(
        (respuesta, i) => respuesta === correctas[i]
      );
      if (todasCorrectas) {
        setDeshabilitadoPrincipal(false);
        console.log("Funcion 3: Todas las respuestas son correctas");
      }
    }
  };

  return (
    <div className="dragdrop-texto-container">
      <p className="texto-completar">
        {textoConHuecos.map((parte, index) =>
          parte.tipo === "texto" ? (
            <span key={index}>{parte.contenido} </span>
          ) : (
            <span
              key={index}
              className={`dropzone-en-texto ${
                respuestas[parte.index]
                  ? respuestas[parte.index] === correctas[parte.index]
                    ? "correcta"
                    : "incorrecta"
                  : ""
              }`}
              onClick={() => handleCasillaClick(parte.index)}
            >
              {respuestas[parte.index] || "____"}
            </span>
          )
        )}
      </p>
      <div className="opciones">
        {opciones.map((opcion) => (
          <div
            key={opcion.id}
            className={`opcion ${
              seleccionada?.id === opcion.id ? "seleccionada" : ""
            }`}
            onClick={() => {
              setSeleccionada(opcion);
              console.log("Funcion 1: Opción guardada en seleccionada", opcion);
            }}
          >
            {opcion.texto}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragDropPreguntaEnTexto;
