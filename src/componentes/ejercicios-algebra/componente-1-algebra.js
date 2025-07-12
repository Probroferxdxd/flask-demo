import { motion, AnimatePresence } from "framer-motion";
import ContenedorBotones from "../componentes-quiz/componente-botones";
import DragDropPreguntaEnTexto from "../componentes-quiz/componente-drag-drop";
import IdentificarPalabra from "../componentes-quiz/componente-identificando";
import "../../App.css";

const EjerciciosAlgebra = ({ seccion, setDeshabilitadoPrincipal }) => {
  const contenido = {
    0: (
      <div className="secciones">
        <p>Volvemos con nuestra tienda, esta vez decides vender queques.</p>
      </div>
    ),
    1: (
      <div className="secciones">
        <p>
          Para tu negocio de queques debes evaluar el costo de los ingredientes
          necesarios para la preparación de estos:
        </p>
        <ul style={{ textAlign: "left" }}>
          <li>Harina =&gt; $10</li>
          <li>Huevos =&gt; $15</li>
          <li>Azúcar =&gt; $10</li>
          <li>Leche =&gt; $10</li>
          <li>Chocolate =&gt; $20</li>
          <li>Polvo de hornear =&gt; $12</li>
          <li>
            <strong>Total: $77</strong>
          </li>
        </ul>
      </div>
    ),
    2: (
      <div className="secciones">
        <p>
          El total ($77) vendría representando los gastos que afectarán la
          ganancia obtenida, pero ¿cómo calcular la ganancia?
        </p>
      </div>
    ),
    3: (
      <div className="secciones">
        <p>
          La ganancia vendría representando la venta de los queques menos los
          gastos, debemos considerar la cantidad de queques vendidos como "x"
          porque no sabremos cuánto venderemos en un día, sin embargo, cada
          queque será vendido a 10$.
        </p>
      </div>
    ),
    4: (
      <div className="secciones">
        <p>
          Antes de continuar, debemos de tener algunos conocimientos previos al
          tema de Álgebra.
        </p>
        <div className="seccion-ejercicios-formulas">
          <p>
            <b>Expresión Matemática:</b> Es cualquier combinación de números y
            letras entrelazadas por las diferentes operaciones matemáticas.
          </p>
          <p>Ejemplo: 2x + 5 = 11</p>
        </div>
      </div>
    ),
    5: (
      <div className="secciones">
        <div className="seccion-ejercicios-formulas">
          <p>
            <b>Notación Matemática:</b> definición de cómo se representan las
            expresiones con símbolos
          </p>
          <p>Ejemplo: P(x) = 2x³ + 5x² - x + 3 ⇒ tiene una variable "x"</p>
        </div>
      </div>
    ),
    6: (
      <div className="secciones">
        <p>
          Volviendo con nuestro caso, debemos de elaborar una expresión
          matemática que nos permita determinar cuánto se obtiene de ganancia.
          Ordenemos los datos considerando lo que se gana con los queques y lo
          que se gasta para su preparación.
        </p>
        <DragDropPreguntaEnTexto
          textoConHuecos={[
            { tipo: "texto", contenido: "Px =" },
            { tipo: "hueco", index: 0 },
            { tipo: "texto", contenido: "" },
            { tipo: "hueco", index: 1 },
          ]}
          correctas={["10x", "-77"]}
          opciones={[
            { id: "1", texto: "10x" },
            { id: "2", texto: "3x" },
            { id: "3", texto: "-77" },
            { id: "4", texto: "+77" },
          ]}
          setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
        />
      </div>
    ),
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={seccion}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="seccion-ejercicios-aritmetica"
      >
        {contenido[seccion] || <p>Contenido no disponible.</p>}
      </motion.div>
    </AnimatePresence>
  );
};

export default EjerciciosAlgebra;
