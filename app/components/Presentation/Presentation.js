"use client"
import styles from './Presentation.module.css';
import Image from 'next/image';
import imgPrincp from '../../assets/ts.jpg'
import imgPrincp2 from '../../assets/react.png'
import imgPrincp3 from '../../assets/Sql.jpg'
import { GlowCapture, Glow } from '@codaworks/react-glow';
import { useEffect, useState, useRef } from 'react';
import { ReactTyped } from 'react-typed';
import Aos from "aos";
import "aos/dist/aos.css";
import HALO from "vanta/dist/vanta.halo.min";
import * as THREE from "three";


export default function Presentation() {

  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE,
          color: 0x14b679,
          backgroundColor: 0x15173c,
          maxDistance: 34.0,
          xOffset: 0.24,
          size: 1.50
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);

  useEffect(() => {
    Aos.init({ duration: 4000 });
  }, []);

  return (  
    <div style={{position:"relative", height:"100VH"}}>	
          <section class="-900 text-white" style={{position:"absolute", top:"0", left:"0", width:"60%", height:"100VH", zIndex:"100", display:"flex",justifyContent:"left", alignItems:"left"}} >
            <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-rigth">
              <div class="mx-auto max-w-3xl text-left">
                <h1
                  class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-7xl"
                >
                  <span><ReactTyped strings={["Developer Full Stack"]} typeSpeed={110}/> </span>
                </h1>

                <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed" style={{ minWidth:"100%"}}>
                Desarrollo de aplicaciones web de extremo a extremo de alta calidad.
                </p>

                <div class="mt-8 flex flex-wrap justify-left gap-4">
                  <a
                    class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                    href="https://github.com/alej-mocse1"
                  >
                    GibHub
                  </a>

                  <a
                    class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                    href="https://www.linkedin.com/in/alejandro-mocse-1329b8251/"
                  >
                  Linkedin
                  </a>
                </div>
              </div>
            </div>
          </section> 

          <div className={styles.main} ref={vantaRef} style={{position:"absolute" , width:"100%", height:"100%", top:'0'}}></div>
        </div>
  )
}
