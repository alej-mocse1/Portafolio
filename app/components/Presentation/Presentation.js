"use client"
import styles from './Presentation.module.css';
import Image from 'next/image';
import imgPrincp from '../../assets/ImgPrincipal.jpg'
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
        <Image
          //  width={360}
          //  height={410}
           src={imgPrincp}
          className={styles.imgPrincp}
        />


        {/* <h1>Developer <span>Full Stack</span></h1> */}
        <div data-aos="zoom-in-right">
        <h1>Developer <span><ReactTyped strings={["Full Stack"]} typeSpeed={110} /></span></h1>
         <p>Desarrollo de aplicaciones web de extremo a extremo de alta calidad.</p> 
        {/* <p><ReactTyped strings={["Desarrollo de aplicaciones web de extremo a extremo de alta calidad."]} typeSpeed={40} /></p> */}
        </div>

 
    </div>
  )
}
