import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';

const Target = () => {
    const targetRef = useRef();
    const {scene} = useGLTF('http://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');
  return (
    <mesh {...props} ref={targetRef}>
        <primitive  object={scene} />
    </mesh>
  )
}

export default Target