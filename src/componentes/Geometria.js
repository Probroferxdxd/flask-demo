import EjerciciosGeometria from "./ejercicios-geometria/componente-1-geometria";
import PantallaDeEjercicios from "./componentes-principales";

function Geometria() {
  return (
    <div className="contenedor-geometria">
      <PantallaDeEjercicios
        EjerciciosComponent={EjerciciosGeometria}
        seccionesConValidacion={[]}
      />
    </div>
  );
}

export default Geometria;