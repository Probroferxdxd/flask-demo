import EjerciciosAritmetica from "./ejercicios-aritmetica/componente-1-arimetica";
import PantallaDeEjercicios from "./componentes-principales";
import "./aritmetica.css"; // Importar el CSS específico para Aritmética

function Aritmetica() {
  return (
    <div className="contenedor-aritmetica">
      <PantallaDeEjercicios
        EjerciciosComponent={EjerciciosAritmetica}
        seccionesConValidacion={[6, 9, 10, 12, 14]}
      />
    </div>
  );
}

export default Aritmetica;
