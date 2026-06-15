import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Form from '../components/form/form';
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from 'next/image';


export const metadata = {
  title: "Contact Study in Lithuania Centre | Lithuania Education Consultants in India",
  description: "Contact Study in Lithuania Centre for expert guidance on Lithuanian university admissions, scholarships, student visas, course selection, and study abroad support for Indian students",
  keywords: ["contact Study in Lithuania Centre", "Lithuania education consultants India", "study in Lithuania contact", "Lithuania admission consultants", "Lithuania visa consultants", "study abroad Lithuania consultants", "Lithuania university admission India", "Indian students Lithuania", "Lithuania counselling", "study in Lithuania support"],
  alternates: {
    canonical: "https://www.studyinlithuania.in/contact"
  },
    robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "website",
    title:
      "Contact Study in Lithuania Centre | Lithuania Education Consultants in India",
    description:
      "Get expert support for Lithuania university admissions, scholarships, student visas, and study abroad counselling.",
    url: "https://www.studyinlithuania.in/contact/",
    siteName: "Study in Lithuania Centre",
    images: [
      {
        url: "https://www.studyinlithuania.in/assets/images/contact/our-expert.webp",
        width: 1200,
        height: 630,
        alt: "Contact Study in Lithuania Centre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Contact Study in Lithuania Centre | Lithuania Education Consultants in India",
    description:
      "Contact our Lithuania education consultants for admissions, scholarships, student visa guidance, and course selection support.",
    images: [
      "https://www.studyinlithuania.in/assets/images/contact/our-expert.webp",
    ],
  },
}

const page = () => {

   const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.studyinlithuania.in/#organization",
        name: "Study in Lithuania Centre",
        url: "https://www.studyinlithuania.in/",
        logo: {
          "@type": "ImageObject",
          url: "https://www.studyinlithuania.in/images/logos/logo.png",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+919650133355",
          contactType: "student admissions support",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.studyinlithuania.in/#website",
        url: "https://www.studyinlithuania.in/",
        name: "Study in Lithuania Centre",
        publisher: {
          "@id": "https://www.studyinlithuania.in/#organization",
        },
      },
      {
        "@type": "ContactPage",
        "@id":
          "https://www.studyinlithuania.in/contact/#contactpage",
        url: "https://www.studyinlithuania.in/contact/",
        name: "Contact Study in Lithuania Centre",
        description:
          "Contact page for students seeking guidance on Lithuania university admissions, scholarships, student visas, and study abroad counselling.",
        isPartOf: {
          "@id": "https://www.studyinlithuania.in/#website",
        },
        about: {
          "@id": "https://www.studyinlithuania.in/#organization",
        },
      },
      {
        "@type": "EducationalOrganization",
        "@id":
          "https://www.studyinlithuania.in/#educationalorganization",
        name: "Study in Lithuania Centre",
        url: "https://www.studyinlithuania.in/",
        description:
          "Education consultancy helping Indian students study in Lithuania.",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
      },

      {
        "@type": "LocalBusiness",
        "@id":
          "https://www.studyinlithuania.in/contact/#localbusiness",
        name: "Study in Lithuania Centre",
        url: "https://www.studyinlithuania.in/",
        image: "https://www.studyinlithuania.in/images/logos/logo.png",
        telephone: "+919650133355",
        email: "info@studyinlithuania.in",
        address: {
          "@type": "PostalAddress",
          streetAddress: "First Floor, 18/1 -A, Jail Road, Opposite Tilak Nagar Metro Station Gate no - 4, Above Sona Baker, New Delhi-110058.",
          addressLocality: "Tilak Nagar",
          addressRegion: "Delhi",
          postalCode: "110058",
          addressCountry: "IN",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        priceRange: "$$",
      },

      {
        "@type": "Service",
        "@id": "https://www.studyinlithuania.in/contact/#service",
        name: "Lithuania Study Abroad Consultation",
        serviceType: "Education Consultancy",
        provider: {
          "@id": "https://www.studyinlithuania.in/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        description:
          "Student counselling, university selection, application support, scholarship guidance, visa documentation support, and pre-departure assistance for studying in Lithuania.",
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.studyinlithuania.in/contact/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.studyinlithuania.in/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact",
            item: "https://www.studyinlithuania.in/contact/",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Breadcrumb heading="We would be happy to answer all of your questions. Please fill in the contact form."/>
      <section className='max-w-6xl mx-auto'>
         <div className='px-5 py-10'>
             <div className=''>
                <h2 className='text-2xl md:text-4xl font-aino'>Study in Lithuania Contact – Get Expert Guidance for Your Future</h2>
                <h4 className='text-md md:text-lg font-roboto mt-3'>Connect With Lithuania Education Experts</h4>
                <p className='text-md font-inter mt-3 text-justify'>Planning to study in Lithuania? Whether you&#39;re exploring universities, looking for scholarship opportunities, or need guidance on the Lithuania student visa process, our team is here to help.</p>
                <p className='text-md font-inter mt-3 text-justify'>We understand that studying abroad is one of the most important decisions in a student&#39;s life. Our experienced advisors provide personalised guidance, helping students choose the right university, course, and career pathway while making the Lithuania admission and visa process smooth and stress-free.</p>
             </div>
             <div className='mt-10'>
              <div className='grid md:grid-cols-3 grid-cols-1 gap-5 border-2 border-dotted border-secondary p-4 rounded-lg bg-gray-100'>
                <div className='col-span-1 px-3'>
                <h2 className='text-xl md:text-2xl font-aino mt-3'>Book Your Free Study in Lithuania Consultation</h2>
                <p className='text-md font-inter mt-3 text-justify'>Not sure where to start? Schedule a free consultation and receive personalised guidance based
                on your academic background, career goals, and preferred study programme.</p>
                <div className='mt-5'>
                <h4 className='text-lg font-inter font-semibold text-primary'>Follow us on :-</h4>
                <ul className='flex mt-2 gap-3 items-center'>
                  <li className=''><Link className="px-2 py-2 flex justify-center items-center rounded-full bg-tertiary text-white hover:scale-110 duration-300 ease-in-out" href="https://www.facebook.com/Indoeuropean.in" target="_blank"><FaFacebook className='size-5 inline-block'/></Link></li>
                  <li className=''><Link className="px-2 py-2 flex justify-center items-center rounded-full bg-tertiary text-white hover:scale-110 duration-300 ease-in-out" href="https://www.instagram.com/indo_european" target="_blank"><FaInstagram  className='size-5 inline-block'/></Link></li>
                  <li className=''><Link className="px-2 py-2 flex justify-center items-center rounded-full bg-tertiary text-white hover:scale-110 duration-300 ease-in-out" href="https://www.youtube.com/IEESIndoEuropean" target="_blank"><FaYoutube  className='size-5 inline-block'/></Link></li>
                </ul>
                </div>
                </div>
                <div className='col-span-2'>
                  <Form />
                </div>
              </div>
             </div>
             <div className='my-10 mx-5'>
                <h4 className='mt-5 text-xl md:text-2xl font-aino'>Our Expert Support Includes:</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <ul className='space-y-2 mt-3'>
                    <li className='text-lg font-roboto'><IoIosArrowForward className='inline-block size-6'/>&nbsp;University and course selection</li>
                    <li className='text-lg font-roboto'><IoIosArrowForward className='inline-block size-6'/>&nbsp;Lithuania admission guidance</li>
                    <li className='text-lg font-roboto'><IoIosArrowForward className='inline-block size-6'/>&nbsp;Scholarship assistance</li>
                    <li className='text-lg font-roboto'><IoIosArrowForward className='inline-block size-6'/>&nbsp;Lithuania student visa support</li>
                    <li className='text-lg font-roboto'><IoIosArrowForward className='inline-block size-6'/>&nbsp;Document verification</li>
                    <li className='text-lg font-roboto'><IoIosArrowForward className='inline-block size-6'/>&nbsp;Interview preparation</li>
                    <li className='text-lg font-roboto'><IoIosArrowForward className='inline-block size-6'/>&nbsp;Pre-departure assistance</li>
                </ul>
                <Image className="rounded-md" width={380} height={180} src="/images/contact/our-expert.webp" alt="Meet Our Experts" />
                </div>
                <p className='text-base text-inter mt-3 text-justify'>We help students make informed decisions and prepare for a successful academic future in
                    Lithuania.</p>
              </div>
             <div className='my-10 mx-5'>
                   <h2 className='text-2xl md:text-4xl font-aino'>Visit Our Office for Personalised Guidance</h2>
                   <p className='mt-3'>For students who prefer face-to-face counselling, we welcome you to connect with our
                      experienced advisors and discuss their study abroad plans in detail.</p>
                      <div className='py-5'>
                      <div className='border-2 border-dotted border-secondary p-4 rounded-md'>
                        <div>
                          <h4 className='text-xl md:text-2xl font-semibold font-roboto'>
                            Address:
                          </h4>
                          <p className='text-lg font-inter mt-3'>
                            First Floor, 18/1 -A, Jail Road, Opposite Tilak Nagar Metro Station Gate no - 4,
                            Above Sona Baker, New Delhi-110058.
                          </p>
                        </div>
                        <div className='mt-3'>
                          <iframe
                            className='w-full rounded-md'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.7675210874636!2d77.09410477475721!3d28.63559637566306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04bee270eea1%3A0xa4b0610ae05bae2d!2sIndo%20European%20%7C%20Study%20Abroad%20Consultants%20-%20Head%20Office!5e1!3m2!1sen!2sin!4v1780644883915!5m2!1sen!2sin"
                            height="320"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                          />
                        </div>
                      </div>
                   </div>
              </div>
         </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </>
  )
}

export default page