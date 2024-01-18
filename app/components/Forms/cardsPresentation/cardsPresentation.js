
import styles from './cardsPresentation.module.css';
import Image from 'next/image';
import { GlowCapture, Glow } from '@codaworks/react-glow';

export default function CardPresent() {
  return (
    <div className={styles.CardPresentation}>

          <div className={styles.cards}>

          <h1> Desarrollos Frontend</h1> 

          <p>Desarrollador Frontend con experiencia en diseño responsive, frameworks y optimización de rendimiento web.</p>

          <b>Tecnológias</b>


          <p>Html,Css,JavaScript,TypeScript,React.js, <br></br>Next.js</p>


          <b>Herramientas</b>


          <span>Git</span>
          <span>Git-Hub</span>
          <span>Git-Lab</span>
          <span>Vercel</span>



          </div>


        <div className={styles.cards}>

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

 

        <div className={styles.cards}>

        <h1>Desarrollos Backend</h1> 

        <p>Desarrollador Backend con sólida experiencia en la construcción de sistemas robustos y eficientes..</p>

        <b>Tecnológias</b>


        <p>Node.js,Express,JavaScript,TypeScript, <br></br>MongoDB, PostgreSQL</p>


        <b>Herramientas</b>


        <span>Kubernetes</span>
        <span>Docker</span>
        <span>Despliegues</span>
        <span>Modelado de DB</span>
  



        </div>

 
    </div>
  )
}
