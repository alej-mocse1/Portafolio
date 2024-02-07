
import Image from 'next/image';
import imgDeSKTOP from '../../assets/ux_ImgPC.png'
import styles from './AboutMe.module.css';
import CardPresent from '../Forms/cardsPresentation/cardsPresentation';



export default function AboutMe() {



  return (
    <div className={styles.AboutMe} > 
      <div className={styles.divImg}>
        <Image
         src={imgDeSKTOP}
         className={styles.imgDESKTOP}
        ></Image>
      </div>

      <div className={styles.divInfo} >
        <h3>Hola soy <span>Alejandro!</span>. Full Stack Developer </h3>
        <p>Comencé mi camino como desarrollador en febrero de 2022. He realizado trabajo remoto para agencias/empresas en toda América Latina y he colaborado con personas talentosas para crear productos digitales durante todo este tiempo, soy curioso por naturaleza y trabajo perpetuamente para mejorar mis habilidades. un problema a la vez</p>

      </div>


      <CardPresent id="servicios"></CardPresent>
    </div>
  )
}
