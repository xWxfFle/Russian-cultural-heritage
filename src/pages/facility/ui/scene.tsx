import { OrbitControls, Stage, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { createFileUrl } from '@/shared/api'

export const Scene = ({ model }: { model: string }) => {
  const { scene } = useGLTF(createFileUrl(model))
  return (
    <Canvas camera={{ fov: 30 }}>
      <Stage>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <primitive object={scene} />
      </Stage>
      <OrbitControls
        maxAzimuthAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}
