import { Circle, Line, Text, Arrow } from "react-konva";

const LienzoGeometria = ({ elementos, setDeshabilitadoPrincipal }) => {
  const puntos = {};

  return elementos.map((e, i) => {
    if (e.textoLibre) {
      return (
        <Text
          key={`texto-libre-${i}`}
          x={e.textoLibreX || 30}
          y={e.textoLibreY || 30}
          text={e.textoLibre}
          fontSize={e.textoLibreSize || 18}
          fill={e.textoLibreColor || "#fff"}
          fontStyle={e.textoLibreStyle || "bold"}
        />
      );
    }
    switch (e.tipo) {
      case "punto":
        puntos[e.nombre] = { x: e.x, y: e.y };
        return (
          <>
            <Circle
              key={`punto-${i}`}
              x={e.x}
              y={e.y}
              radius={e.radius || 6}
              fill={e.fill || "black"}
              onClick={() =>
                setDeshabilitadoPrincipal && setDeshabilitadoPrincipal(false)
              }
            />
            <Text
              key={`texto-${i}`}
              x={e.x + (e.offsetX || 8)}
              y={e.y + (e.offsetY || 15)}
              text={e.nombre}
              fontSize={14}
              fill={e.textColor || "#fff"}
            />
            {e.etiqueta && (
              <Text
                key={`etiqueta-punto-${i}`}
                x={e.x + (e.offsetX || 10)}
                y={e.y + (e.offsetY || -18)}
                text={e.etiqueta}
                fontSize={13}
                fill="#ffd600"
                fontStyle="bold"
              />
            )}
          </>
        );

      case "segmento": {
        const pi = puntos[e.inicio];
        const pf = puntos[e.fin];
        if (!pi || !pf) return null;
        return (
          <>
            <Line
              key={`segmento-${i}`}
              points={[pi.x, pi.y, pf.x, pf.y]}
              stroke={e.stroke || "blue"}
              strokeWidth={e.strokeWidth || 2}
            />
            {e.etiqueta && (
              <Text
                key={`etiqueta-segmento-${i}`}
                x={(pi.x + pf.x) / 2 - 20}
                y={(pi.y + pf.y) / 2 - 25}
                text={e.etiqueta}
                fontSize={13}
                fill="#ffd600"
                fontStyle="bold"
              />
            )}
          </>
        );
      }

      case "recta": {
        const p1 = puntos[e.inicio];
        const p2 = puntos[e.fin];
        if (!p1 || !p2) return null;
        return (
          <>
            <Arrow
              key={`recta-${i}`}
              points={[p1.x, p1.y, p2.x, p2.y]}
              stroke={e.stroke || "purple"}
              strokeWidth={e.strokeWidth || 2}
              pointerLength={12}
              pointerWidth={12}
              fill={e.stroke || "purple"}
              pointerAtBeginning={true}
              pointerAtEnding={true}
            />
            {e.etiqueta && (
              <Text
                key={`etiqueta-recta-${i}`}
                x={(p1.x + p2.x) / 2 - 20}
                y={(p1.y + p2.y) / 2 - 30}
                text={e.etiqueta}
                fontSize={13}
                fill="#ffd600"
                fontStyle="bold"
              />
            )}
          </>
        );
      }

      case "rayo": {
        const pi = puntos[e.inicio];
        const pf = puntos[e.fin];
        if (!pi || !pf) return null;
        return (
          <>
            <Arrow
              key={`rayo-${i}`}
              points={[pi.x, pi.y, pf.x, pf.y]}
              stroke={e.stroke || "#4f8cff"}
              strokeWidth={e.strokeWidth || 3}
              pointerLength={12}
              pointerWidth={12}
              fill={e.stroke || "#4f8cff"}
              pointerAtBeginning={false}
              pointerAtEnding={true}
            />
            {e.etiqueta && (
              <Text
                key={`etiqueta-rayo-${i}`}
                x={(pi.x + pf.x) / 2 - 20}
                y={(pi.y + pf.y) / 2 - 30}
                text={e.etiqueta}
                fontSize={13}
                fill="#ffd600"
                fontStyle="bold"
              />
            )}
          </>
        );
      }

      case "angulo": {
        const v = puntos[e.vertice];
        const p1 = puntos[e.lado1];
        const p2 = puntos[e.lado2];
        if (!v || !p1 || !p2) return null;

        const rayo1 = (
          <Arrow
            key={`angulo-rayo1-${i}`}
            points={[v.x, v.y, p1.x, p1.y]}
            stroke={e.stroke || "#fff"}
            strokeWidth={e.strokeWidth || 3}
            pointerLength={10}
            pointerWidth={10}
            fill={e.stroke || "#fff"}
            pointerAtBeginning={false}
            pointerAtEnding={true}
          />
        );
        const rayo2 = (
          <Arrow
            key={`angulo-rayo2-${i}`}
            points={[v.x, v.y, p2.x, p2.y]}
            stroke={e.stroke || "#fff"}
            strokeWidth={e.strokeWidth || 3}
            pointerLength={10}
            pointerWidth={10}
            fill={e.stroke || "#fff"}
            pointerAtBeginning={false}
            pointerAtEnding={true}
          />
        );

        // Arco del ángulo
        const angle1 = Math.atan2(p1.y - v.y, p1.x - v.x);
        const angle2 = Math.atan2(p2.y - v.y, p2.x - v.x);
        const startAngle = Math.min(angle1, angle2);
        const endAngle = Math.max(angle1, angle2);
        const arcRadius = e.arcRadius || 28;

        const arc = (
          <Line
            key={`angulo-arco-${i}`}
            x={v.x}
            y={v.y}
            points={Array.from({ length: 20 }, (_, j) => {
              const t = startAngle + (endAngle - startAngle) * (j / 19);
              return [Math.cos(t) * arcRadius, Math.sin(t) * arcRadius];
            }).flat()}
            stroke={e.arcStroke || "#ffad60"}
            strokeWidth={2}
            tension={0.5}
            lineCap="round"
            lineJoin="round"
          />
        );

        return [
          rayo1,
          rayo2,
          arc,
          e.etiqueta && (
            <Text
              key={`etiqueta-angulo-${i}`}
              x={v.x + arcRadius + 10}
              y={v.y - 10}
              text={e.etiqueta}
              fontSize={13}
              fill="#ffd600"
              fontStyle="bold"
            />
          ),
        ];
      }

      case "bisectriz": {
        // Dibuja la bisectriz de un ángulo definido por vértice, lado1 y lado2
        const v = puntos[e.vertice];
        const p1 = puntos[e.lado1];
        const p2 = puntos[e.lado2];
        if (!v || !p1 || !p2) return null;

        // Vectores desde el vértice a cada lado
        const v1 = { x: p1.x - v.x, y: p1.y - v.y };
        const v2 = { x: p2.x - v.x, y: p2.y - v.y };
        // Normaliza ambos
        const norm1 = Math.sqrt(v1.x * v1.x + v1.y * v1.y);
        const norm2 = Math.sqrt(v2.x * v2.x + v2.y * v2.y);
        const u1 = { x: v1.x / norm1, y: v1.y / norm1 };
        const u2 = { x: v2.x / norm2, y: v2.y / norm2 };
        // Vector bisectriz (suma y normaliza)
        const bis = { x: u1.x + u2.x, y: u1.y + u2.y };
        const normBis = Math.sqrt(bis.x * bis.x + bis.y * bis.y);
        const uBis = { x: bis.x / normBis, y: bis.y / normBis };
        // Punto final de la bisectriz
        const longitud = e.longitud || 60;
        const bx = v.x + uBis.x * longitud;
        const by = v.y + uBis.y * longitud;

        return (
          <>
            <Arrow
              key={`bisectriz-${i}`}
              points={[v.x, v.y, bx, by]}
              stroke={e.stroke || "#ffd600"}
              strokeWidth={e.strokeWidth || 3}
              pointerLength={12}
              pointerWidth={12}
              fill={e.stroke || "#ffd600"}
              pointerAtBeginning={false}
              pointerAtEnding={true}
            />
            {e.etiqueta && (
              <Text
                key={`etiqueta-bisectriz-${i}`}
                x={bx + 8}
                y={by - 8}
                text={e.etiqueta}
                fontSize={13}
                fill={e.stroke || "#ffd600"}
                fontStyle="bold"
              />
            )}
          </>
        );
      }

      // ...otros casos...
      default:
        return null;
    }
  });
};

export default LienzoGeometria;
