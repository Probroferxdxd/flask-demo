import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Aritmetica from "./componentes/Aritmetica";
import Algebra from "./componentes/Algebra";
import Geometria from "./componentes/Geometria";
import Trigonometria from "./componentes/Trigonometria";
import "./App.css";

const NavBar = () => {
  return (
    <nav>
      <div className="seccion-logo">
        <span>
          <i class="fa-solid fa-headphones"></i>Flask
        </span>
      </div>
      <div className="seccion-menu">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "activo" : undefined)}
        >
          Inicio
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "activo" : undefined)}
        >
          Acerca
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "activo" : undefined)}
        >
          Contacto
        </NavLink>
      </div>
    </nav>
  );
};

const MainContainer = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aritmetica" element={<Aritmetica />} />
        <Route path="/algebra" element={<Algebra />} />
        <Route path="/geometria" element={<Geometria />} />
        <Route path="/trigonometria" element={<Trigonometria />} />
      </Routes>
    </main>
  );
};

const App = () => {
  return (
    <div className="container">
      <NavBar />

      <MainContainer />
    </div>
  );
};

export default App;
