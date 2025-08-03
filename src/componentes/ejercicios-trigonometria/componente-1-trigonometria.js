import { motion, AnimatePresence } from "framer-motion";
import ContenedorBotones from "../componentes-quiz/componente-botones";
import "../../App.css";

const EjerciciosTrigonometria = ({ seccion, setDeshabilitadoPrincipal }) => {
  const contenido = {
    0: (
      <div className="secciones">
        <h2>Razones trigonométricas de un ángulo agudo</h2>
        <p>
          Las razones trigonométricas relacionan los lados de un triángulo rectángulo con sus ángulos. Son fundamentales para resolver problemas de triángulos y muchas aplicaciones en ciencias e ingeniería.
        </p>
      </div>
    ),
    1: (
      <div className="secciones">
        <h3>¿Qué es un ángulo agudo?</h3>
        <p>
          Un <b>ángulo agudo</b> es aquel que mide más de 0° y menos de 90°.
        </p>
      </div>
    ),
    2: (
      <div className="secciones">
        <h3>Triángulo rectángulo y sus lados</h3>
        <ul>
          <li><b>Hipotenusa:</b> Lado opuesto al ángulo recto (el más largo).</li>
          <li><b>Cateto opuesto:</b> Lado opuesto al ángulo agudo considerado.</li>
          <li><b>Cateto adyacente:</b> Lado que forma el ángulo agudo junto con la hipotenusa.</li>
        </ul>
      </div>
    ),
    3: (
      <div className="secciones">
        <h3>Razones trigonométricas principales</h3>
        <ul>
          <li><b>Seno (sen):</b> cateto opuesto / hipotenusa</li>
          <li><b>Coseno (cos):</b> cateto adyacente / hipotenusa</li>
          <li><b>Tangente (tan):</b> cateto opuesto / cateto adyacente</li>
        </ul>
      </div>
    ),
    4: (
      <div className="secciones">
        <h3>Ejercicio: Identifica la razón trigonométrica</h3>
        <p>¿Cuál es la razón trigonométrica que relaciona el cateto opuesto y la hipotenusa?</p>
        <ContenedorBotones
          opciones={["Seno", "Coseno", "Tangente", "Secante"]}
          correcta={0}
          setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
        />
      </div>
    ),
    5: (
      <div className="secciones">
        <h3>Ejercicio: Calcula una razón trigonométrica</h3>
        <p>
          En un triángulo rectángulo, el cateto opuesto mide 3 y la hipotenusa 5. ¿Cuál es el seno del ángulo agudo?
        </p>
        <ContenedorBotones
          opciones={["3/5", "4/5", "3/4", "5/3"]}
          correcta={0}
          setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
        />
      </div>
    ),
    // Puedes agregar más secciones y ejercicios según lo necesites
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={seccion}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="seccion-ejercicios-trigonometria"
      >
        {contenido[seccion] || <p>Contenido no disponible.</p>}
      </motion.div>
    </AnimatePresence>
  );
};

export default EjerciciosTrigonometria;