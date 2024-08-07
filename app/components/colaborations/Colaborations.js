"use client";

import { useEffect } from "react";
import styles from "./colaborations.module.css";
import logo1 from "./assets/LOGO1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/LOGO3.png";
import logo4 from "./assets/LOGO4.png";
import logo5 from "./assets/LOGO5.png";

import Image from "next/image";
import Aos from "aos";
import Link from "next/link";
import "aos/dist/aos.css";
import TextAos from "../textAos/textAos";

export default function Colaborations() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section > 
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Estoy orgulloso de haber colaborado con algunas empresas
                increíbles
              </h2>

              <a
                href="#Proyectos"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Proyectos
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
           
              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <Image src={logo1} width={40} height={40}></Image>
                </span>

                <h2 className="mt-2 font-bold">Molitalia</h2>

              </a>
             
              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <Image src={logo5} width={40} height={40}></Image>
                </span>

                <h2 className="mt-2 font-bold">Swiss Medical</h2>
              </a>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <Image src={logo2} width={27} height={27}></Image>
                </span>

                <h2 className="mt-2 font-bold">Cool Fresh</h2>

              </a>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
              >
                <Image src={logo4} width={65} height={65}></Image>

                <h2 className="mt-2 font-bold">Abs-ti</h2>

              </a>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
              >
                <Image src={logo3} width={30} height={30}></Image>
                <h2 className="mt-2 font-bold">Potro Lima</h2>

              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
