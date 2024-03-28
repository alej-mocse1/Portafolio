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
    <div className={styles.divPresentation}>

        <div data-aos="zoom-in-right"> 
        <h1>Developer <span><ReactTyped strings={["Full Stack"]} typeSpeed={110} /></span></h1>
         <p>Desarrollo de aplicaciones web de extremo a extremo de alta calidad.</p> 
        </div>


<div className={styles.DivImg} >



  
<Image
          //   width={150}
          //  height={150}
           src={imgPrincp3}
          className={styles.imgPrincp2}
        />

        
<Image
          //   width={150}
          //  height={150}
           src={imgPrincp2}
          className={styles.imgPrincp3}
        />


<Image
          //   width={150}
          //  height={150}
           src={imgPrincp}
          className={styles.imgPrincp}
        />



        </div> 


<div className={styles.Contentdivision}>

  <div>
    
  </div>

</div>
 
    </div>
  )
}
