import Presentation from './components/Presentation/Presentation.js';
import AboutMe from './components/AboutMe/AboutMe.js';
import styles from './page.module.css';
import Colaborations from './components/colaborations/Colaborations.js';
import Proyectos from './components/Proyectos/Proyectos.js';
import Testimonials from './components/Testimonials/Testimonials.jsx';


export default function Home() {
  return (
    <main className={styles.main}>
      <Presentation id="inicio"></Presentation>
      <AboutMe ></AboutMe>
      <Colaborations id="servicios"></Colaborations>
      <Proyectos id="contacto"></Proyectos>
      {/* <Testimonials></Testimonials> */}
    </main>
  )
}
