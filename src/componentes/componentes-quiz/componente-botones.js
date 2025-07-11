import { useState } from "react";

const ContenedorBotones = ({
  opcion1,
  opcion2,
  opcion3,
  opcion4,
  opcionCorrecta,
  setDeshabilitadoPrincipal,
}) => {
  const [botonActivo, setBotonActivo] = useState(null);

  const arrayDeBotones = [
    { texto: opcion1, indice: 1 },
    { texto: opcion2, indice: 2 },
    { texto: opcion3, indice: 3 },
    { texto: opcion4, indice: 4 },
  ];

  return (
    <div className="seccion-botones">
      {arrayDeBotones.map((element) => (
        <button
          key={element.indice}
          // disabled={botonActivo !== null}
          className={`botones ${
            botonActivo
              ? element.indice === opcionCorrecta
                ? "correcto"
                : "incorrecto"
              : ""
          } ${botonActivo === element.indice ? "activo" : ""}`}
          onClick={() => {
            setBotonActivo(element.indice);
            if (element.indice === opcionCorrecta) {
              setDeshabilitadoPrincipal(false);
            }
          }}
        >
          {element.texto}
        </button>
      ))}
    </div>
  );
};

export default ContenedorBotones;
