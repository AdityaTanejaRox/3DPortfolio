import React from 'react'
import { words } from '../../constants';
import Button from '../Button';
import HeroExperience from '../HeroModels/HeroExperience';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import AnimatedCounter from '../AnimatedCounter';
const Hero = () => {

    useGSAP(()=>{
        gsap.fromTo('.hero-text h1',
            {
                y:50,
                opacity:0
            },
            {
                y:0,
                opacity:1,
                stagger:0.2,
                duration:1,
                ease:'power2.inOut'
            },
        )
    });

  return (
    <section id="hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" alt="background" />
        </div>

        <div className="hero-layout">
        {/*<div className="relative z-10 xl:mt-20 mt-32 md:h-dvh h-[80vh] flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto w-full min-h-screen px-5 md:px-10 gap-10">*/}
            {/*LEFT: HERO CONTENT */}
            <header className="flex flex-col justify-center md:w-full w-screen md:px-29 px-5">
                <div className="flex flex-col gap-7">
                    <div className="hero-text">
                        <h1>Shaping
                            <span className="slide">
                                <span className="wrapper">
                                    {words.map((word) => (
                                        <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                            <img 
                                                src={word.imgPath}
                                                alt={word.text}
                                                className="xl:size-12 md:size-10 size-7 md:p-2 p1 rounded-full bg-white-50"
                                            />
                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <h1>into Real Projects</h1>
                        <h1>that Deliver Results</h1>
                    </div>

                    <p className="text-white-50 md:text-xl relative z-10 pointer-eventes-none">Hi, I'm Aditya, a C++ developer based in Chicago with a passion for winning.</p>
                    <Button 
                    className="md:w-80 md:h-16 w-60 h-12"
                    id="button"
                    text="See my Work"
                    />
                </div>
           </header>
            {/*RIGHT: 3D MODEL*/}
            <figure className="lg:w-1/2 w-full flex justify-center">
                <div className="hero-3d-layout">
                    <HeroExperience />
                </div>
            </figure>
        </div>
        <AnimatedCounter />
    </section>
  );
}

export default Hero