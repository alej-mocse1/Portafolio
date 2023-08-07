import Presentation from './components/Presentation/Presentation.js';
import AboutMe from './components/AboutMe/AboutMe.js';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Presentation></Presentation>
      <AboutMe></AboutMe>
    </main>
  )
}
