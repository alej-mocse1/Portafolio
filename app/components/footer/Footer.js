import styles from "./Footer.module.css";
import Link from "next/link";;
import Love from "../../assets/heart-fill.png"
import Image from "next/image";

export default function Footer() {

  return (
    <footer className={styles.footer}>
        <p>desarrollada por Alejandro Mocse   <Image src={Love} className={styles.imgLogoFooter} /></p>
    </footer>
  );
}
