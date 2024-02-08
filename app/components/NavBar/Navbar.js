"use client";

import styles from "./NavBar.module.css";
import Image from "next/image";
import logo from "../../assets/logo.png";
import logoWsp from "../../assets/logoWSP.jpg";
import Link from "next/link";  

import { useState } from "react";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.infoNav}>
        <div className={styles.divLogo}>
          <Image src={logo} className={styles.imgLogo} />

          <div
            className={styles.divTogle}
            onClick={() => {
              setOpen(!isOpen);
            }}
          >
            <span className={`${isOpen && styles.Span1}`}></span>
            <span className={`${isOpen && styles.Span2}`}></span>
            <span className={`${isOpen && styles.Span3}`}></span>
          </div>
        </div>

        <div className={`${styles.divLinks} ${isOpen && styles.Open} `}>
          <ul>
            <li >
              <Link href="#inicio">Inicio</Link>
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
        <Link href="https://api.whatsapp.com/send?phone=2364556775">
          <Image src={logoWsp} className={styles.logoWsp} />
        </Link>
      </a>
    </nav>
  );
}
