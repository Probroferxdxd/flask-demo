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
        seccionesConValidacion={[6, 7, 14, 15, 16, 17]}
        totalSecciones={17} // <-- pásalo aquí
      />
    </div>
  );
}

export default Geometria;
