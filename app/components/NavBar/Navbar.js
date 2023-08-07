"use client"

import styles from './NavBar.module.css';
import Image from 'next/image';
import logo from "../../assets/logo.png";

import { useState } from 'react';

export default function NavBar() {

 const [isOpen , setOpen] = useState(false)


  return (
    <nav className={styles.nav}>
      <div className={styles.infoNav}>
        <div className={styles.divLogo}>
          <Image 
              src={logo} 
              width={75}
              height={75}
              className={styles.imgLogo}
          />

          <div className={styles.divTogle} onClick={() => { setOpen(!isOpen)}}>
              <span className={`${isOpen && styles.Span1}`}></span>
              <span className={`${isOpen && styles.Span2}`}></span>
              <span className={`${isOpen && styles.Span3}`}></span>
          </div>
        </div>


        <div className={`${styles.divLinks} ${isOpen && styles.Open} `}>

          <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#contacto"  className={styles.aContact}>Contacto</a></li>
          </ul>

        </div>
       </div>


    </nav>
  )
}
