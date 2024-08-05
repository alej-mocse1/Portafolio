"use client";

import Image from "next/image";
import imgDeSKTOP from "../../assets/dev.jpg";
import styles from "./AboutMe.module.css";
import CardPresent from "../Forms/cardsPresentation/cardsPresentation";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section
      className="overflow-hidden bg-gray sm:grid sm:grid-cols-2 sm:items-center"
      id="inicio"
    >
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Hola soy Alejandro!. Full Stack Developer
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            Comencé mi camino como desarrollador en febrero de 2022. He
            realizado trabajo remoto para agencias/empresas en toda América
            Latina y he colaborado con personas talentosas para crear productos
            digitales durante todo este tiempo, soy curioso por naturaleza y
            trabajo perpetuamente para mejorar mis habilidades. un problema a la
            vez
          </p>

          <div className="mt-4 md:mt-8">
            <button
              className="inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
              type="button"
            >
              <Link href="https://api.whatsapp.com/send?phone=2364556775">
                Contacto
              </Link>
            </button>
          </div>
        </div>
      </div>

      <Image
        alt=""
        src={imgDeSKTOP}
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
      />

      <span className="relative flex justify-center">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
      </span>
    </section>
  );
}
