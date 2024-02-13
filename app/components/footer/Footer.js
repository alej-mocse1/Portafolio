import styles from "./Footer.module.css";
import Link from "next/link";
import Love from "../../assets/heart-fill.png";
import Fb from "../../assets/facebook-circle-fill.png";
import Tw from "../../assets/twitter-fill.png";
import LK from "../../assets/linkedin-box-fill.png";
import Ig from "../../assets/instagram-fill.png";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        desarrollada por Alejandro Mocse
        {/* <Image src={Love} className={styles.imgLogoFooter} /> */}
        <Link href="https://www.facebook.com/alejandro.mocse.94" target="_blank">
          <Image src={Fb} className={styles.imgLogoFooter} />
        </Link>
        <Link href="">
          <Image src={Tw} className={styles.imgLogoFooter} />
        </Link>
        <Link href="https://www.linkedin.com/in/alejandro-mocse-1329b8251/" target="_blank">
          <Image src={LK} className={styles.imgLogoFooter} />
        </Link>
        <Link href="https://www.instagram.com/alejandro.mocse/" target="_blank">
          <Image src={Ig} className={styles.imgLogoFooter} />
        </Link>
      </p>
    </footer>
  );
}
