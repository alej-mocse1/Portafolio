"use client"

import { useEffect } from "react";
import styles from "./colaborations.module.css";
import logo1 from "./assets/LOGO1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/LOGO3.png";
import logo4 from "./assets/LOGO4.png";
import logo5 from  "./assets/LOGO5.png";

import Image from "next/image";
import Aos from "aos";
import 'aos/dist/aos.css' 


export default function Colaborations() {

  useEffect(()=> {
    Aos.init({duration:1000})
   },[])


  return (
    <div className={styles.colaborations}>
      <div className={styles.division}></div>


    <h3>
        Estoy orgulloso de haber colaborado <br></br>
        con algunas empresas increíbles:
      </h3>

      <div className={styles.DivImgs} >
        <Image src={logo1} className={styles.imgDESKTOP3} data-aos="flip-up"></Image>
        <Image src={logo2} className={styles.imgDESKTOP2} data-aos="flip-up"></Image>
        <Image src={logo5} className={styles.imgDESKTOP3} data-aos="flip-up"></Image>
        <Image src={logo4} className={styles.imgDESKTOP3} data-aos="flip-up"></Image>
        <Image src={logo3} className={styles.imgDESKTOP2}  data-aos="flip-up"></Image>
      </div>
    </div> 
  );
}
