import { motion, AnimatePresence } from "framer-motion";
import QuizGeometria from "../componentes-quiz/componente-para-geometria-y trigonometria";
import "../../App.css";


const EjerciciosGeometria = ({ seccion, setDeshabilitadoPrincipal }) => {
  const contenido = {
    0: (
      <div className="secciones">
        <p>
          Para comprender mejor los segmentos y ángulos en geometría, es
          necesario reconocer algunos elementos fundamentales.
        </p>
      </div>
    ),

    1: (
      <div className="secciones">
        <h3>Puntos</h3>
        <p>
          Los puntos son las marcas más pequeñas que se pueden dibujar. No
          tienen dimensiones (ni longitud, ni ancho, ni profundidad), solo
          indican una posición en el espacio.
        </p>
        <p>Se representan con letras mayúsculas:</p>
        <ul>
          <li>Punto A</li>
          <li>Punto B</li>
          <li>Punto C</li>
        </ul>
        <QuizGeometria
          pregunta="Observa la representación de los puntos A, B y C en el plano."
          elementos={[
            { tipo: "punto", nombre: "A", x: 60, y: 120, fill: "#4f8cff" },
            { tipo: "punto", nombre: "B", x: 160, y: 60, fill: "#ffad60" },
            { tipo: "punto", nombre: "C", x: 260, y: 180, fill: "#2e7d32" },
          ]}
          opciones={[]} // Sin opciones, solo visualización
          onRespuesta={() => {}} // No hace nada, solo visual
        />
      </div>
    ),

    2: (
      <div className="secciones">
        <h3>Recta</h3>
        <p>
          Una recta es una sucesión infinita de puntos en una misma dirección.
          Es la línea más delgada que se puede dibujar, manteniendo una
          dirección constante.
        </p>
        <p>La recta puede ser nombrada con letras:</p>
        <ul>
          <li>Recta A, B, C</li>
        </ul>
        <QuizGeometria
          pregunta="Observa la representación de la recta que pasa por los puntos A y B."
          elementos={[
            { tipo: "punto", nombre: "A", x: 60, y: 120, fill: "#4f8cff" },
            { tipo: "punto", nombre: "B", x: 260, y: 180, fill: "#ffad60" },
            {
              tipo: "segmento",
              inicio: "A",
              fin: "B",
              stroke: "#fff",
              strokeWidth: 3,
              extendido: true,
            },
          ]}
          opciones={[]}
          onRespuesta={() => {}}
        />
      </div>
    ),

    3: (
      <div className="secciones">
        <h3>Segmento</h3>
        <p>
          Un segmento es una parte de una recta delimitada por dos puntos
          llamados extremos.
        </p>
        <p>Ejemplo: Segmento de extremos A y B.</p>
        <p>Notación:</p>
        <ul>
          <li>El segmento se denota como: AB (con una línea arriba).</li>
          <li>Su longitud se representa como: AB o l.</li>
        </ul>
        <QuizGeometria
          pregunta="Observa la representación de la recta que pasa por los puntos A y B."
          elementos={[
            { tipo: "punto", nombre: "A", x: 60, y: 120, fill: "#4f8cff" },
            { tipo: "punto", nombre: "B", x: 260, y: 180, fill: "#ffad60" },
            {
              tipo: "recta",
              inicio: "A",
              fin: "B",
              stroke: "#fff",
              strokeWidth: 3,
            },
          ]}
          opciones={[]}
          onRespuesta={() => {}}
        />
      </div>
    ),

    4: (
      <div className="secciones">
        <h3>Punto medio de un segmento</h3>
        <p>
          El punto medio de un segmento es el punto que divide al segmento en
          dos partes iguales.
        </p>
        <p>Ejemplo: Dado el segmento AB, el punto medio se denota como M.</p>
        <QuizGeometria
          pregunta="Observa el segmento AB y su punto medio M."
          elementos={[
            { tipo: "punto", nombre: "A", x: 100, y: 120, fill: "#4f8cff" },
            { tipo: "punto", nombre: "B", x: 250, y: 120, fill: "#ffad60" },
            {
              tipo: "segmento",
              inicio: "A",
              fin: "B",
              stroke: "#4f8cff",
              strokeWidth: 4,
            },
            { tipo: "punto", nombre: "M", x: 175, y: 120, fill: "#2e7d32" },
          ]}
          opciones={[]}
          onRespuesta={() => {}}
        />
      </div>
    ),

    5: (
      <div className="secciones">
        <h3>Punto medio</h3>
        <p>
          El punto medio es útil para determinar distancias equidistantes en
          figuras geométricas, realizar construcciones precisas y resolver
          problemas de simetría.
        </p>
        <p>Ejemplo práctico: Segmento dividido en 2 partes iguales M.</p>
        <QuizGeometria
          pregunta="Observa el segmento AB y su punto medio M."
          elementos={[
            { tipo: "punto", nombre: "A", x: 100, y: 120, fill: "#4f8cff" },
            { tipo: "punto", nombre: "B", x: 250, y: 120, fill: "#ffad60" },
            {
              tipo: "segmento",
              inicio: "A",
              fin: "B",
              stroke: "#4f8cff",
              strokeWidth: 4,
            },
            { tipo: "punto", nombre: "M", x: 175, y: 120, fill: "#2e7d32" },
          ]}
          opciones={[]}
          onRespuesta={() => {}}
        />
      </div>
    ),

    6: (
      <div className="secciones">
        <p>Hagamos un ejercicio como repaso:</p>
        <p>Si M es punto medio de la recta A y B, determine el valor de K</p>
        <QuizGeometria
          pregunta="Observa el segmento AB y su punto medio M."
          elementos={[
            /*Segmento 1 */
            {
              textoLibre: "2K",
              textoLibreX: 125, // posición X
              textoLibreY: 95, // posición Y
              textoLibreColor: "#ffd600", // color opcional
              textoLibreSize: 16, // tamaño opcional
              textoLibreStyle: "400", // estilo opcional
            },
            {
              textoLibre: "16",
              textoLibreX: 210, // posición X
              textoLibreY: 95, // posición Y
              textoLibreColor: "#ffd600", // color opcional
              textoLibreSize: 16, // tamaño opcional
              textoLibreStyle: "400", // estilo opcional
            },
            {
              tipo: "punto",
              nombre: "A",
              x: 100,
              y: 120,
              fill: "#4f8cff",
            },
            {
              tipo: "punto",
              nombre: "B",
              x: 250,
              y: 120,
              fill: "#ffad60",
            },
            {
              tipo: "punto",
              nombre: "M",
              x: 175,
              y: 120,
              fill: "#2e7d32",
            },
            {
              tipo: "segmento",
              inicio: "A",
              fin: "B",
              stroke: "#4f8cff",
              strokeWidth: 4,
            },
          ]}
          opciones={["8", "6", "4", "2"]}
          respuestaCorrecta="8" // <-- aquí defines la correcta
          onRespuesta={(opcionSeleccionada) => {
            if (opcionSeleccionada === "8") {
              setDeshabilitadoPrincipal(false);
            } else {
              setDeshabilitadoPrincipal(true);
            }
          }}
          setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
        />
      </div>
    ),
    7: (
      <div className="secciones">
        <p>Del siguiente segmento, determine el valor de K</p>
        <QuizGeometria
          pregunta="Observa el segmento AB y su punto medio M."
          elementos={[
            {
              textoLibre: "2K",
              textoLibreX: 125, // posición X
              textoLibreY: 95, // posición Y
              textoLibreColor: "#ffd600", // color opcional
              textoLibreSize: 16, // tamaño opcional
              textoLibreStyle: "400", // estilo opcional
            },
            {
              textoLibre: "16",
              textoLibreX: 210, // posición X
              textoLibreY: 95, // posición Y
              textoLibreColor: "#ffd600", // color opcional
              textoLibreSize: 16, // tamaño opcional
              textoLibreStyle: "400", // estilo opcional
            },
            {
              textoLibre: "24",
              textoLibreX: 170, // posición X
              textoLibreY: 45, // posición Y
              textoLibreColor: "#ffd600", // color opcional
              textoLibreSize: 16, // tamaño opcional
              textoLibreStyle: "400", // estilo opcional
            },
            {
              tipo: "punto",
              nombre: "A",
              x: 100,
              y: 120,
              fill: "#4f8cff",
            },
            {
              tipo: "punto",
              nombre: "B",
              x: 250,
              y: 120,
              fill: "#ffad60",
            },
            {
              tipo: "punto",
              nombre: "M",
              x: 175,
              y: 120,
              fill: "#2e7d32",
            },
            {
              tipo: "segmento",
              inicio: "A",
              fin: "B",
              stroke: "#4f8cff",
              strokeWidth: 4,
            },
            // Segmento 2
            {
              tipo: "punto",
              nombre: "A",
              x: 100,
              y: 70,
              fill: "#4f8cff",
            },
            {
              tipo: "punto",
              nombre: "B",
              x: 250,
              y: 70,
              fill: "#ffad60",
            },
            {
              tipo: "segmento",
              inicio: "A",
              fin: "B",
              stroke: "#4f8cff",
              strokeWidth: 4,
            },
          ]}
          opciones={["15", "12", "9", "10"]}
          respuestaCorrecta="12" // <-- aquí defines la correcta
          onRespuesta={(opcionSeleccionada) => {
            if (opcionSeleccionada === "12") {
              setDeshabilitadoPrincipal(false);
            } else {
              setDeshabilitadoPrincipal(true);
            }
          }}
          setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
        />
      </div>
    ),

    8: (
      <div className="secciones">
        <p>
          Antes de comprender qué es un ángulo, aún hay que comprender más
          elementos geométricos, a continuación, los presentaremos.
        </p>
      </div>
    ),

    9: (
      <div className="secciones">
        <h3>Rayo</h3>
        <p>
          Es cada una de las dos partes en que queda dividida una recta al ser
          cortada en cualquier punto.
        </p>
        <p>Ejemplo práctico:</p>
        <ul>
          <li>Una recta dividida en 2 con punto medio O.</li>
          <li>Dos rectas divididas en O.</li>
        </ul>
        <p>Notación rayo OA: OA rayita | rayo OB: OB rayita.</p>
        <QuizGeometria
          pregunta="Observa el rayo OA."
          elementos={[
            { tipo: "punto", nombre: "O", x: 100, y: 120, fill: "#fff" },
            { tipo: "punto", nombre: "A", x: 250, y: 120, fill: "#4f8cff" },
            {
              tipo: "rayo",
              inicio: "O",
              fin: "A",
              stroke: "#4f8cff",
              strokeWidth: 4,
            },
          ]}
          opciones={[]}
          onRespuesta={() => {}}
        />
      </div>
    ),

    10: (
      <div className="secciones">
        <h3>Ángulo</h3>
        <p>
          Es la figura geométrica formada por dos rayos que tienen el mismo
          origen y que no son colineales.
        </p>
        <p>Ejemplo práctico: Imagen de un ángulo y su notación respectiva.</p>
        <QuizGeometria
          pregunta="Observa el ángulo AÔB."
          elementos={[
            { tipo: "punto", nombre: "O", x: 150, y: 120, fill: "#fff" },
            { tipo: "punto", nombre: "A", x: 100, y: 180, fill: "#4f8cff" },
            { tipo: "punto", nombre: "B", x: 220, y: 80, fill: "#ffad60" },
            {
              tipo: "angulo",
              vertice: "O",
              lado1: "A",
              lado2: "B",
              stroke: "#4f8cff",
              strokeWidth: 3,
              arcStroke: "#ffad60",
              arcRadius: 32,
            },
          ]}
          opciones={[]}
          onRespuesta={() => {}}
        />
      </div>
    ),

    11: (
      <div className="secciones">
        <p>He aquí los elementos del ángulo anteriormente mostrado.</p>
        <p>Ejemplo práctico: Imagen de un ángulo detallado.</p>
        <QuizGeometria
          pregunta="Elementos del ángulo: vértice, lados y arco."
          elementos={[
            // Puntos
            {
              tipo: "punto",
              nombre: "O",
              x: 150,
              y: 120,
              fill: "#fff",
              etiqueta: "Vértice O",
            },
            {
              tipo: "punto",
              nombre: "A",
              x: 100,
              y: 180,
              fill: "#4f8cff",
              etiqueta: "Lado OA",
            },
            {
              tipo: "punto",
              nombre: "B",
              x: 220,
              y: 80,
              fill: "#ffad60",
              etiqueta: "Lado OB",
            },
            // Ángulo con arco y etiqueta
            {
              tipo: "angulo",
              vertice: "O",
              lado1: "A",
              lado2: "B",
              stroke: "#4f8cff",
              strokeWidth: 3,
              arcStroke: "#ffad60",
              arcRadius: 32,
              etiqueta: "Arco",
            },
          ]}
          opciones={[]}
          onRespuesta={() => {}}
        />
      </div>
    ),

    12: (
      <div className="secciones">
        <h3>Bisectriz de un ángulo</h3>
        <p>Es aquel rayo que divide al ángulo.</p>
        <QuizGeometria
          pregunta="Observa la bisectriz del ángulo AÔB."
          elementos={[
            { tipo: "punto", nombre: "O", x: 150, y: 120, fill: "#fff" },
            { tipo: "punto", nombre: "A", x: 100, y: 180, fill: "#4f8cff" },
            { tipo: "punto", nombre: "B", x: 220, y: 80, fill: "#ffad60" },
            {
              tipo: "angulo",
              vertice: "O",
              lado1: "A",
              lado2: "B",
              stroke: "#4f8cff",
              arcStroke: "#ffad60",
              arcRadius: 32,
            },
            {
              tipo: "bisectriz",
              vertice: "O",
              lado1: "A",
              lado2: "B",
              stroke: "#ffd600",
              etiqueta: "Bisectriz",
            },
          ]}
          opciones={[]}
          onRespuesta={() => {}}
        />
      </div>
    ),

    13: (
      <div className="secciones">
        <h3>Clasificación de los ángulos | Medida regular</h3>
        <ul>
          <li>
            <b>Ángulo Agudo:</b> mide entre 0° y menos de 90°
            <QuizGeometria
              pregunta=""
              elementos={[
                {
                  tipo: "punto",
                  nombre: "O",
                  x: 30,
                  y: 30,
                  fill: "#fff",
                },
                {
                  tipo: "punto",
                  nombre: "A",
                  x: 30,
                  y: 110,
                  fill: "#4f8cff",
                },
                {
                  tipo: "punto",
                  nombre: "B",
                  x: 110,
                  y: 80,
                  fill: "#ffad60",
                },
                {
                  tipo: "angulo",
                  vertice: "O",
                  lado1: "A",
                  lado2: "B",
                  stroke: "#4f8cff",
                  strokeWidth: 3,
                  arcStroke: "#ffad60",
                  arcRadius: 22,
                  etiqueta: "Agudo",
                },
              ]}
              opciones={[]}
              onRespuesta={() => {}}
            />
          </li>
          <li>
            <b>Ángulo Recto:</b> mide 90°
            <QuizGeometria
              pregunta=""
              elementos={[
                {
                  tipo: "punto",
                  nombre: "90°",
                  x: 60,
                  y: 60,
                  fill: "#fff",
                  offsetX: 20,
                  offsetY: 20,
                },
                {
                  tipo: "punto",
                  nombre: "A",
                  x: 60,
                  y: 120,
                  fill: "#4f8cff",
                },
                {
                  tipo: "punto",
                  nombre: "B",
                  x: 150,
                  y: 60,
                  fill: "#ffad60",
                },
                {
                  tipo: "angulo",
                  vertice: "90°",
                  lado1: "A",
                  lado2: "B",
                  stroke: "#4f8cff",
                  strokeWidth: 3,
                  arcStroke: "#ffad60",
                  arcRadius: 22,
                  etiqueta: "Recto",
                },
              ]}
              opciones={[]}
              onRespuesta={() => {}}
            />
          </li>
          <li>
            <b>Ángulo Obtuso:</b> mide más de 90° pero menos que 180°
            <QuizGeometria
              pregunta=""
              elementos={[
                { tipo: "punto", nombre: "O", x: 60, y: 60, fill: "#fff" },
                { tipo: "punto", nombre: "A", x: 10, y: 110, fill: "#4f8cff" },
                { tipo: "punto", nombre: "B", x: 110, y: 80, fill: "#ffad60" },
                {
                  tipo: "angulo",
                  vertice: "O",
                  lado1: "A",
                  lado2: "B",
                  stroke: "#4f8cff",
                  strokeWidth: 3,
                  arcStroke: "#ffad60",
                  arcRadius: 22,
                  etiqueta: "Obtuso",
                },
              ]}
              opciones={[]}
              onRespuesta={() => {}}
            />
          </li>
        </ul>
      </div>
    ),

    14: (
      <div className="secciones">
        <p>
          De lo mencionado anteriormente ¿Qué tipo de ángulo es el siguiente?
        </p>
        <QuizGeometria
          pregunta=""
          elementos={[
            // Puntos
            {
              tipo: "punto",
              nombre: "37°",
              x: 120,
              y: 120,
              fill: "#fff",
              offsetX: 30,
              offsetY: -25,
            },
            { tipo: "punto", nombre: "A", x: 200, y: 120, fill: "#4f8cff" },
            { tipo: "punto", nombre: "B", x: 160, y: 50, fill: "#ffad60" },
            // Ángulo agudo
            {
              tipo: "angulo",
              vertice: "37°",
              lado1: "A",
              lado2: "B",
              stroke: "#4f8cff",
              strokeWidth: 3,
              arcStroke: "#ffd600",
              arcRadius: 28,
            },
          ]}
          opciones={[
            "Ángulo Agudo",
            "Ángulo Recto",
            "Ángulo Obtuso",
            "Ángulo Llano",
          ]}
          respuestaCorrecta="Ángulo Agudo"
          onRespuesta={(opcionSeleccionada) => {
            if (opcionSeleccionada === "Ángulo Agudo") {
              setDeshabilitadoPrincipal(false);
            } else {
              setDeshabilitadoPrincipal(true);
            }
          }}
          setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
        />
      </div>
    ),

    15: (
      <div className="secciones">
        <p>Si un ángulo mide 135°, ¿Qué tipo de ángulo es?</p>
        <QuizGeometria
          pregunta=""
          elementos={[
            // Puntos
            {
              tipo: "punto",
              nombre: "135°",
              x: 120,
              y: 120,
              fill: "#fff",
              offsetX: 0,
              offsetY: 35,
            },
            { tipo: "punto", nombre: "A", x: 60, y: 180, fill: "#4f8cff" },
            { tipo: "punto", nombre: "B", x: 200, y: 120, fill: "#ffad60" },
            // Ángulo obtuso (135°)
            {
              tipo: "angulo",
              vertice: "135°",
              lado1: "A",
              lado2: "B",
              stroke: "#4f8cff",
              strokeWidth: 3,
              arcStroke: "#ffd600",
              arcRadius: 32,
            },
          ]}
          opciones={[
            "Ángulo Agudo",
            "Ángulo Recto",
            "Ángulo Obtuso",
            "Ángulo Llano",
          ]}
          respuestaCorrecta="Ángulo Obtuso"
          onRespuesta={(opcionSeleccionada) => {
            if (opcionSeleccionada === "Ángulo Obtuso") {
              setDeshabilitadoPrincipal(false);
            } else {
              setDeshabilitadoPrincipal(true);
            }
          }}
          setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
        />
      </div>
    ),

    16: (
      <div className="secciones">
        <p>
          Si el siguiente ángulo le formamos una bisectriz, ¿Cuál será la medida
          del ángulo formado?
        </p>
        <QuizGeometria
          pregunta=""
          elementos={[
            // Puntos
            {
              tipo: "punto",
              nombre: "60°",
              x: 120,
              y: 120,
              fill: "#fff",
              offsetX: 0,
              offsetY: 40,
            },
            { tipo: "punto", nombre: "A", x: 60, y: 180, fill: "#4f8cff" },
            { tipo: "punto", nombre: "B", x: 200, y: 120, fill: "#ffad60" },
            // Ángulo recto
            {
              tipo: "angulo",
              vertice: "60°",
              lado1: "A",
              lado2: "B",
              stroke: "#4f8cff",
              strokeWidth: 3,
              arcStroke: "#ffd600",
              arcRadius: 32,
            },
            // Bisectriz
            {
              tipo: "bisectriz",
              vertice: "O",
              lado1: "A",
              lado2: "B",
              stroke: "#ffd600",
              etiqueta: "Bisectriz",
            },
          ]}
          opciones={["45", "30", "53", "37"]}
          respuestaCorrecta="30"
          onRespuesta={(opcionSeleccionada) => {
            if (opcionSeleccionada === "30") {
              setDeshabilitadoPrincipal(false);
            } else {
              setDeshabilitadoPrincipal(true);
            }
          }}
          setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
        />
      </div>
    ),

    17: (
      <div className="secciones">
        <p>¿Qué tipo de ángulo es el siguiente?</p>
        <QuizGeometria
          pregunta=""
          elementos={[
            // Puntos
            { tipo: "punto", nombre: "15°", x: 120, y: 120, fill: "#fff", offsetX: 30, offsetY: -25 },
            { tipo: "punto", nombre: "A", x: 200, y: 120, fill: "#4f8cff" },
            { tipo: "punto", nombre: "B", x: 150, y: 30, fill: "#ffad60" },
            // Ángulo de 15°
            {
              tipo: "angulo",
              vertice: "15°",
              lado1: "A",
              lado2: "B",
              stroke: "#4f8cff",
              strokeWidth: 3,
              arcStroke: "#ffd600",
              arcRadius: 28,
            },
          ]}
          opciones={[
            "Ángulo Agudo",
            "Ángulo Recto",
            "Ángulo Obtuso",
            "Ángulo Llano",
          ]}
          respuestaCorrecta="Ángulo Agudo"
          onRespuesta={(opcionSeleccionada) => {
            if (opcionSeleccionada === "Ángulo Agudo") {
              setDeshabilitadoPrincipal(false);
            } else {
              setDeshabilitadoPrincipal(true);
            }
          }}
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
        className="seccion-ejercicios-geometria"
      >
        {contenido[seccion] || <p>Contenido no disponible.</p>}
      </motion.div>
    </AnimatePresence>
  );
};

export default EjerciciosGeometria;
