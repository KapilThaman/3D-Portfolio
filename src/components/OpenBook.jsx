/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/openBook.glb -o src/components/openBook.jsx -r public 
Author: Kami Rapacz (https://sketchfab.com/kuroderuta)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/document-file-folder-11390179bba7462484d344e2fe22c703
Title: Document File Folder
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";
import { Paper } from "./Paper";

export function OpenBook(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/openBook.glb");
  const { actions } = useAnimations(animations, group);
  const [animationRunning, setanimationRunning] = useState(false);

  const { animation } = useControls({
    animation: {
      value: "Anim", // Default animation name
      
    },
  });

  useEffect(() => {
    // Exit if animation is not playing

    const action = actions[animation];
    // Play animation
    if (animationRunning == true) {
      action.reset();
      // Reset animation to start
      action.clampWhenFinished = true;
      action.setLoop(THREE.LoopOnce, 0);
      action.setDuration(1.5);
      action.play();
    }

    // Pause after 2 seconds
    const timer = setTimeout(() => {
      action.paused = true;
      // Mark animation as stopped
    }, 750);

    return () => {
      clearTimeout(timer);

      // Cleanup: stop animation on unmount or state change
    };
  }, [actions, animation, animationRunning]);

  const handleClick = () => {
    const action = actions[animation];
    // Pause current animation if clicked again

    if (action.paused && animationRunning == true) {
      action.paused = false; // Resume animation
      setanimationRunning(false);
    } else if (animationRunning == false) {
      setanimationRunning(true);
    }
  };

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        name="Sketchfab_Scene"
        scale={[0.2, 0.2, 0.2]}
        position={[1, 0.5, 0.7]}
        onClick={handleClick}
      >
        <group name="Sketchfab_model" rotation={[-Math.PI / 2 / 2, 0, 0]}>
          <group name="Folderabccleanermaterialmergergles">
            <group name="Object_2" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Object_3">
                <group name="Object_4" position={[0, 0.032, 0.06]}>
                  <group name="TimeframeMainGroup">
                    <group name="Object_6">
                      <mesh
                        name="A4_Page3Shape_2_0"
                        geometry={nodes.A4_Page3Shape_2_0.geometry}
                        material={materials.A4_Page3Shape}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_8"
                  position={[0.2, 0.022, -0.24]}
                  rotation={[0, -0.087, 0]}
                >
                  <group name="TimeframeMainGroup_1">
                    <group name="Object_10">
                      <mesh
                        name="A4_Page2Shape_4_0"
                        geometry={nodes.A4_Page2Shape_4_0.geometry}
                        material={materials.A4_Page2Shape}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_12"
                  position={[0.05, 0.042, -0.3]}
                  rotation={[0, 0.087, 0]}
                >
                  <group name="TimeframeMainGroup_2">
                    <group name="Object_14">
                      <mesh
                        name="A4_Page1Shape_6_0"
                        geometry={nodes.A4_Page1Shape_6_0.geometry}
                        material={materials.A4_Page1Shape}
                      />
                    </group>
                  </group>
                </group>
                <group>
                  <Paper animationRunning = {animationRunning} />
                </group>

                <group name="Object_16" position={[0, -0.028, 0.06]}>
                  <group name="TimeframeMainGroup_3">
                    <group name="Object_18">
                      <mesh
                        name="A4_Paper_StackShape_8_0"
                        geometry={nodes.A4_Paper_StackShape_8_0.geometry}
                        material={materials.A4_Paper_StackShape}
                      />
                    </group>
                  </group>
                </group>
                <group name="Object_20" position={[0, -0.068, 0.06]}>
                  <group name="MorphMainGroup">
                    <mesh
                      name="Folder_1Shape"
                      geometry={nodes.Folder_1Shape.geometry}
                      material={materials.Folder_1Shape}
                      morphTargetDictionary={
                        nodes.Folder_1Shape.morphTargetDictionary
                      }
                      morphTargetInfluences={
                        nodes.Folder_1Shape.morphTargetInfluences
                      }
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/openBook.glb");