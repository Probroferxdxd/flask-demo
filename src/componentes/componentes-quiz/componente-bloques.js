import React, { useState } from "react";
import "../../App.css";

const DragDropPregunta = ({
  opciones,
  respuestaCorrecta,
  setDeshabilitadoPrincipal,
}) => {
  const [seleccionada, setSeleccionada] = useState(null);
  const [respuesta, setRespuesta] = useState(null);
  const [esCorrecto, setEsCorrecto] = useState(null);

  return (
    <div className="dragdrop-contenedor">
      <div className="dragdrop-opciones">
        {opciones.map((opcion, index) => (
          <div
            key={index}
            className={`dragdrop-opcion ${
              seleccionada === opcion ? "seleccionada" : ""
            }`}
            onClick={() => setSeleccionada(opcion)}
          >
            {opcion}
          </div>
        ))}
      </div>
      <div
        className={`dragdrop-zona-respuesta ${
          esCorrecto === true
            ? "correcto"
            : esCorrecto === false
            ? "incorrecto"
            : ""
        }`}
        onClick={() => {
          if (seleccionada) {
            setRespuesta(seleccionada);
            if (seleccionada === respuestaCorrecta) {
              setEsCorrecto(true);
              setDeshabilitadoPrincipal(false);
            } else {
              setEsCorrecto(false);
            }
            setSeleccionada(null);
          }
        }}
      >
        {respuesta || "Toca aquí para colocar"}
      </div>
    </div>
  );
};

export default DragDropPregunta;
