/* eslint-disable react/no-unknown-property */
import { BarChartOutlined, HistoryOutlined } from '@ant-design/icons'
import { OrbitControls, Stage, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Card, Col, Layout, Menu, MenuProps, Row, Typography } from 'antd'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

const items: MenuProps['items'] = [
  { key: '1', icon: <BarChartOutlined />, label: '3D модели' },
  { key: '2', icon: <HistoryOutlined />, label: 'Страница 2' },
]

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

export function Model(props: JSX.IntrinsicElements['group']) {
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
const HomePage = () => (
  <Layout hasSider>
    <Layout.Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <Typography.Title
        level={3}
        style={{ color: 'white', fontSize: '20px', textAlign: 'center' }}
      >
        Проект
      </Typography.Title>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={items}
      />
    </Layout.Sider>
    <Layout style={{ marginLeft: 200, padding: '40px', display: 'flex' }}>
      <Layout.Content>
        <Typography.Title>3D модели</Typography.Title>
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              <Canvas>
                <Stage>
                  <Model />
                </Stage>
                <OrbitControls
                  maxAzimuthAngle={Math.PI / 3}
                  maxPolarAngle={Math.PI / 2}
                />
              </Canvas>
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Typography.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                tempor, felis vel accumsan blandit, risus libero vehicula
                turpis, eget lobortis mauris elit quis odio. Fusce euismod
                vestibulum magna in placerat. Morbi suscipit, nibh vel ultrices
                laoreet, nisl risus viverra nunc, eu pellentesque ex tellus non
                est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer bibendum, nunc ac hendrerit euismod, felis massa finibus
                eros, at venenatis massa diam porta odio. Aenean condimentum
                lobortis nibh. Nunc dapibus commodo arcu, quis laoreet massa
                hendrerit eu. Cras hendrerit ligula vitae lectus porttitor, eget
                viverra quam ullamcorper. Nunc rutrum mauris eu neque tempor,
                venenatis bibendum mauris blandit. Duis condimentum, ex a
                volutpat convallis, nisi quam faucibus lacus, a pharetra eros
                mauris eget orci. Donec tincidunt, massa quis interdum dapibus,
                ex ipsum facilisis dui, eu suscipit quam felis eu nulla. Sed sed
                porta mauris. Donec aliquet vulputate libero, sed euismod elit
                ullamcorper at. Suspendisse potenti. Ut consectetur elementum
                nisi fringilla commodo. Nulla facilisi. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Mauris venenatis accumsan tortor nec gravida.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Maecenas pulvinar ligula sit
                amet ligula semper ornare. Maecenas vehicula sapien id aliquam
                ultrices. Mauris eu tempus urna, sit amet dapibus urna.
              </Typography.Text>
            </Card>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  </Layout>
)
export default HomePage
