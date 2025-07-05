import { Canvas } from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import {Room} from './Room.jsx';
import {useMediaQuery} from 'react-responsive';
import React from 'react';
import HeroLights from './HeroLights.jsx';
import Particles from './Particles.jsx'


const HeroExperience = () => {
    const isTablet = useMediaQuery({query: '(max-width: 1024px)'});
    const isMobile = useMediaQuery({query:'(max-width:768px)'})
  return (
    <Canvas camera={{position:[0,10,30], fov:45}}>
        
        <OrbitControls
        enablePan={false}
        enableZoom={isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        />

        <HeroLights />

        <Particles count={111}/>
        <group
            scale={isMobile? 0.7 : 1}
            position={[0, -3.5, 0]}
            rotation={[0, -Math.PI /4, 0]}
        >

        </group>
        <Room />
    </Canvas>
  )
}

export default HeroExperience