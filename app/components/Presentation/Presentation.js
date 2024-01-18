"use client"
import styles from './Presentation.module.css';
import Image from 'next/image';
import imgPrincp from '../../assets/ImgPrincipal.jpg'
import { GlowCapture, Glow } from '@codaworks/react-glow';

export default function Presentation() {
  return (
    <div className={styles.divPresentation}>
        <h1>Developer <span>Full Stack</span></h1>
        <p>Desarrollo de aplicaciones web de extremo a extremo de alta calidad.</p>

        <Image
        //   width={210}
        //   height={260}
          src={imgPrincp}
          className={styles.imgPrincp}
        />

 
    </div>
  )
}
