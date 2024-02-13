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
    <div id="Proyectos">
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
          <h4>CoolFresh.pe</h4>

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

      <div className={styles.proyectosPresent}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6566.264154057179!2d-60.9401836135227!3d-34.6261024694533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b8eaa3956c5f2b%3A0x6a78406a7a0f2d7!2sC.%20Onas%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1707787239010!5m2!1ses!2sar" style={{width:'99.5%',margin:'0',height:'100vh',border:"1px solid white"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </div>
  );
}
