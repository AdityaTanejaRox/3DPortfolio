import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../../componenets/TitleHeader";
import { Link } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const orderRef = useRef(null);
  const heapRef = useRef(null);
  const signalRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [orderRef.current, heapRef.current, signalRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <TitleHeader  title="Selected Work & Builds" sub="Work" />
        <div className="showcaselayout mt-12">
          <div ref={orderRef} className="first-project-wrapper">
            <Link to="/projects/order" className="image-wrapper">
            <div className="image-wrapper">
                <img src="/images/project4.png" alt="Zero Latency Orderbook" 
                  className="object-cover object-top"
                />
            </div>
            <div className="text-content">
              <Link to="/projects/order">
                <h2>
                 Real-Time matching engine using C++
                </h2>
              </Link>
              <p className="text-white-50 md:text-xl">
                A Real-Time C++ engine made using C++ and skip list for ultra-fast order matching with minimal latency.
              </p>
            </div>
            </Link>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={heapRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <Link to="/projects/heap">
                  <img
                    src="/images/project5.png"
                    alt="Custom Heap Allocator"
                    className="object-cover object-top"
                  />
                </Link>
              </div>
              <Link to="/projects/heap">
                <h2>Custom Memory Heap Allocator</h2>
              </Link>
            </div>

            <div className="project" ref={signalRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <Link to="/projects/signal">
                  <img src="/images/project6.png" alt="YC Directory App" className="object-cover object-top" />
                </Link>
              </div>
              <Link to="/projects/signal">
                <h2>Real-Time Market Signal Forecaster</h2>
              </Link>
            </div>
          </div>

            
        </div>
        <Link to="/projects">
          <div className="cta-button group cursor-pointer mt-12">
            <div className="bg-circle" />
            <p className="text">See More Projects</p>
            <div className="arrow-wrapper">
              <img src="/images/arrow-down.svg" alt="arrow" />
            </div>
          </div>
    </Link>
      </div>
    </div>
  );
};

export default AppShowcase;