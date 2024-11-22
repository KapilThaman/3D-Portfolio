import React, { useEffect, useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three'; // Import React Spring for animation
import resume from "../assets/resume.png";

export function Paper(props) {
  const { nodes, materials } = useGLTF('/models/paper.glb');
  const resumeTexture = useTexture(resume); // Use ref to track the click state

  // Spring animation for position and scale, based on the `clickedRef`
  const { scale, position } = useSpring({
    scale: props.animationRunning ? [7, 7, 7] : [0, 0, 0], // Scale up when clicked
    position: props.animationRunning ? [-3, 4.5, 0] : [0.1, 0.159, -0.1],
    // rotation: props.animationRunning
    //   ? [Math.PI * 2.2,0,0] // Rotate by 45 degrees on all axes
    //   : [Math.PI / 20, 0, 0], // Slight rotation when not clicked // Change position when clicked
    config: { tension: 150, friction: 26, delay: 2000 }, // Smooth transition
  });

  useEffect(() => {
    if (nodes.Object_4) {
      const material = nodes.Object_4.material;
      material.map = resumeTexture;
      material.map.repeat.set(1, 1); // Adjust texture scale
      material.map.offset.set(0, 0); // Position the texture on the surface
      material.needsUpdate = true; // Make sure the material updates
    }
  }, [resumeTexture, nodes]);

  useEffect(() => {
    const disableScroll = () => {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    };

    const enableScroll = () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };

    if (props.animationRunning) {
      disableScroll();
    } else {
      enableScroll();
    }

    // Cleanup to ensure scroll behavior is restored if component unmounts
    return () => {
      enableScroll();
    };
  }, [props.animationRunning]);

  return (
    <animated.group {...props} dispose={null} >
      <animated.mesh
        name="Object_4"
        geometry={nodes.Object_4.geometry}
        material={materials['Material.001']}
        scale={scale}
        position={position}
       // Optional rotation to add some dynamic effect
      />
    </animated.group>
  );
}

useGLTF.preload('/models/paper.glb');
