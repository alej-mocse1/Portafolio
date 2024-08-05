"use client";
import styles from "./Proyectos.module.css";

import { useEffect } from "react";

import Image from "next/image";
import Notebook from "./assets/net.jpg";
import ProymentImg from "./assets/Proyment.png";
import LatamNews from "./assets/latamNews.png"; 
import Cool from "./assets/Cool.png";
import Suave from "./assets/Suave.png";
import Moli from "./assets/MoliP.png";
import Aos from "aos";
import Link from "next/link";

import "aos/dist/aos.css";

export default function Proyectos() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="Proyectos">
      <span className="relative flex justify-center">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
      </span>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Mis proyectos
            </h2>

            <p className="mx-auto mt-4 max-w-md text-gray-500">
              Después de explorar innumerables aplicaciones en diversas
              industrias, decidí dar un paso más y crear las mías. Estoy
              emocionado por el desafío del desarrollo Full Stack y la
              oportunidad de fusionar mi visión con las mejores prácticas de
              experiencia de usuario
            </p>
          </header>

          <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <li>
              <a  href="https://molipromo.pe/" className="group relative block">
                <Image
                  src={Moli}
                  alt=""
                  className=" w-full object-cover transition duration-500 group-hover:opacity-90 image-right"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    <Link href="https://molipromo.pe/">Visitar</Link>          
                  </span>
                </div>
              </a>
            </li>

            <li>
              <a  href="https://www.coolfresh.pe/" className="group relative block">
                <Image
                  src={Cool}
                  alt=""
                  className=" w-full object-cover transition duration-500 group-hover:opacity-90 image-left "
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                   <Link href="https://www.coolfresh.pe/">Visitar</Link>
                  </span>
                </div>
              </a>
            </li>

            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <a href="https://proyment.com/" className="group relative block">
                <Image
                  src={ProymentImg}
                  alt=""
                  className=" w-full object-cover transition duration-500 group-hover:opacity-90 image-left "
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                   <Link href="https://proyment.com/">Visitar</Link>
                  </span>
                </div>
              </a>
            </li>
          </ul>

          <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <li>
              <a href="https://www.promosuave.com/" className="group relative block">
                <Image
                  src={Suave}
                  alt=""
                  className="w-full object-cover transition duration-500 group-hover:opacity-90 image-right"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    <Link href="https://www.promosuave.com/">Visitar</Link>
                  </span>
                </div>
              </a>
            </li>
            

            <li>
              <a href="https://www.coolfresh.pe/" className="group relative block">
                <Image
                  src={Cool}
                  alt=""
                  className="w-full object-cover transition duration-500 group-hover:opacity-90 image-left "
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    <Link href="https://www.coolfresh.pe/">Visitar</Link>
                  </span>
                </div>
              </a>
            </li>

            <li>
              <a href="https://latam-news-ar.vercel.app/business" className="group relative block">
                <Image
                  src={LatamNews}
                  alt=""
                  className="w-full object-cover transition duration-500 group-hover:opacity-90 image-left "
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                 <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                 <Link href="https://latam-news-ar.vercel.app/business">Visitar</Link>
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <span className="relative flex justify-center" style={{marginBottom:"45px"}}>
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
      </span>


    </div>
  );
}
