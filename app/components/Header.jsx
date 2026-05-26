"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileStudyOpen, setMobileStudyOpen] = useState(false);
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

          <nav className="hidden md:flex items-center gap-8 xl:gap-10 font-medium">
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
              href="/student-ambassador"
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
              href="/contact-lithuania-consultant"
              className="text-sm font-roboto font-medium text-white hover:text-gray-200 transition"
            >
              Contact Us
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4 bg-white px-2 py-1 rounded-lg animate-zoomInOut">
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
            className="md:hidden text-2xl text-white transition duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-primary shadow-md px-4 py-5 space-y-4 text-base sm:text-lg transition duration-300">
          <div>
            <button
              onClick={() => setMobileStudyOpen(!mobileStudyOpen)}
              className="w-full flex items-center text-left font-roboto font-medium text-gray-100 hover:text-white transition duration-300"
            >
              Study&nbsp;<FaCaretDown className="size-4" />
            </button>

            {mobileStudyOpen && (
              <div className="flex flex-col ml-4 mt-2 space-y-2 text-sm transition duration-300">
                <Link
                  href="/study-in-lithuania-courses"
                  className="font-medium font-roboto text-gray-100 hover:text-white"
                >
                  Courses
                </Link>

                <Link
                  href="/study-in-lithuania-admission"
                  className="font-medium font-roboto text-gray-100 hover:text-white"
                >
                  Admission
                </Link>

                <Link
                  href="/study-and-work-in-lithuania"
                  className="font-medium font-roboto text-gray-100 hover:text-white"
                >
                  Working
                </Link>

                <Link
                  href="/lithuania-visa-and-residence-permit"
                  className="font-medium font-roboto text-gray-100 hover:text-white"
                >
                  Visa & PR
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/living-in-lithuania"
            className="block text-gray-100 font-roboto hover:text-white"
          >
            Living
          </Link>

          <Link
            href="/student-ambassador"
            className="block font-medium font-roboto text-gray-100 hover:text-white"
          >
            Student Ambassador
          </Link>

          <Link
            href="/blogs"
            className="block font-medium font-roboto text-gray-100 hover:text-white"
          >
            Blogs
          </Link>

          <Link
            href="/gallery"
            className="block font-medium font-roboto text-gray-100 hover:text-white"
          >
            Gallery
          </Link>

          <Link
            href="/faq"
            className="block font-medium font-roboto text-gray-100 hover:text-white"
          >
            FAQ
          </Link>

          <Link
            href="/about"
            className="block font-medium font-roboto text-gray-100 hover:text-white"
          >
            About Us
          </Link>

          <Link
            href="/contact-lithuania-consultant"
            className="block font-medium font-roboto text-gray-100 hover:text-white"
          >
            Contact Us
          </Link>

          {/* Mobile Zoom */}
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