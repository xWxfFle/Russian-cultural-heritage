/* eslint-disable react/no-unknown-property */
import { OrbitControls, Stage, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Model_Crkva_edit_Delighted001: THREE.Mesh
    Model_Crkva_edit_Delighted001_1: THREE.Mesh
    Model_Crkva_edit_Delighted001_2: THREE.Mesh
    Model_Crkva_edit_Delighted001_3: THREE.Mesh
    Model_Crkva_edit_Delighted001_4: THREE.Mesh
  }
  materials: {
    ['Model_Crkva_edit_Delighted.001']: THREE.MeshPhysicalMaterial
    ['Model_Crkva_edit_Delighted1.001']: THREE.MeshPhysicalMaterial
    ['Model_Crkva_edit_Delighted2.001']: THREE.MeshPhysicalMaterial
    ['Model_Crkva_edit_Delighted3.001']: THREE.MeshPhysicalMaterial
    ['Model_Crkva_edit_Delighted4.001']: THREE.MeshPhysicalMaterial
  }
}

function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/crkva.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Model_Crkva_edit_Delighted001.geometry}
          material={materials['Model_Crkva_edit_Delighted.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Model_Crkva_edit_Delighted001_1.geometry}
          material={materials['Model_Crkva_edit_Delighted1.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Model_Crkva_edit_Delighted001_2.geometry}
          material={materials['Model_Crkva_edit_Delighted2.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Model_Crkva_edit_Delighted001_3.geometry}
          material={materials['Model_Crkva_edit_Delighted3.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Model_Crkva_edit_Delighted001_4.geometry}
          material={materials['Model_Crkva_edit_Delighted4.001']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('crkva.glb')

export const Scene = () => (
  <Canvas camera={{ fov: 30 }}>
    <Stage>
      <Model />
    </Stage>
    <OrbitControls maxAzimuthAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2} />
  </Canvas>
)
