import EjerciciosTrigonometria from "./ejercicios-trigonometria/componente-1-trigonometria";
import PantallaDeEjercicios from "./componentes-principales";

function Trigonometria() {
  return (
    <div className="contenedor-trigonometria">
      <PantallaDeEjercicios
        EjerciciosComponent={EjerciciosTrigonometria}
        seccionesConValidacion={[]}
      />
    </div>
  );
}

export default Trigonometria;