"use client";

import styles from "./NavBar.module.css";
import Image from "next/image";
import logo from "../../assets/logo.png";
import logoWsp from "../../assets/logoWSP.jpg";
import Close from "../../assets/close-line.png";
import Open from "../../assets/menu-line.png";
import Link from "next/link";

import { useState } from "react";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="bg-white" >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Image
              src={logo}
              className={styles.imgLogo}
              width={60}
              height={40}
            />
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-black-600 transition hover:text-gray-500/75"
                    href="#inicio"
                  >
                    {" "}
                    Inicio{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-black-600 transition hover:text-gray-500/75"
                    href="#Servicios"
                  >
                    Servicios
                  </a>
                </li>

                <li>

                    <Link href="#Proyectos">Proyectos</Link>
                  
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <button
                  className="inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                  type="button"
                >
                  <Link
                    href="https://api.whatsapp.com/send?phone=2364556775"
                    className={styles.aContact}
                  >
                    Contacto
                  </Link>
                </button>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
