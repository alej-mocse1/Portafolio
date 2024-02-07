"use client";
import styles from "./Proyectos.module.css";

import { useEffect } from "react";

import Image from "next/image";
import Notebook from "./assets/net.jpg";
import ProymentImg from "./assets/Proyment.png";
import LatamNews from "./assets/latamNews.png";
import Cool from "./assets/Cool.png";
import Moli from "./assets/MoliP.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Proyectos() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className={styles.Proyectos}>
        <h3>Mis proyectos</h3>

        <p>
          Después de explorar innumerables aplicaciones en diversas industrias,
          decidí dar un paso más y crear la mía. Estoy emocionado por el desafío
          del desarrollo full stack y la oportunidad de fusionar mi visión con
          las mejores prácticas de experiencia de usuario
        </p>
      </div>

      <div className={styles.proyectosPresent}>
        <div className={styles.BackGraundImg}>
          <Image
            src={LatamNews}
            className={styles.empresaImg}
            data-aos="zoom-in-right"
          ></Image>
        </div>

        <div data-aos="zoom-in-right" className={styles.InfoProyect}>
          <h4>LatamNews</h4>

          <p>
            Web de noticias. Con Noticias sobre tecnología, finanzas Y
            deportes con actualizaciones las 24 horas del día, los 7 días de la
            semana.
          </p>

          <a
            href="https://latam-news-ar.vercel.app/"
            style={{ textDecoration: "none", border: "none" }}
          >
            <button>Visitar Web</button>
          </a>
        </div>
      </div>

      <div className={styles.proyectosPresent}>
        <div className={styles.BackGraundImg}>
          <Image
            src={ProymentImg}
            className={styles.empresaImg}
            data-aos="zoom-in-right"
          ></Image>
        </div>

        <div data-aos="zoom-in-right" className={styles.InfoProyect}>
          <h4>Proyment.com</h4>

          <p>
            Wen desarrollada para una de las mejores consultoras de Perú,
            dedicada a  potenciar empresas a través de servicios integrales.
          </p>
        
          <a
            href="  https://proyment.com/"
            style={{ textDecoration: "none", border: "none" }}
          >
          <button>Visitar Web</button>
          </a>
        </div>
      </div>

      <div className={styles.proyectosPresent}>
        <div className={styles.BackGraundImg}>
          <Image
            src={Cool}
            className={styles.empresaImg}
            data-aos="zoom-in-right"
          ></Image>
        </div>

        <div data-aos="zoom-in-right" className={styles.InfoProyect}>
          <h4>CoolFres.pe</h4>

          <p>
          Web Realizada para una reconocida marca de Gaseosas de Perú.
          </p>
          <a
            href="https://www.coolfresh.pe/"
            style={{ textDecoration: "none", border: "none" }}
          >
          <button>Visitar Web</button>
          </a>
        </div>
      </div>

      <div className={styles.proyectosPresent}>
        <div className={styles.BackGraundImg}>
          <Image
            src={Moli}
            className={styles.empresaImg}
            data-aos="zoom-in-right"
          ></Image>
        </div>

        <div className={styles.InfoProyect} data-aos="zoom-in-right">
          <h4>Molipromo.pe</h4>

          <p>
          Web Realizada para una reconocida marca de Pastas de Perú.
          </p>

          <a
            href="https://molipromo.pe/"
            style={{ textDecoration: "none", border: "none" }}
          >
          <button>Visitar Web</button>
          </a>
        </div>
      </div>
    </div>
  );
}
