"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import { FaCaretDown } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const darkHeader = !isHomePage || scrolled;

  return (
    <header
      className={`w-full top-0 z-50 shadow-sm transition-all duration-300
      ${
        isHomePage
          ? `fixed ${
              scrolled
                ? "bg-primary"
                : "bg-black/5 hover:bg-primary"
            }`
          : "sticky bg-primary"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-24">
          <Link href="/" className="flex items-center">
            <Image
              src={
                darkHeader
                  ? "/images/logos/light-logo.webp"
                  : "/images/logos/logo.webp"
              }
              alt="Study in Lithuania"
              width={120}
              height={45}
              loading="lazy"
              className="transition duration-300"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 font-medium">
            <Link
              href="/lithuania"
              className="text-sm font-roboto font-medium text-white hover:text-gray-200 transition"
            >
              Lithuania
            </Link>

            <Link
              href="/study"
              className="text-sm font-roboto font-medium text-white hover:text-gray-200 transition"
            >
              Study
            </Link>

            <Link
              href="/living"
              className="text-sm font-roboto font-medium text-white hover:text-gray-200 transition"
            >
              Living
            </Link>

            <Link
              href="/student-ambassadors"
              className="text-sm font-roboto font-medium text-white hover:text-gray-200 transition"
            >
              Student <br />
              Ambassador
            </Link>

            <Link
              href="/blogs"
              className="text-sm font-roboto font-medium text-white hover:text-gray-200 transition"
            >
              Blogs
            </Link>

            <Link
              href="/gallery"
              className="text-sm font-roboto font-medium text-white hover:text-gray-200 transition"
            >
              Gallery
            </Link>

            <Link
              href="/faq"
              className="text-sm font-roboto font-medium text-white hover:text-gray-200 transition"
            >
              FAQ
            </Link>

            <Link
              href="/about"
              className="text-sm font-roboto font-medium text-white hover:text-gray-200 transition"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="text-sm font-roboto font-medium text-white hover:text-gray-200 transition"
            >
              Contact Us
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4 bg-white px-2 py-1 rounded-lg animate-zoomInOut">
            <Link
              href="https://zoom.us/j/91022278457#success"
              target="_blank"
            >
              <Image
                height={45}
                width={110}
                src={"/images/logos/meet-exp.png"}
                alt="study in lithuania consultants"
              />
              <span className="text-md font-semibold text-[#2766e0]">
                Join Via Zoom
              </span>
            </Link>
          </div>
          <button
            className="lg:hidden text-2xl text-white transition duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-primary shadow-md px-4 py-5 space-y-4 text-base sm:text-lg transition duration-300">
          <Link
            onClick={() => setMenuOpen(false)}
            href="/lithuania"
            className="block text-gray-100 font-roboto hover:text-white"
          >
            Lithuania
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            href="/study"
            className="block text-gray-100 font-roboto hover:text-white"
          >
            Study
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            href="/living"
            className="block text-gray-100 font-roboto hover:text-white"
          >
            Living
          </Link>

          <Link
            onClick={() => setMenuOpen(false)}
            href="/student-ambassadors"
            className="block font-medium font-roboto text-gray-100 hover:text-white"
          >
            Student Ambassador
          </Link>

          <Link
            onClick={() => setMenuOpen(false)}
            href="/blogs"
            className="block font-medium font-roboto text-gray-100 hover:text-white"
          >
            Blogs
          </Link>

          <Link
            onClick={() => setMenuOpen(false)}
            href="/gallery"
            className="block font-medium font-roboto text-gray-100 hover:text-white"
          >
            Gallery
          </Link>

          <Link
            onClick={() => setMenuOpen(false)}
            href="/faq"
            className="block font-medium font-roboto text-gray-100 hover:text-white"
          >
            FAQ
          </Link>

          <Link
            onClick={() => setMenuOpen(false)}
            href="/about"
            className="block font-medium font-roboto text-gray-100 hover:text-white"
          >
            About Us
          </Link>

          <Link
            onClick={() => setMenuOpen(false)}
            href="/contact"
            className="block font-medium font-roboto text-gray-100 hover:text-white"
          >
            Contact Us
          </Link>

          <div className="inline-block gap-4 bg-white px-2 py-1 rounded-lg animate-zoomInOut">
            <Link
              href="https://zoom.us/j/91022278457#success"
              target="_blank"
            >
              <Image
                className="inline-block"
                height={60}
                width={110}
                src={"/images/logos/meet-exp.png"}
                alt="study in lithuania consultants"
              />

              <span className="ms-3 text-lg font-semibold text-[#2766e0]">
                Join Via Zoom
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;