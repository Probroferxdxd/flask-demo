import { motion, AnimatePresence } from "framer-motion";
import ContenedorBotones from "../componentes-quiz/componente-botones";
import DragDropPregunta from "../componentes-quiz/componente-bloques";
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
          <ul style={{ textAlign: "left", gap: "0" }}>
            <h3>Ingredientes:</h3>
            <li>Harina =&gt; $10 </li>
            <li>Huevos =&gt; $15 </li>
            <li>Azúcar =&gt; $10 </li>
            <li>Leche =&gt; $10 </li>
            <li>Chocolate =&gt; $20</li>
            <li>Polvo de hornear =&gt; $12 </li>
            <li>
              <strong>Total: $77</strong>
            </li>
          </ul>
        </p>
      </div>
    ),
    2: (
      <div className="secciones">
        <p>
          El total ($77) vendria representando los gastos que afectarán la
          ganancia obtenida, pero cómo calculas la ganancia?
        </p>
      </div>
    ),
    3: (
      <div className="secciones">
        <p>
          La ganancia vendria representando la venta d elos queques menos los
          gastos, debemos de considerar la cantidad de queques vendidos como "x"
          porque no sabremos cuanto venderemos en un día
        </p>
      </div>
    ),
    4: (
      <div className="secciones">
        <p>
          Antes de continuar, debemos de tener algunos conocimentos previos al
          tema de Algebra.
        </p>
        <div className="seccion-ejercicios-formulas">
          <p>
            <b>Expresion Matemática: </b>
            <span>
              Es cualquier combinación de números y letras entrelazadas por las
              diferentes operaciones matemáticas.
            </span>
          </p>
          <p>2x + 5 = 11</p>
        </div>
      </div>
    ),
    5: (
      <div className="secciones">
        <p>
          <b>Notación Matemática: </b>
          <span>
            Es la representación de una expresión matemática en forma de
            símbolos que nos permiten reconocer las variables de esta.
          </span>
        </p>
        <p>P(x) = 2x³ + 5x² - x + 3 =&gt; tiene una variable "x"</p>
      </div>
    ),
    6: (
      <div className="secciones">
        <DragDropPregunta
          opciones={["90$", "75$", "70$", "60$"]}
          respuestaCorrecta="70$"
          setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
        />
      </div>
    ),
    7: (
      <div className="secciones">
        <h2>Identifica la palabra clave:</h2>
        <IdentificarPalabra 
          texto="La fotosíntesis es un proceso vital para las plantas." 
          palabraClave="fotosíntesis" 
        />
      </div>
    ),
    8: (
      <div className="secciones">
        <h3>Paso 2</h3>
        <p>
          Luego de reconocer la tasa de interés, debemos de identificar el{" "}
          <b>tiempo</b> en el que aumentaremos el monto debido y que este
          coincida con el periodo de la <b>tasa de interés</b>
        </p>
        <div className="seccion-ejercicios-formulas">
          <p>
            A nuestra <b>tasa de interés</b> en periodos semanales, debemos de
            considerar el valor del <b>tiempo</b> en semanas, podemos tomar "3
            semanas" como un posible valor del <b>tiempo</b>
          </p>
        </div>
      </div>
    ),
    9: (
      <div className="secciones">
        <h3>Paso 3</h3>
        <p>
          Finalmente hallamos el interés con el cual cobraremos usando la
          siguiente fórmula:
        </p>
        <div className="seccion-ejercicios-formulas" style={{ scale: "0.8" }}>
          <p>Interés = C x r% x t</p>
        </div>
        <p>
          Con ella, hallemos el <b>interés</b> si nuestro Capital es 70$,
          nuestra tasa de interés es 10% semanal y el tiempo es 3 semanas
        </p>
        <ContenedorBotones
          opcion1="21$"
          opcion2="7$"
          opcion3="30$"
          opcion4="70$"
          opcionCorrecta={1}
          setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
        />
      </div>
    ),
    10: (
      <div className="secciones">
        <p>
          Excelente, el interés hallado es la cantidad que cobraremos a nuestro
          amigo más el monto que le dimos, osea el capital. Para hallar el monto
          que debe pagar nuestro amigo, debemos de sumar el interés con el
          capital
        </p>
        <div className="seccion-ejercicios-formulas">
          <p>Monto = C + I</p>
        </div>
        <p>
          Hallemos el monto si nuestro Capital es 70$ y el interés del anterior
          ejercicio es 21$
        </p>
        <ContenedorBotones
          opcion1="81$"
          opcion2="91$"
          opcion3="76$"
          opcion4="70$"
          opcionCorrecta={2}
          setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
        />
      </div>
    ),
    11: (
      <div className="secciones">
        <p>
          Bien, ahora ya tenemos idea de como aplicar el Interés Simple. A
          continuación, resolveremos algunos casos en los que apliquemos ello
        </p>
      </div>
    ),
    12: (
      <div className="secciones">
        <h2>Caso 1</h2>
        <p>
          ¿Cúal será el interés simple si nuestro capital es de 2000$, nuestra
          tasa de interés es del 8% anual durante 3 años?
        </p>
        <ContenedorBotones
          opcion1="100$"
          opcion2="160$"
          opcion3="320$"
          opcion4="480$"
          opcionCorrecta={3}
          setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
        />
      </div>
    ),
    13: (
      <div className="secciones">
        <h2>Dato:</h2>
        <p>
          En algunos problemas, el periodo en el que se aplica la tasa de
          interés (<b>r%</b>) puede ser diferente al periodo de nuestra variable
          tiempo (<b>t</b>). Por ejemplo:
        </p>
        <div className="seccion-ejercicios-formulas">
          <span style={{ display: "block" }}>
            Si "r%" es igual a 5% <b>semestral</b> Y "t" es de 4 <b>años</b>,
            debemos de generar equivalencias:
          </span>
          <span>5% semestral es equivalente a 10% anual</span>
        </div>
      </div>
    ),
    14: (
      <div className="secciones">
        <h2>Caso 2</h2>
        <p>
          Si Mariano ha prestado 12 000$ a un amigo con una tasa de interés al
          10% bimestral para 8 meses ¿Cuál es el{" "}
          <b style={{ textDecoration: "underline" }}>monto</b> que pagará luego
          de este periodo
        </p>
        <ContenedorBotones
          opcion1="16 800$"
          opcion2="4800$"
          opcion3="1200$"
          opcion4="1080$"
          opcionCorrecta={1}
          setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
        />
      </div>
    ),
    15: (
      <div className="secciones">
        <h2>Dato:</h2>
        <p>
          Algunos problemas pueden ser muy complejos en su comprensión, como el
          siguiente:
        </p>
        <p>
          ¿Durante cuanto <b>tiempo</b> (1) Juan debe depositar en un banco un{" "}
          <b>capital</b> de $25 000 (2) al 5% (3) <br />
          para que se convierta es $30 000 (4)?
        </p>
        <ul style={{ textAlign: "left" }}>
          <li>1: tiempo (t)= x</li>
          <li>2: capital (C)= $25 000</li>
          <li>3: tasa de interés (r%)= 5% anual</li>
          <li>4: monto (M)= $30 000</li>
        </ul>
      </div>
    ),
    16: (
      <div className="secciones">
        <h2>Dato</h2>
        <p>
          Primeros hallemos el <b>interés</b> en base al monto
        </p>
        <p>Monto = Interés + Capital</p>
        <ContenedorBotones
          opcion1="3000$"
          opcion2="4000$"
          opcion3="500$"
          opcion4="5000$"
          opcionCorrecta={4}
          setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
        />
      </div>
    ),
    17: (
      <div className="secciones">
        <h2>Dato</h2>
        <p>
          Si el interés es 5000$, consideremos entonces la fórmula del interés
          para hallar el tiempo
        </p>
        <div className="seccion-ejercicios-formulas">
          <p>I = C x r% x t</p>
        </div>
        <ContenedorBotones
          opcion1="4 años"
          opcion2="6 años"
          opcion3="3 años"
          opcion4="5 años"
          opcionCorrecta={1}
          setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
        />
      </div>
    ),
    18: (
      <div className="secciones">
        <h2>Caso 3</h2>
        <p>
          Calculemos el interés producido por $3000 impuestos <u>al 15%</u>{" "}
          durante tres años
        </p>
        <p>
          Dato: Si no se menciona el periodo de "r%" se sobreentiende que el
          periodo es anual
        </p>
        <ContenedorBotones
          opcion1="$1305"
          opcion2="$1035"
          opcion3="$1350"
          opcion4="$1530"
          opcionCorrecta={1}
          setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
        />
      </div>
    ),
    19: (
      <div className="secciones">
        <h2>Caso 4</h2>
        <p>
          Calulemos el interés que produce un capital de $1200 colocados a una
          tasa del 4% mensual durante cinco bimestres
        </p>
        <ContenedorBotones
          opcion1="$840"
          opcion2="$804"
          opcion3="$408"
          opcion4="$480"
          opcionCorrecta={4}
          setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
        />
      </div>
    ),
    20: (
      <div className="secciones">
        <h2>Caso 5</h2>
        <p>
          Jéniffer deposita $20 000 en una entidad financiera durante 3 años a
          una tasa del 12,5% semestral. Calcula el tiempo
        </p>
        <ContenedorBotones
          opcion1="$15 000"
          opcion2="$30 000"
          opcion3="$7500"
          opcion4="$44 000"
          opcionCorrecta={1}
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
