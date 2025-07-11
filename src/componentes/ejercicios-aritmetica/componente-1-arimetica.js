import { motion, AnimatePresence} from "framer-motion";
import Quiosco from "./quiosco.png";
import Deuda from "./pedir-prestado.png";
import ContenedorBotones from "../componentes-quiz/componente-botones";
import "../../App.css";

const EjerciciosAritmetica = ({ seccion, setDeshabilitadoPrincipal }) => {
  const TablaGolosinas = () => {
    const tablaStyle = {
      width: "100%",
      margin: "0 auto",
      borderCollapse: "collapse",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      background: "#fff",
      borderRadius: "10px",
      overflow: "hidden",
      transform: "translateY(-90px)",
    };

    const thStyle = {
      padding: "15px",
      backgroundColor: "#ffad60",
      color: "white",
      fontSize: "1.1em",
      textAlign: "center",
    };

    const tdStyle = {
      padding: "15px",
      textAlign: "center",
      color: "black",
    };

    const precioStyle = {
      ...tdStyle,
      fontWeight: "bold",
      color: "#2e7d32",
    };

    const filaPar = { backgroundColor: "#fff3e0" };

    const golosinas = [
      {
        producto: "Chocolatina",
        descripcion: "Chocolate con leche relleno de maní",
        precio: "$1.00",
      },
      {
        producto: "Gomitas",
        descripcion: "Bolsa surtida de sabores frutales",
        precio: "$0.75",
      },
      {
        producto: "Caramelos",
        descripcion: "Caramelos duros de menta y fresa",
        precio: "$0.50",
      },
      {
        producto: "Paleta",
        descripcion: "Paleta de caramelo con centro de chicle",
        precio: "$0.60",
      },
      {
        producto: "Chicles",
        descripcion: "Paquete de 5 unidades sabor menta",
        precio: "$0.40",
      },
    ];

    return (
      <div className="contenedor-tabla" style={{ transform: "scale(0.7)" }}>
        <table style={tablaStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Producto</th>
              <th style={thStyle}>Descripción</th>
              <th style={thStyle}>Precio</th>
            </tr>
          </thead>
          <tbody>
            {golosinas.map((item, index) => (
              <tr key={index} style={index % 2 === 0 ? filaPar : {}}>
                <td style={tdStyle}>{item.producto}</td>
                <td style={tdStyle}>{item.descripcion}</td>
                <td style={precioStyle}>{item.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const contenido = {
    0: (
      <div className="secciones">
        <p>
          Si pudieras percatarte en Innova School, hay estudiantes que
          observaron la necesidad de vender golosinas, snaks, o hasta incluso
          postres riquisimos debido a la limitada lista en los quioscos de la
          institución y a los antojos de sus compañeros.
        </p>
        <img src={Quiosco} alt="Quiosco"/>
      </div>
    ),
    1: (
      <div className="secciones">
        <p>
          Sin embargo, como a veces la gente no lleva dinero, suelen fiar al
          vendedor para saciar su antojo o hambre. El vendedor para asegurarse
          que le paguen el fiado, empieza a cobrar intereses.
        </p>
        <img src={Deuda} alt="Deuda" />
      </div>
    ),
    2: (
      <div className="secciones">
        <p>
          Es por ello que se aplica el <strong>interés simple</strong>, una
          forma para calcular el monto a pagar considerando el dinero prestado y
          el interés acumulado.
        </p>
      </div>
    ),
    3: (
      <div className="secciones">
        <p>
          Antes de visualizar un caso, debemos de conocer algunos conceptos y
          términos que nos ayudara a comprender mejor el tema.
        </p>
        <div className="seccion-ejercicios-formulas">
          <p>
            Capital: <b>C</b>
          </p>
          <p>
            Tiempo: <b>t</b>
          </p>
          <p>
            Tasa de interés: <b>r%</b>
          </p>
          <p>
            Monto: <b>M</b>
          </p>
        </div>
      </div>
    ),
    4: (
      <div className="secciones">
        <p>
          Imagina que tienes tu negocio de golosinas en el colegio y este es tu
          inventario.
        </p>
        <TablaGolosinas />
      </div>
    ),
    5: (
      <div className="secciones">
        <p>
          Un compañero tuyo te pide una gran cantidad de golosinas para un
          compartir en el aula
        </p>
        <ul style={{ textAlign: "left" }}>
          <li>15 paquetes de Cholocatina (15$)</li>
          <li>40 paquetes de gomitas (30$)</li>
          <li>50 caramelos (25$)</li>
        </ul>
      </div>
    ),
    6: (
      <div className="secciones">
        <p>¿Cuánto seria el monto total que el compañero te debe?</p>
        <ul style={{ textAlign: "left", scale: "0.8" }}>
          <li>15 paquetes de Cholocatina (15$)</li>
          <li>40 paquetes de gomitas (30$)</li>
          <li>50 caramelos (25$)</li>
        </ul>
        <ContenedorBotones
          opcion1="90$"
          opcion2="75$"
          opcion3="70$"
          opcion4="60$"
          opcionCorrecta={3}
          setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
        />
      </div>
    ),
    7: (
      <div className="secciones">
        <p>
          Al no tener dinero a la mano, dice que te pagará otro día. Es aqui
          donde aplicamos las reglas del interés simple
        </p>
        <h3>Paso 1</h3>
        <p>
          El monto total obtenido en el anterior ejercicio se vuelve el{" "}
          <b>Capital</b>
        </p>
        <p>
          La <b>tasa de interés</b> es una fracción del capital que queremos
          recibir en un periodo de tiempo escrito en porcentaje, en nuestro
          caso, podemos tomar el 10% del Capital (7$) como valor para la tasa de
          interés
        </p>
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
        <p>Jéniffer deposita $20 000 en una entidad financiera durante 3 años a una tasa del 12,5% semestral. Calcula el tiempo</p>
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

export default EjerciciosAritmetica;
