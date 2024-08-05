"use client"
import styles from './Presentation.module.css';
import Image from 'next/image';
import imgPrincp from '../../assets/ts.jpg'
import imgPrincp2 from '../../assets/react.png'
import imgPrincp3 from '../../assets/Sql.jpg'
import { GlowCapture, Glow } from '@codaworks/react-glow';
import { useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import Aos from "aos";
import "aos/dist/aos.css";


export default function Presentation() {
  useEffect(() => {
    Aos.init({ duration: 4000 });
  }, []);
  return (  
    <>
{/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}
<section class="bg-gray-900 text-white">
  <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div class="mx-auto max-w-3xl text-center">
      <h1
        class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-7xl"
      >
        <span><ReactTyped strings={["Developer Full Stack"]} typeSpeed={110}/> </span>
      </h1>

      <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
      Desarrollo de aplicaciones web de extremo a extremo de alta calidad.
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
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
 
    </>
  )
}
