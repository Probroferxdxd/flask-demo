import { Circle, Line, Text } from "react-konva";

// Componente reutilizable para representar puntos, segmentos, círculos, etc.
const LienzoGeometria = ({ elementos }) => {
  const puntos = {};

  return elementos.map((e, i) => {
    switch (e.tipo) {
      case "punto":
        puntos[e.nombre] = { x: e.x, y: e.y };
        return (
          <>
            <Circle key={`punto-${i}`} x={e.x} y={e.y} radius={e.radius || 6} fill={e.fill || "black"} />
            <Text key={`texto-${i}`} x={e.x + 8} y={e.y - 15} text={e.nombre} fontSize={14} fill="#000" />
          </>
        );

      case "segmento":
        const pi = puntos[e.inicio];
        const pf = puntos[e.fin];
        if (!pi || !pf) return null;
        return (
          <Line
            key={`segmento-${i}`}
            points={[pi.x, pi.y, pf.x, pf.y]}
            stroke={e.stroke || "blue"}
            strokeWidth={e.strokeWidth || 2}
          />
        );

      case "circulo":
        const centro = puntos[e.centro];
        if (!centro) return null;
        return (
          <Circle
            key={`circulo-${i}`}
            x={centro.x}
            y={centro.y}
            radius={e.radio}
            stroke={e.stroke || "red"}
            strokeWidth={e.strokeWidth || 2}
          />
        );

      default:
        return null;
    }
  });
};

export default LienzoGeometria;