
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('models/dam_with_water.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Bush_3_(smaller)_Bark_Mat_0001'].geometry}
        material={materials.Bark_Mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Bush_3_(smaller)_Leaf_v3_Mat_0'].geometry}
        material={materials.Leaf_v3_Mat}
        position={[43.643, 11.932, 15.191]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Bush_3_(smaller)_Leaf_v3_Mat_0001'].geometry}
        material={materials.Leaf_v3_Mat}
        position={[45.61, 11.455, 3.224]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Bush_3_(smaller)_Leaf_v3_Mat_0002'].geometry}
        material={materials.Leaf_v3_Mat}
        position={[77.045, 12.087, 17.592]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Bush_3_(smaller)_Leaf_v3_Mat_0004'].geometry}
        material={materials.Leaf_v3_Mat}
        position={[78.145, 12.344, 4.989]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Bush_3_(smaller)_Leaf_v3_Mat_0003'].geometry}
        material={materials.Leaf_v3_Mat}
        position={[76.81, 13.033, 1.073]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.dam.geometry}
        material={materials['Material.005']}
        position={[59.661, 5.984, -8.905]}
        scale={[1.063, 0.946, 1.018]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['Material.006']}
        position={[21.715, 25.537, -8.538]}
        scale={[17.622, 20.992, 45.334]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials['Material.001']}
        position={[60.17, 32.768, -69.402]}
        rotation={[0, -1.529, 0]}
        scale={[23.876, 30.788, 61.36]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials['Material.006']}
        position={[97.57, 27.676, -14.212]}
        scale={[19.1, 25.585, 52.021]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['Material.013']}
        position={[59.256, 3.956, 10.35]}
        scale={[53.745, 1.346, 21.993]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.009']}
        position={[60.412, 3.625, 11.903]}
        scale={[9.612, 1, 21.041]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials['Material.009']}
        position={[61.73, 7.911, -24.075]}
        scale={[25.243, 1, 27.869]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials['Material.009']}
        position={[58.177, 15.248, -6.515]}
        rotation={[-1.886, 0.035, -3.11]}
        scale={[-8.548, -0.932, -7.751]}
      />
    </group>
  )
}

useGLTF.preload('models/dam_with_water.glb')
