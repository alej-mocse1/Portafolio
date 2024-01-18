import Presentation from './components/Presentation/Presentation.js';
import AboutMe from './components/AboutMe/AboutMe.js';
import styles from './page.module.css';
import Colaborations from './components/colaborations/Colaborations.js';
import Proyectos from './components/Proyectos/Proyectos.js';


export default function Home() {
  return (
    <main className={styles.main}>
      <Presentation></Presentation>
      <AboutMe></AboutMe>
      <Colaborations></Colaborations>
      <Proyectos></Proyectos>
    </main>
  )
}
