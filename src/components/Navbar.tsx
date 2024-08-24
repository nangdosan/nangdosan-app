"use client";

import Link from "next/link";
import Image from "next/image";
import ButtonPrimary from "./ButtonPrimary";
import { FiAlignJustify } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="fixed inset-x-0 top-0 px-10 md:mx-24 py-3 bg-black/10 backdrop-blur-md flex justify-between items-center z-50">
        <div>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={32}
              height={32}
              className="scale-75 md:scale-100"
            />
          </Link>
        </div>
        <div className="space-x-7 text-gray-300 hidden md:block">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="#projects" className="hover:text-gray-400">
            Projects
          </Link>
          <Link
            href="https://www.linkedin.com/in/danang-hapis-fadillah-682878202/"
            className="hover:text-gray-400"
          >
            LinkedIn
          </Link>
          <Link
            href="https://www.kaggle.com/dananghapisfadillah"
            className="hover:text-gray-400"
          >
            Kaggle
          </Link>
        </div>
        <ButtonPrimary href="/contact" className="hidden md:block">
          Contact
        </ButtonPrimary>
        <FiAlignJustify
          size={24}
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
      </nav>

      {/* menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xl">
          <div className="absolute top-0 right-0 p-5 z-50">
            <RxCross1
              size={24}
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
          <div className="mt-20 ml-5 space-y-7 text-gray-300 flex flex-col">
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link href="#projects" className="hover:text-gray-400">
              Projects
            </Link>
            <Link
              href="https://www.linkedin.com/in/danang-hapis-fadillah-682878202/"
              className="hover:text-gray-400"
            >
              LinkedIn
            </Link>
            <Link
              href="https://www.kaggle.com/dananghapisfadillah"
              className="hover:text-gray-400"
            >
              Kaggle
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
