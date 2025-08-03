import { motion, AnimatePresence } from "framer-motion";
import ContenedorBotones from "../componentes-quiz/componente-botones";
import QuizGeometria from "../componentes-quiz/componente-para-geometria-y trigonometria";
import "../../App.css";

const EjerciciosGeometria = ({ seccion, setDeshabilitadoPrincipal }) => {
  const contenido = {
    0: (
      <div className="secciones">
        <h2>Segmentos y Ángulos</h2>
        <p>
          En geometría, los <b>segmentos</b> y los <b>ángulos</b> son conceptos
          fundamentales para el estudio de figuras y sus propiedades.
        </p>
      </div>
    ),
    1: (
      <div className="secciones">
        <h3>¿Qué es un segmento?</h3>
        <p>
          Un <b>segmento</b> es una parte de una recta que está comprendida
          entre dos puntos, llamados extremos.
        </p>
        <ul>
          <li>
            Se representa como <b>AB</b> si sus extremos son A y B.
          </li>
          <li>
            La longitud de un segmento es la distancia entre sus extremos.
          </li>
        </ul>
      </div>
    ),
    2: (
      <div className="secciones">
        <h3>¿Qué es un ángulo?</h3>
        <p>
          Un <b>ángulo</b> es la abertura formada por dos rayos (lados) que
          tienen un mismo punto de origen (vértice).
        </p>
        <ul>
          <li>Se mide en grados (°) o radianes.</li>
          <li>Ejemplo: Un ángulo recto mide 90°.</li>
        </ul>
      </div>
    ),
    3: (
      <div className="secciones">
        <h3>Clasificación de ángulos</h3>
        <ul>
          <li>
            <b>Agudo:</b> menor de 90°
          </li>
          <li>
            <b>Recto:</b> igual a 90°
          </li>
          <li>
            <b>Obtuso:</b> mayor de 90° y menor de 180°
          </li>
          <li>
            <b>Llano:</b> igual a 180°
          </li>
        </ul>
      </div>
    ),
    4: (
      <div className="secciones">
        <h3>Ejercicio: Identifica el tipo de ángulo</h3>
        <ContenedorBotones
          opciones={["Agudo", "Recto", "Obtuso", "Llano"]}
          correcta={1}
          setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
        />
        <p>¿Qué tipo de ángulo es uno que mide 90°?</p>
      </div>
    ),
    5: (
      <div className="secciones">
        <h3>Ejercicio: Longitud de un segmento</h3>
        <p>
          Si el punto A está en la posición 2 y el punto B en la posición 7 de
          una recta numérica, ¿cuál es la longitud del segmento AB?
        </p>
        <ContenedorBotones
          opciones={["5", "7", "9", "2"]}
          correcta={0}
          setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
        />
      </div>
    ),
    6: (
      <div className="secciones">
        <QuizGeometria
          pregunta="¿Cuál es la longitud del segmento AB?"
          elementos={[
            { tipo: "punto", x: 50, y: 100, nombre: "A", fill: "black" },
            { tipo: "punto", x: 250, y: 150, nombre: "B", fill: "black" },
            { tipo: "segmento", inicio: "A", fin: "B", stroke: "blue" },
          ]}
          opciones={["100", "150", "200", "250"]}
          onRespuesta={(respuesta) => {
            console.log("Seleccionaste:", respuesta);
          }}
        />
      </div>
    ),
    // Puedes seguir agregando más secciones y ejercicios según lo necesites
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={seccion}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="seccion-ejercicios-geometria"
      >
        {contenido[seccion] || <p>Contenido no disponible.</p>}
      </motion.div>
    </AnimatePresence>
  );
};

export default EjerciciosGeometria;
