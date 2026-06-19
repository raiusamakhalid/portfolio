import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload } from '@react-three/drei';
import * as THREE from 'three';

// Rasterizes any image (SVG, PNG, JPG) onto a canvas before creating a WebGL texture.
// This fixes SVGs that have no explicit width/height, which useTexture silently fails on.
class CanvasTextureLoader extends THREE.Loader {
  load(url, onLoad, _onProgress, onError) {
    const SIZE = 256;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = SIZE;
      canvas.height = SIZE;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, SIZE, SIZE);
      onLoad(new THREE.CanvasTexture(canvas));
    };
    img.onerror = onError || (() => {});
    img.src = url;
  }
}

const Ball = ({ imgUrl }) => {
  const texture = useLoader(CanvasTextureLoader, imgUrl);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={texture}
        />
      </mesh>
    </Float>
  );
};

class BallErrorBoundary extends React.Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed) return this.props.fallback;
    return this.props.children;
  }
}

const FallbackBall = ({ name }) => (
  <div
    style={{
      width: 100,
      height: 100,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #2a1d4c, #915EFF)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <span
      style={{
        color: '#fff',
        fontSize: 10,
        fontWeight: 600,
        textAlign: 'center',
        padding: '0 8px',
        lineHeight: 1.3,
      }}
    >
      {name}
    </span>
  </div>
);

const BallCanvas = ({ icon, name }) => (
  <div className="flex flex-col items-center gap-2">
    <BallErrorBoundary fallback={<FallbackBall name={name} />}>
      <div style={{ width: 100, height: 100 }}>
        <Canvas
          frameloop="always"
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} />
            <Ball imgUrl={icon} />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    </BallErrorBoundary>
    <p className="text-xs text-center font-medium" style={{ color: '#aaa6c3' }}>
      {name}
    </p>
  </div>
);

export default BallCanvas;
