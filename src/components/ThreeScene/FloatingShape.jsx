import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { AdaptiveDpr } from "@react-three/drei";
import * as THREE from "three";
import { useMousePosition } from "../../hooks/useMousePosition";

const COLORS = {
  dark: {
    lines: ["#2a2a3a", "#333344", "#3a3a4e", "#2e2e40", "#353548"],
    glow: "#4a4a5a",
  },
  light: {
    lines: ["#A78BFA", "#C4B5FD", "#8B5CF6", "#DDD6FE", "#9F7AEA"],
    glow: "#C4B5FD",
  },
};

function createFlowCurve(offset, seed) {
  const points = [];
  const segments = 120;
  for (let i = 0; i <= segments; i++) {
    const t = (i / segments) * Math.PI * 4;
    const x = (i / segments - 0.5) * 5;
    const y = Math.sin(t + seed) * 0.6 + offset;
    const z = Math.cos(t * 0.7 + seed * 2) * 0.5;
    points.push(new THREE.Vector3(x, y, z));
  }
  return new THREE.CatmullRomCurve3(points, false);
}

function FlowLine({ curve, color, thickness, mouse, timeOffset }) {
  const meshRef = useRef();
  const basePositions = useRef(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const geo = meshRef.current.geometry;
    if (!basePositions.current) {
      basePositions.current = geo.attributes.position.array.slice();
    }

    const positions = geo.attributes.position.array;
    const base = basePositions.current;
    const t = state.clock.elapsedTime * 0.8 + timeOffset;

    for (let i = 0; i < positions.length; i += 3) {
      const bx = base[i];
      const by = base[i + 1];
      const bz = base[i + 2];

      // Wave motion
      const wave = Math.sin(t + bx * 1.5) * 0.08;

      // Mouse attraction — stronger when closer to cursor mapped position
      const mx = mouse.x * 2.5;
      const my = mouse.y * 1.5;
      const dx = bx - mx;
      const dy = by - my;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const influence = Math.max(0, 1 - dist / 2.5);
      const pull = influence * influence * 0.4;

      positions[i] = bx;
      positions[i + 1] = by + wave + (my - by) * pull;
      positions[i + 2] = bz + (mouse.x * 0.3 - bz) * pull * 0.5;
    }

    geo.attributes.position.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef}>
      <tubeGeometry args={[curve, 120, thickness, 8, false]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

function FlowField({ mouse, colors }) {
  const groupRef = useRef();

  const lines = useMemo(() => {
    const result = [];
    const count = 8;
    for (let i = 0; i < count; i++) {
      const offset = (i / count - 0.5) * 3;
      const seed = i * 1.7;
      result.push({
        curve: createFlowCurve(offset, seed),
        color: colors.lines[i % colors.lines.length],
        thickness: 0.012 + Math.random() * 0.015,
        timeOffset: i * 0.9,
      });
    }
    return result;
  }, [colors]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.03;
  });

  return (
    <group ref={groupRef}>
      {lines.map((line, i) => (
        <FlowLine key={i} {...line} mouse={mouse} />
      ))}
    </group>
  );
}

export default function FloatingShape({ theme = "dark" }) {
  const mouse = useMousePosition();
  const colors = COLORS[theme] || COLORS.dark;

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 3], fov: 60 }}
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    >
      <AdaptiveDpr pixelated />
      <FlowField mouse={mouse} colors={colors} />
    </Canvas>
  );
}
