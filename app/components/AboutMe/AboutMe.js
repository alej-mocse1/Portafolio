import Image from 'next/image';
import imgDeSKTOP from '../../assets/ux_ImgPC.png'
import styles from './AboutMe.module.css'

export default function AboutMe() {
  return (
    <div className={styles.AboutMe}> 
      <div className={styles.divImg}>
        <Image
         src={imgDeSKTOP}
         className={styles.imgDESKTOP}
        ></Image>
      </div>

      <div className={styles.divInfo}>
        <h3>Hello, I'm <span>Alejandro!</span>. Full Stack Developer </h3>
        <p>I started my journey as a developer in February 2022. I have done remote work for agencies/companies all over Latin America and collaborated with talented people to create digital products during all this time, I am naturally curious and perpetually working to improve my skills, a problem to the time.</p>

      </div>
    </div>
  )
}
