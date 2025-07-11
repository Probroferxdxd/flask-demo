import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const PantallaDeEjercicios = ({
  EjerciciosComponent,
  seccionesConValidacion,
}) => {
  const [sectionNumber, setSectionNumber] = useState(0);
  const [deshabilitadoPrincilpal, setDeshabilitadoPrincipal] = useState(true);
  const [textoBoton, setTextoBoton] = useState("Next");
  const navigate = useNavigate();

  useEffect(() => {
    setTextoBoton(sectionNumber === 20 ? "Finish" : "Next");
  }, [sectionNumber]);

  return (
    <div className="seccion-pantalla-de-ejercicios">
      <div className="seccion-barra-de-progreso">
        <div className="parte-barra-de-progreso">
          <div
            className="sombra-barra-de-progreso"
            style={{
              height: "20px",
              backgroundColor: "#2a2439",
              width: "100%",
              borderRadius: "20px",
            }}
          >
            <div
              className="barra-de-progreso"
              style={{
                width: `${sectionNumber * 5}%`,
                backgroundColor: "#ddd",
                height: "100%",
                borderRadius: "20px",
              }}
            ></div>
          </div>
        </div>
        <div className="seccion-x">
          <span
            onClick={() => {
              navigate("/");
            }}
          >
            <i className="fa-solid fa-x"></i>
          </span>
        </div>
      </div>
      <div className="seccion-pantalla-principal">
        <div className="seccion-ejercicios">
          <EjerciciosComponent
            seccion={sectionNumber}
            setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
          />
        </div>
        <footer>
          {sectionNumber >= 1 && (
            <button onClick={() => setSectionNumber(sectionNumber - 1)}>
              Back
            </button>
          )}
          <button
            onClick={() => {
              if (sectionNumber < 20) {
                setSectionNumber(sectionNumber + 1);
                setDeshabilitadoPrincipal(
                  seccionesConValidacion.includes(sectionNumber + 1)
                );
              } else {
                navigate("/");
              }
            }}
            disabled={
              seccionesConValidacion.includes(sectionNumber) &&
              deshabilitadoPrincilpal
            }
          >
            {textoBoton}
          </button>
        </footer>
      </div>
    </div>
  );
};

export default PantallaDeEjercicios;
