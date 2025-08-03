import EjerciciosAlgebra from "./ejercicios-algebra/componente-1-algebra";
import PantallaDeEjercicios from "./componentes-principales";


function Algebra() {
  return (
    <div className="contenedor-algebra">
      <PantallaDeEjercicios
        EjerciciosComponent={EjerciciosAlgebra}
        seccionesConValidacion={[]}
      />
    </div>
  );
}

export default Algebra;