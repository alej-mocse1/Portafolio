"use client"

import styles from './cardsPresentation.module.css';
import Image from 'next/image';
import { GlowCapture, Glow } from '@codaworks/react-glow';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function CardPresent() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={styles.CardPresentation}  id="servicios">

          <div className={styles.cards} data-aos="zoom-in"> 

          <h1> Desarrollos Frontend</h1> 

          <p>Desarrollos Frontend, ultimos frameworks y optimización de rendimiento web.</p>

          <b>Tecnológias</b>


          <p>Html,Css,JavaScript,TypeScript,<br></br>React.js, Next.js</p>


          <b>Herramientas</b>


          <span>Figma</span>
          <span>Git-Hub</span>
          <span>Git-Lab</span>
          <span>Vercel</span>



          </div>


        <div className={styles.cards} data-aos="zoom-in"> 

        <h1>Optimización web</h1> 

        <p>Optimización web, mejora de velocidad, rendimiento y SEO de sitios para ofrecer una experiencia excepcional al usuario.</p>

        <b>Mejoras</b>


        <p>enfoque eficiente y herramientas avanzadas aseguran un rendimiento óptimo</p>


        <b>Resultados</b>


        <span>Prácticas SEO efectivas</span>
        <span>Optimización web</span>
        <span>Mejora de velocidad</span>
        <span>Experiencia de Usuario</span>



        </div>

 

        <div className={styles.cards} data-aos="zoom-in">

        <h1>Desarrollos Backend</h1> 

        <p>Desarrollos Backend, sólida construcción de sistemas robustos y eficientes..</p>

        <b>Tecnológias</b>


        <p>Node.js,Express,JavaScript,TypeScript, <br></br>MongoDB, PostgreSQL</p>


        <b>Métodos</b>


       
        <span>Git/Git-Hub</span>
        <span>Arquitectura Backend</span> 
        <span>Despliegues en la Nube</span>
        <span>Modelado de DB</span>
  



        </div>

 
    </div>
  )
}
