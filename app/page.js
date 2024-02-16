import Presentation from './components/Presentation/Presentation.js';
import AboutMe from './components/AboutMe/AboutMe.js';
import styles from './page.module.css';
import Colaborations from './components/colaborations/Colaborations.js';
import Proyectos from './components/Proyectos/Proyectos.js';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import localFont from 'next/font/local'
import Footer from './components/footer/Footer.js';
const myFont = localFont({ src: './font/AvertaDemoPE-ExtraBold.otf' })


export default function Home() {
  return (
    <main  className={` ${styles.main} ${myFont.className}`}>
      <Presentation id="inicio"></Presentation>
      <AboutMe ></AboutMe>
      <Colaborations ></Colaborations>
      <Proyectos id="contacto"></Proyectos>
      <Footer></Footer>
      {/* <Testimonials></Testimonials> */}
    </main>
  )
}
