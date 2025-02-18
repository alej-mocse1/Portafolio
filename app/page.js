"use client";


import Presentation from './components/Presentation/Presentation.js';
import AboutMe from './components/AboutMe/AboutMe.js';
import styles from './page.module.css';
import Colaborations from './components/colaborations/Colaborations.js';
import Proyectos from './components/Proyectos/Proyectos.js';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import localFont from 'next/font/local'
import Footer from './components/footer/Footer.js';
import Prices from './components/prices/Prices.js';
const myFont = localFont({ src: './font/AvertaDemoPE-ExtraBold.otf' })
import { useEffect } from 'react';


export default function Home() {

    useEffect(() => {
      const threeScript = document.createElement("script");
      threeScript.setAttribute("id", "threeScript");
      threeScript.setAttribute(
        "src",
        "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
      );
      document.getElementsByTagName("head")[0].appendChild(threeScript);
      return () => {
        if (threeScript) {
          threeScript.remove();
        }
      };
    }, []);
  

  return (
    <main  className={` ${styles.main} `}>
      <Presentation id="inicio"></Presentation>
      <AboutMe ></AboutMe>
      <Colaborations ></Colaborations>
      <Proyectos id="contacto"></Proyectos>
      <Prices ></Prices>
      <Footer></Footer>
      {/* <Testimonials></Testimonials> */}
    </main>
  )
}
