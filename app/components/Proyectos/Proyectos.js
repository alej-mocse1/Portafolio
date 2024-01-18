import styles from "./Proyectos.module.css";

import Image from "next/image";
import Notebook from "./assets/net.jpg";
import ProymentImg from "./assets/Proyment.png";
import LatamNews from './assets/latamNews.png';
import Cool from './assets/Cool.png';
import Moli from './assets/MoliP.png'

export default function Proyectos() {
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
          <Image src={LatamNews} className={styles.empresaImg}></Image>
        </div>

        <div className={styles.InfoProyect}>
          <h4>LatamNews</h4>

          <p>
            Implementamos software para la realización de tareas repetitivas
            para reemplazo del trabajo manual en un entorno operativo estándar.
          </p>

          <button>Visitar Web</button>
        </div>
      </div>

     

      <div className={styles.proyectosPresent}>
        <div className={styles.BackGraundImg}>
          <Image src={ProymentImg} className={styles.empresaImg}></Image>
        </div>

        <div className={styles.InfoProyect}>
          <h4>Proyment.com</h4>

          <p>
            Implementamos software para la realización de tareas repetitivas
            para reemplazo del trabajo manual en un entorno operativo estándar.
          </p>

          <button>Visitar Web</button>
        </div>
      </div>


      <div className={styles.proyectosPresent}>
        <div className={styles.BackGraundImg}>
          <Image src={Cool} className={styles.empresaImg}></Image>
        </div>

        <div className={styles.InfoProyect}>
          <h4>CoolFres.pe</h4>

          <p>
            Implementamos software para la realización de tareas repetitivas
            para reemplazo del trabajo manual en un entorno operativo estándar.
          </p>

          <button>Visitar Web</button>
        </div>
      </div>

      <div className={styles.proyectosPresent}>
        <div className={styles.BackGraundImg}>
          <Image src={Moli} className={styles.empresaImg}></Image>
        </div>

        <div className={styles.InfoProyect}>
          <h4>Molipromo.pe</h4>

          <p>
            Implementamos software para la realización de tareas repetitivas
            para reemplazo del trabajo manual en un entorno operativo estándar.
          </p>

          <button>Visitar Web</button>
        </div>
      </div>

     
    </div>
  );
}
