"use client";


import Presentation from './components/Presentation/Presentation.js';
import AboutMe from './components/AboutMe/AboutMe.js';
import styles from './page.module.css';
import Colaborations from './components/colaborations/Colaborations.js';
import Proyectos from './components/Proyectos/Proyectos.js';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import localFont from 'next/font/local'
import Footer from './components/footer/Footer.js';
import Prices from './components/prices/Prices.js';
const myFont = localFont({ src: './font/AvertaDemoPE-ExtraBold.otf' })


export default function Home() {
  return (
    <main  className={` ${styles.main} `}>
      <Presentation id="inicio"></Presentation>
      <AboutMe ></AboutMe>
      <Colaborations ></Colaborations>
      <Proyectos id="contacto"></Proyectos>
      <Prices ></Prices>
      <Footer></Footer>
      {/* <Testimonials></Testimonials> */}
    </main>
  )
}
