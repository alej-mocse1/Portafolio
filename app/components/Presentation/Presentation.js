import styles from './Presentation.module.css';
import Image from 'next/image';
import imgPrincp from '../../assets/ImgPrincipal.jpg'

export default function Presentation() {
  return (
    <div className={styles.divPresentation}>
        <h1>Developer <span>Full Stack</span></h1>
        <p>High quality end-to-end web application development</p>
        <Image
        //   width={210}
        //   height={260}
          src={imgPrincp}
          className={styles.imgPrincp}
        />
 
    </div>
  )
}
