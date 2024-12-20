/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/openBook.glb -o src/components/OpenBook.jsx -r public 
*/

import React, { useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Paper } from "./Paper";
import { useControls } from 'leva';
import * as THREE from "three";
export function OpenBook(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/models/openBook1.glb')
  const { actions } = useAnimations(animations, group);
 



  

  const handleClick = () => {
    window.open('/resume/Kapil Thaman Software Developer 1.pdf', '_blank');
  };

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene"  scale={[0.2, 0.2, 0.2]}
        position={[1, 0.5, 0.7]}
        rotation={[Math.PI / 2 / 2, 0, 0]}
        onClick={handleClick}>
        <mesh name="A4_Page1Shape_6_0" geometry={nodes.A4_Page1Shape_6_0.geometry} material={materials.A4_Page1Shape} position={[0.821, 0.045, -0.061]} rotation={[0, 0.087, 0]} scale={1.821} />
       
        <mesh name="Folder_1Shape_shapekey_1" geometry={nodes.Folder_1Shape_shapekey_1.geometry} material={materials.Folder_1Shape} position={[0.616, 0.092, 0.06]} scale={1.551} />
        <mesh name="Folder_1Shape" geometry={nodes.Folder_1Shape.geometry} material={materials.Folder_1Shape} morphTargetDictionary={nodes.Folder_1Shape.morphTargetDictionary} morphTargetInfluences={nodes.Folder_1Shape.morphTargetInfluences} position={[-3.344, 1.876, 0.06]} scale={5.12} />
        <mesh name="sk_receiver" geometry={nodes.sk_receiver.geometry} material={materials.Folder_1Shape} morphTargetDictionary={nodes.sk_receiver.morphTargetDictionary} morphTargetInfluences={nodes.sk_receiver.morphTargetInfluences} position={[0.623, 0.04, 0.06]} scale={1.551} />
        <mesh name="sk_receiver001" geometry={nodes.sk_receiver001.geometry} material={materials.Folder_1Shape} morphTargetDictionary={nodes.sk_receiver001.morphTargetDictionary} morphTargetInfluences={nodes.sk_receiver001.morphTargetInfluences} position={[0.064, 0.025, -0.713]} scale={0.773} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/openBook.glb')
