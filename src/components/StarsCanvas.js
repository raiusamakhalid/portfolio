import React, { Suspense, useMemo, useRef, Component } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';

const BG = '#0D0E17';

const generateSpherePoints = (count) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 0.5 + Math.random() * 0.7;
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
};

const Stars = () => {
  const ref = useRef();
  const positions = useMemo(() => generateSpherePoints(2200), []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    // Steady slow drift
    ref.current.rotation.x -= delta / 55;
    ref.current.rotation.y -= delta / 80;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.0028}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

class StarsErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

const StarsCanvas = () => (
  <div
    aria-hidden
    style={{
      position: 'fixed',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none',
      background: BG,
    }}
  >
    <StarsErrorBoundary>
      <Canvas
        camera={{ position: [0, 0, 1.2], fov: 60 }}
        dpr={[1, 1.75]}
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: 'high-performance',
        }}
        style={{ width: '100%', height: '100%', background: BG, display: 'block' }}
        onCreated={({ gl }) => {
          gl.setClearColor(BG, 1);
          const canvas = gl.domElement;
          canvas.style.background = BG;
        }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </StarsErrorBoundary>
  </div>
);

export default StarsCanvas;
