"use client"
import styles from './Presentation.module.css';
import Image from 'next/image';
import imgPrincp from '../../assets/ImgPrincipal.jpg'
import { GlowCapture, Glow } from '@codaworks/react-glow';
import { ReactTyped } from 'react-typed';

export default function Presentation() {
  return (
    <div className={styles.divPresentation}>
        {/* <h1>Developer <span>Full Stack</span></h1> */}
        <h1>Developer <span><ReactTyped strings={["Full Stack"]} typeSpeed={110} /></span></h1>
         <p>Desarrollo de aplicaciones web de extremo a extremo de alta calidad.</p> 
        {/* <p><ReactTyped strings={["Desarrollo de aplicaciones web de extremo a extremo de alta calidad."]} typeSpeed={40} /></p> */}

        <Image
        //   width={210}
        //   height={260}
          src={imgPrincp}
          className={styles.imgPrincp}
        />

 
    </div>
  )
}
