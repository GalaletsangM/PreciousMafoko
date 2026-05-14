import React from 'react';
import { Canvas } from '@react-three/fiber';
import HackerRoom from '../components/HackerRoom';
import { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader';
//import { Leva, useControls } from 'leva';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';
import Target from '../components/Target.jsx';

const Hero = () => {
   
    const isSmall = useMediaQuery({ query: "(max-width: 440px)" });
    const isMobile = useMediaQuery({ query: "(min-width: 540px) (max-width: 913px)" });
    const isTablet = useMediaQuery({ query: "(min-width: 913px) and (max-width: 1024px)" });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="text-2xl sm:text-3xl font-medium text-white text-center font-generalsans">
          Hi, I am Precious <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>
      <div className="w-full h-full absolute insert-0">
        {/*<Leva />*/}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader/>}>
            <perspectiveCamera makeDefault position={[0, 0, 50]} />
            <HackerRoom 
            //scale={0.025} 
            //position={[0, 0, 0]} 
            //rotation={[0, 280, 0]}
            position={sizes.deskPosition} 
            rotation={[0.3, -Math.PI, 0]}
            scale={sizes.deskScale}
            />
            <group>
                <Target position={sizes.targetPosition}/>
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}

export default Hero