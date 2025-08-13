import EjerciciosGeometria from "./ejercicios-geometria/componente-1-geometria";
import PantallaDeEjercicios from "./componentes-principales";

function Geometria() {
  return (
    <div className="contenedor-geometria">
      <PantallaDeEjercicios
        EjerciciosComponent={({ seccion, setDeshabilitadoPrincipal }) => (
          <EjerciciosGeometria
            seccion={seccion}
            setDeshabilitadoPrincipal={setDeshabilitadoPrincipal}
          />
        )}
        seccionesConValidacion={[]}
        totalSecciones={17} // <-- pásalo aquí
      />
    </div>
  );
}

export default Geometria;
