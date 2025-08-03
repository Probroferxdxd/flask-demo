import { useState } from "react";

const ContenedorBotones = ({
  opciones = [],
  correcta,
  setDeshabilitadoPrincipal,
}) => {
  const [botonActivo, setBotonActivo] = useState(null);

  // Si se usa 'opciones' (array), se ignoran opcion1, opcion2, etc.
  // correcta puede ser el índice (número) o el valor (string/elemento)
  return (
    <div className="seccion-botones">
      {opciones.map((texto, idx) => (
        <button
          key={idx}
          className={`botones ${
            botonActivo !== null
              ? (typeof correcta === "number"
                  ? idx === correcta
                  : texto === correcta)
                ? "correcto"
                : "incorrecto"
              : ""
          } ${botonActivo === idx ? "activo" : ""}`}
          onClick={() => {
            setBotonActivo(idx);
            if (
              (typeof correcta === "number" && idx === correcta) ||
              (texto === correcta)
            ) {
              setDeshabilitadoPrincipal(false);
            }
          }}
        >
          {texto}
        </button>
      ))}
    </div>
  );
};

export default ContenedorBotones;
