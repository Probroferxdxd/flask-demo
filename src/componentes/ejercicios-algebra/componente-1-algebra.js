import React from "react";
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
    7: (
      <div className="secciones">
        <p>
          Excelente, ahora con nuestra expresión matemática elaborada, podemos
          determinar las ganancias que obtenemos y verificar si ganamos o
          perdemos dinero, a continuación, profundizaremos en las
          características de nuestra expresión
        </p>
        <p>
          <b>Demostración:</b> P(x) = 10x - 77
        </p>
        <p>
          La expresión matemática mostrada es también considerada una expresión
          algebraica.
        </p>
        <p>
          Las expresiones algebraicas son un subconjunto de las expresiones
          matemáticas que se caracterizan por contener variables en forma de
          letras y operaciones aritméticas.
        </p>
      </div>
    ),
    8: (
      <div className="secciones">
        <p>
          <b>Demostración:</b> P(x) = 10x - 77
        </p>
        <p>
          La variable que estamos usando es “x”, que puede ser sustituida por
          algún número y dar un valor a la expresión.
        </p>
        <p>Ejemplo: P(5) = 10(5) - 77 = -27 (PÉRDIDA)</p>
        <p>Ejemplo: P(12) = 10(12) - 77 = 43 (GANANCIA)</p>
      </div>
    ),
    9: (
      <div className="secciones">
        <p>
          "Entonces, si nosotros vendemos un total de 37 queques, ¿Cuánto será
          nuestra ganancia?"
        </p>
        <ContenedorBotones
          opciones={["278$", "293$", "370$", "300$"]}
          opcionCorrecta={2}
          setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
        />
      </div>
    ),
    10: (
      <div className="secciones">
        <p>
          Caso 1: Luis ha solicitado un celular en un plan postpago de S/39 al
          mes. El plan incluye 400 minutos gratis y cada minuto adicional de uso
          cuesta 20 céntimos. El costo mensual está representado por la
          siguiente expresión, donde x representa el número de minutos
        </p>
        <ContenedorBotones
          opciones={["$55", "$50", "$49", "$60"]}
          correcta={1}
          setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
        />
      </div>
    ),
    11: (
      <div className="secciones">
        <p>
          Volviendo con nuestro negocio de queques, podemos decir que P(x) = 10x
          - 77 es un polinomio, ya que presenta una expresión algebraica con
          sumas, restas, multiplicación y potencias. En el caso de estas dos
          últimas, deben ser números enteros y en las potencias exclusivamente
          números naturales.
        </p>
        <ul>
          <li>4x³ - 2x² + 7x - 1</li>
          <li>5x²</li>
          <li>3x + 2</li>
          <li>2x² - 5x + 1</li>
        </ul>
      </div>
    ),
    12: (
      <div className="secciones">
        <p>
          De lo mencionado anteriormente, ¿Cuál de las siguientes opciones es un
          polinomio?
        </p>

        <ContenedorBotones
          opciones={[
            <span>
              3x<sup>2</sup> + 5x − 4
            </span>,
            <span>3⋅2x + 7x</span>,
            <span>
              x<sup>1/2</sup> + 5x<sup>2</sup>
            </span>,
            <span>
              4x - 1 − 2x<sup>3</sup>
            </span>,
          ]}
          correcta={1}
          setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
        />
      </div>
    ),
    13: (
      <div className="secciones">
        <p>
          Ahora que sabemos identificar qué cosa es un polinomio, podemos
          reconocer sus tipos. La siguiente tabla muestra algunos polinomios
          clasificados por su tipo, cantidad de términos y su grado:
        </p>
        <table
          style={{
            marginTop: "20px",
            borderCollapse: "collapse",
            width: "100%",
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "10px",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          <thead style={{ backgroundColor: "#f0f0f0" }}>
            <tr>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>
                POLINOMIO
              </th>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>
                TIPO
              </th>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>
                TÉRMINOS
              </th>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>
                GRADO
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                5x² − 7x + 2
              </td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                trinomio
              </td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                5x², −7x, 2
              </td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>2</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                3x² + 3x
              </td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                binomio
              </td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                3x², 3x
              </td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>2</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>7xᵃ</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                monomio
              </td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>7xᵃ</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>a</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                4 − x + 5x² − x⁵
              </td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                polinomio
              </td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                4, −x⁵, 5x², −x
              </td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>5</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    14: (
      <div className="secciones">
        <p>
          A continuación, clasifiquemos a los polinomios con sus tipos. Arrastra
          cada opción al tipo correspondiente:
        </p>
        <DragDropPreguntaEnTexto
          textoConHuecos={[
            { tipo: "texto", contenido: "Trinomio:" },
            { tipo: "hueco", index: 0 },
            { tipo: "texto", contenido: " | Binomio:" },
            { tipo: "hueco", index: 1 },
            { tipo: "texto", contenido: " | Polinomio:" },
            { tipo: "hueco", index: 2 },
            { tipo: "texto", contenido: " | Monomio:" },
            { tipo: "hueco", index: 3 },
          ]}
          correctas={[
            "4x² + 8x + 16", // Trinomio
            "3x + 3", // Binomio
            "x³ + x² − x + 1", // Polinomio
            "2x³", // Monomio
          ]}
          opciones={[
            { id: "1", texto: "x³ + x² − x + 1" },
            { id: "2", texto: "4x² + 8x + 16" },
            { id: "3", texto: "2x³" },
            { id: "4", texto: "3x + 3" },
          ]}
          setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
        />
      </div>
    ),
    15: (
      <div className="secciones">
        <div className="ejercicio-formulas">
          <p>
            Luego de saber identificar los tipos de polinomios, reconozcamos sus
            formas
          </p>

          <h3>Polinomio Lineal</h3>
          <p>Ejemplo general: P(x) = ax + b</p>

          <ul>
            <li>3x + 5</li>
            <li>x + 6</li>
            <li>10x + 10</li>
            <li>2x + 8</li>
          </ul>
        </div>
      </div>
    ),
    16: (
      <div className="secciones">
        <div className="ejercicio-formulas">
          <h3>Polinomio Cuadrático</h3>
          <p>
            Es cualquier combinación de números y letras entrelazadas por
            operaciones matemáticas.
          </p>
          <p>Ejemplo general: P(x) = ax² + bx + c</p>

          <ul>
            <li>2x² + 5x + 6</li>
            <li>9x²</li>
            <li>5x²</li>
            <li>4x² - 5x</li>
          </ul>
        </div>
      </div>
    ),
    17: (
      <div className="secciones">
        <div className="ejercicio-formulas">
          <h3>Polinomio Cúbico</h3>
          <p>
            Es cualquier combinación de números y letras entrelazadas por
            operaciones matemáticas.
          </p>
          <p>Ejemplo general: P(x) = ax³ + bx² + cx + d</p>

          <ul>
            <li>P(x) = 4x³ + 5x² - 7x + 1</li>
            <li>S(x) = 5x³</li>
            <li>R(x) = x³ + 6x² + 3</li>
          </ul>
        </div>
      </div>
    ),
    18: (
      <div className="secciones">
        <div className="ejercicio-formulas">
          <p>
            <br />
            <strong>a</strong> es el coeficiente principal
            <br />
            <strong>b</strong> es el coeficiente del término cuadrático
            <br />
            <strong>c</strong> es el coeficiente del término lineal
            <br />
            <strong>d</strong> es el término independiente.
          </p>

          <table
            style={{
              marginTop: "20px",
              borderCollapse: "collapse",
              width: "100%",
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: "10px",
              overflow: "hidden",
              textAlign: "center",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <thead style={{ backgroundColor: "#f0f0f0" }}>
              <tr>
                <th style={{ padding: "10px", border: "1px solid #ccc" }}>
                  Polinomio
                </th>
                <th style={{ padding: "10px", border: "1px solid #ccc" }}>
                  Coeficientes
                </th>
                <th style={{ padding: "10px", border: "1px solid #ccc" }}>
                  Coef. Principal
                </th>
                <th style={{ padding: "10px", border: "1px solid #ccc" }}>
                  Término Independiente
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: "#fff3e0" }}>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  4x³ + 5x² - 7x + 2
                </td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  4, 5, -7, 2
                </td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>4</td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>2</td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  9x² + 5x³ - x² + 1
                </td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  5, 9, -1, 1
                </td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>5</td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>1</td>
              </tr>
              <tr style={{ backgroundColor: "#fff3e0" }}>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  4x² - 7x + 3
                </td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  4, -7, 3
                </td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>4</td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>3</td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  5x + 12
                </td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  5, 12
                </td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>5</td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  12
                </td>
              </tr>
              <tr style={{ backgroundColor: "#fff3e0" }}>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  x - 1
                </td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  1, -1
                </td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>1</td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  -1
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  2x³ + x² + 6x
                </td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  2, 1, 6
                </td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>2</td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    19: (
      <div className="secciones">
        <p>
          A continuación, ordena los valores del siguiente polinomio cúbico:
        </p>
        <DragDropPreguntaEnTexto
          textoConHuecos={[
            { tipo: "hueco", index: 0 },
            { tipo: "hueco", index: 1 },
            { tipo: "hueco", index: 2 },
            { tipo: "hueco", index: 3 }

          ]}
          correctas={[
            "4x³",   // opciones[0]
            "9x²",   // opciones[1]
            "7x ",   // opciones[2]
            "12"     // opciones[3]
          ]}
          opciones={[
            { id: "1", texto: "9x²" },
            { id: "2", texto: "12" },
            { id: "3", texto: "7x " },
            { id: "4", texto: "4x³" },
          ]}
          setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
        />
      </div>
    ),
     20: (
      <div className="secciones">
        <p>
          Selecciona el término que determina el grado del polinomio
        </p>
        <div className="quiz-identificar-contenedor">
          <IdentificarPalabra
            texto="2x³ + 3x² - 2"
            palabraClave={"2x³"}
            setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
          />
          <IdentificarPalabra
            texto=" -7x + x⁵  + 4x³ + 4"
            palabraClave={"x⁵"}
            setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
          />
          <IdentificarPalabra
            texto="7x³ - 12"
            palabraClave={"7x³"}
            setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
          />
          <IdentificarPalabra
            texto="6x + 3x³ - 8 + 2x⁵"
            palabraClave={"2x⁵"}
            setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
          />
        </div>
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
