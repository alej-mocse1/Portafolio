"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Prices() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>

      <section className="bg-gray" id="Servicios" >
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Desarrollo de aplicaciones de alta calidad
            </h2>
          </div>

          <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
      <div className="p-6 sm:px-8">
        <h2 className="text-lg font-medium text-gray-900">
          <p className="mt-2 sm:mt-4">
            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">    Desarrollos Frontend </strong>
          </p>
        </h2>

        <p className="mt-2 text-gray-700">
         Desarrollos Frontend, ultimos frameworks y optimización de rendimiento web.
        </p>


        <a
          className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
          href="https://api.whatsapp.com/send?phone=2364556775"
        >
         Contacto
        </a>
      </div>

      <div className="p-6 sm:px-8">
        <p className="text-lg font-medium text-gray-900 sm:text-xl">Tecnológias</p>

        <ul className="mt-2 space-y-2 sm:mt-4">
          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> TypeScript </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700">JavaScript </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> Angular </span>
          </li>

          <li className="flex items-center gap-1">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> React.js </span>
          </li>

          <li className="flex items-center gap-1">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> Html </span>
          </li>

          <li className="flex items-center gap-1">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span className="text-gray-700"> Css </span>
          </li>
        </ul>
      </div>
    </div>

    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
      <div className="p-6 sm:px-8">
        <h2 className="text-lg font-medium text-gray-900">
          <p className="mt-2 sm:mt-4">
            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">   Optimización web </strong>
          </p>
        </h2>

        <p className="mt-2 text-gray-700">
        Optimización web, mejora de velocidad, rendimiento y SEO de sitios para una mejor excepcional de usuario.
        </p>


        <a
          className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
          href="https://api.whatsapp.com/send?phone=2364556775"
        >
         Contacto
        </a>
      </div>

      <div className="p-6 sm:px-8">
        <p className="text-lg font-medium text-gray-900 sm:text-xl">Mejoras</p>

        <ul className="mt-2 space-y-2 sm:mt-4">
          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> Prácticas SEO efectivas </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700">Optimización web </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> Mejora de velocidad </span>
          </li>

          <li className="flex items-center gap-1">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700">Experiencia de Usuario </span>
          </li>

        </ul>
      </div>
    </div>


    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
      <div className="p-6 sm:px-8">
        <h2 className="text-lg font-medium text-gray-900">
          <p className="mt-2 sm:mt-4">
            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">   Desarrollos Backend </strong>
          </p>
        </h2>

        <p className="mt-2 text-gray-700">
          Desarrollos Backend, sólida construcción de sistemas robustos y eficientes.
        </p>


        <a
          className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
          href="https://api.whatsapp.com/send?phone=2364556775"
        >
         Contacto
        </a>
      </div>

      <div className="p-6 sm:px-8">
        <p className="text-lg font-medium text-gray-900 sm:text-xl">Tecnológias</p>

        <ul className="mt-2 space-y-2 sm:mt-4">
          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> TypeScript </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700">JavaScript </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> PostgreSQL </span>
          </li>

          <li className="flex items-center gap-1">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700">Node.js </span>
          </li>

          <li className="flex items-center gap-1">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700">Nest.js </span>
          </li>

        </ul>
      </div>
    </div>
  </div>
</div>
        </div>
      </section>

    </>
  );
}
