import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Aritmetica from "../componentes/Aritmetica";
import Algebra from "../componentes/Algebra";
import Geometria from "../componentes/Geometria";
import Trigonometria from "../componentes/Trigonometria";
import imagenAritmetica from "../imagenes/aritmetica.png";
import imagenAlgebra from "../imagenes/algebra.png";
import imagenGeometria from "../imagenes/geometria.png";
import imagenTrigonometria from "../imagenes/trigonometria.png";

const SeccionCursos = () => {
  const listadoDeCursos = [
    {
      nombre: "Aritmética",
      icono: imagenAritmetica,
      lista: (
        <ul>
          <li>Proporciones y Razones</li>
          <li>Tanto por Ciento</li>
          <li>Regla del Interés</li>
        </ul>
      ),
      boton: <NavLink to="/aritmetica">Iniciar</NavLink>,
    },
    {
      nombre: "Algebra",
      icono: imagenAlgebra,
      lista: (
        <ul>
          <li>Productos Notables</li>
          <li>Polinomios</li>
          <li>División de Polinomios</li>
        </ul>
      ),
      boton: <NavLink to="/algebra">Iniciar</NavLink>,
    },
    {
      nombre: "Geometria",
      icono: imagenGeometria,
      lista: (
        <ul>
          <li>Segmentos y ángulos</li>
          <li>Triángulos</li>
          <li>Lineas notables</li>
        </ul>
      ),
      boton: <NavLink to="/geometria">Iniciar</NavLink>,
    },
    {
      nombre: "Trigonometría",
      icono: imagenTrigonometria,
      lista: (
        <ul>
          <li>Sistema de medición angular</li>
          <li>Longitud del arco de una circunferencia</li>
          <li>Razones trigonométricas de un ángulo agudo</li>
        </ul>
      ),
      boton: <NavLink to="/trigonometria">Iniciar</NavLink>,
    },
  ];

  return (
    <div className="seccion-cursos">
      {listadoDeCursos.map((elemento, index) => (
        <div key={index} className={`curso curso-de${elemento.nombre}`}>
          <header>
            <h2>{elemento.nombre}</h2>
            <img src={elemento.icono} />
          </header>
          <section>
            {elemento.lista}
            {elemento.boton}
          </section>
        </div>
      ))}
    </div>
  );
};

function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className={`page ${show ? "show" : ""} seccion-inicio`}>
            <div className="seccion-presentacion">
              <h1>Otra forma de Aprendizaje</h1>
              <p>
                Flask brinda una experiencia totalmente diferente en el
                aprendizaje preuniversitario para ofrecer una base solida a los
                estudiantes, de forma que puedan comprender los conceptos más
                complejos en las preguntas de exámenes de admisión
              </p>
            </div>
            <SeccionCursos />
          </div>
        }
      />
    </Routes>
  );
}

export default Home;
