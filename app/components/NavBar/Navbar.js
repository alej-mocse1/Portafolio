"use client";

import styles from "./NavBar.module.css";
import Image from "next/image";
import logo from "../../assets/logo.png";
import logoWsp from "../../assets/logoWSP.jpg";
import Close from "../../assets/close-line.png";
import Open from "../../assets/menu-line.png";
import Link from "next/link";

import { useState } from "react";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.infoNav}>
        <div className={styles.divLogo}>
          {/*           
          <div></div>
         */}
          <Image src={logo} className={styles.imgLogo} />

          <div
            className={styles.divTogle}
            onClick={() => {
              setOpen(!isOpen);
            }}
          >
            {/* <span className={`${isOpen && styles.Span1}`}></span>
            <span className={`${isOpen && styles.Span2}`}></span>
            <span className={`${isOpen && styles.Span3}`}></span> */}
            {isOpen ? (
              <Image src={Close} className={styles.CloseTogle} />
            ) : (
              <Image src={Open} className={styles.IMGTogle} />
            )}
          </div>
        </div>

        <div className={`${styles.divLinks} ${isOpen && styles.Open} `}>
          <ul>
            <li  className={`${styles.Inicio}`}  style={{color:"white"}}>
              {/* <Link style={{borderBottom:'2px solid rgb(83, 177, 191)'}}  href="#inicio">Inicio</Link> */}
              <Link href="#inicio" style={{textDecoration:"none", color:"white",borderBottom:'none'}}>Inicio</Link> 
            </li>

            <li>
              <Link href="#Proyectos">Proyectos</Link>
            </li>
            <li>
              <Link href="#servicios">Servicios</Link>
            </li>

            <li>
              <Link
                href="https://api.whatsapp.com/send?phone=2364556775"
                className={styles.aContact}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <a>
        <Link
          href="https://api.whatsapp.com/send?phone=2364556775"
          target="_blank"
        >
          <Image src={logoWsp} className={styles.logoWsp} />
        </Link>
      </a>
    </nav>
  );
}
