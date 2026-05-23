"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileStudyOpen, setMobileStudyOpen] = useState(false);
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    setScrolled(window.scrollY > 50)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    handleScroll()
  }, [pathname])

  return (
    <header className={`w-full fixed top-0 z-50 shadow-sm hover:bg-primary ${scrolled ? 'md:bg-primary' : 'md:bg-black/5'} bg-primary group/item-1 transition duration-300`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-24">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/logo.webp"
              alt="Study in Lithuania"
              width={160}
              height={70}
              loading="lazy"
              className={`hidden group-hover/item-1:hidden ${scrolled ? 'hidden' : 'md:block'} transition duration-300`}
            />
            <Image
              src="/images/logos/light-logo.webp"
              alt="Study in Lithuania"
              width={160}
              height={70}
              loading="lazy"
              className={`group-hover/item-1:block ${scrolled ? 'block':'md:hidden'} transition duration-300`}
            /> 
          </Link>
          <nav className="hidden md:flex items-center gap-8 xl:gap-10 font-medium">
            <div className="relative group">
              <span className={`text-sm md:text-md lg:text-base font-roboto flex items-center font-medium text-gray-100 hover:text-white ${scrolled && 'text-white'} cursor-pointer`}>
                Study &nbsp;<FaCaretDown className="size-5"/>
              </span>
              <div className="absolute top-12 left-0 bg-primary shadow-lg w-40 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                <Link href="/study-in-lithuania-courses" className="font-roboto block px-4 font-medium text-gray-100 py-2 text-sm md:text-md lg:text-base hover:text-white">
                  Courses
                </Link>
                <Link href="/study-in-lithuania-admission" className="font-roboto block px-4 py-2 font-medium text-gray-100 text-sm md:text-md lg:text-base hover:text-white">
                  Admission
                </Link>
                <Link href="/study-and-work-in-lithuania" className="font-roboto block px-4 py-2 font-medium text-gray-100 text-sm md:text-md lg:text-base hover:text-white">
                  Working
                </Link>
                <Link href="/lithuania-visa-and-residence-permit" className="font-roboto block px-4 py-2 font-medium text-gray-100 text-sm md:text-md lg:text-base hover:text-white">
                  Visa & PR
                </Link>
              </div>
            </div>

            <Link href="/living" className={`text-sm md:text-md lg:text-base font-roboto font-medium text-gray-100 hover:text-white ${scrolled && 'text-white'} transition`}>
              Living
            </Link>
            <Link href="/student-ambassador" className={`text-sm md:text-md lg:text-base font-roboto font-medium text-gray-100 hover:text-white ${scrolled && 'text-white'} transition`}>
              Student <br />Ambassador
            </Link>

            <Link href="/blogs" className={`text-sm font-roboto md:text-md lg:text-base font-medium text-gray-100 hover:text-white ${scrolled && 'text-white'} transition`}>
             Blogs
            </Link>
            <Link href="/gallery" className={`text-sm font-roboto md:text-md lg:text-base font-medium text-gray-100 hover:text-white ${scrolled && 'text-white'} transition`}>
             Gallery
            </Link>
            <Link href="/faq" className={`text-sm font-roboto md:text-md lg:text-base font-medium text-gray-100 hover:text-white ${scrolled && 'text-white'} transition`}>
             FAQ
            </Link>
            <Link href="/about" className={`text-sm font-roboto md:text-md lg:text-base font-medium text-gray-100 hover:text-white ${scrolled && 'text-white'} transition`}>
              About Us
            </Link>

            {/* <Link href="/lithuania-admission-and-visa-services" className={`font-roboto text-sm md:text-md lg:text-base font-medium text-gray-100 hover:text-white ${scrolled && 'text-white'} transition`}>
              Services
            </Link> */}

            <Link href="/contact-lithuania-consultant" className={`font-roboto text-sm md:text-md lg:text-base font-medium text-gray-100 hover:text-white ${scrolled && 'text-white'} transition`}>
              Contact Us
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4 bg-white px-2 py-1 rounded-lg animate-zoomInOut">
            <Link
              href="https://zoom.us/j/91022278457#success"
              target="_blank"
              // className={`cursor-pointer text-sm md:text-md lg:text-base px-4 py-2 rounded-md hover:bg-white transition duration-300 ${scrolled ? 'bg-gray-100 text-primary':'bg-primary text-white'} group-hover/item-1:bg-gray-100 group-hover/item-1:text-primary font-medium`}
            >
             <Image className="" height={45} width={110} src={'/images/logos/meet-exp.png'} alt="study in lithuania consultants" /> <span className="text-md font-semibold text-[#2766e0]">Join Via Zoom</span>
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
              Study&nbsp;<FaCaretDown className="size-4"/>
            </button>

            {mobileStudyOpen && (
              <div className="flex flex-col ml-4 mt-2 space-y-2 text-sm transition duration-300">
                <Link href="/study-in-lithuania-courses" className="font-medium font-roboto text-gray-100 hover:text-white">Courses</Link>
                <Link href="/study-in-lithuania-admission" className="font-medium font-roboto text-gray-100 hover:text-white">Admission</Link>
                <Link href="/study-and-work-in-lithuania" className="font-medium font-roboto text-gray-100 hover:text-white">Working</Link>
                <Link href="/lithuania-visa-and-residence-permit" className="font-medium font-roboto text-gray-100 hover:text-white">Visa & PR</Link>
              </div>
            )}
          </div>

          <Link href="/living-in-lithuania" className="block text-gray-100 font-roboto hover:text-white">
            Living
          </Link>


          <Link href="/student-ambassador" className="block font-medium font-roboto text-gray-100 hover:text-white">
            Student Ambassador
          </Link>

          <Link href="/blogs" className="block font-medium font-roboto text-gray-100 hover:text-white">
            Blogs
          </Link>

          <Link href="/gallery" className="block font-medium font-roboto text-gray-100 hover:text-white">
            Gallery
          </Link>

          <Link href="/faq" className="block font-medium font-roboto text-gray-100 hover:text-white">
            FAQ
          </Link>
          
          <Link href="/about" className="block font-medium font-roboto text-gray-100 hover:text-white">
            About Us
          </Link>

          {/* <Link href="/lithuania-admission-and-visa-services" className="block font-roboto font-medium text-gray-100 hover:text-white">
            Services
          </Link> */}

          <Link href="/contact-lithuania-consultant" className="block font-medium font-roboto text-gray-100 hover:text-white">
            Contact Us
          </Link>
          {/* <Link
            href="https://zoom.us/j/91022278457#success"
            target="_blank"
            className="block mt-4 bg-gray-100 hover:bg-white text-primary font-medium px-4 py-2 rounded-md text-center"
          >
           <FaVideo className="size-5 inline-block" />&nbsp; Get Expert Advice
          </Link> */}
            <div className="inline-block gap-4 bg-white px-2 py-1 rounded-lg animate-zoomInOut">
            <Link
              href="https://zoom.us/j/91022278457#success"
              target="_blank"
              // className={`cursor-pointer text-sm md:text-md lg:text-base px-4 py-2 rounded-md hover:bg-white transition duration-300 ${scrolled ? 'bg-gray-100 text-primary':'bg-primary text-white'} group-hover/item-1:bg-gray-100 group-hover/item-1:text-primary font-medium`}
            >
             <Image className="inline-block" height={60} width={110} src={'/images/logos/meet-exp.png'} alt="study in lithuania consultants" /> <span className="ms-3 text-lg font-semibold text-[#2766e0]">Join Via Zoom</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;