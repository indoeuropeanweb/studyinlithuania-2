"use client";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter, FaArrowRightLong, FaRankingStar } from "react-icons/fa6";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { TbCircleDashedLetterL } from "react-icons/tb";
import { BsBank } from "react-icons/bs";
import { SiEuropeanunion } from "react-icons/si";
import { AiFillSafetyCertificate } from "react-icons/ai";
import Form from "./components/form/form";

const HomeClient = () => {

  const backgroundHero = {
   backgroundImage: "url('/images/home/hero-girl.avif')",
   backgroundSize: "cover",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat"
}
  const contactFormBanner = {
   backgroundImage: "url('/images/home/contact-form-banner.avif')",
   backgroundSize: "cover",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat"
}

  return (
    <div className='min-h-screen bg-zinc-50 font-sans'>
    <section className={`h-full w-full`}>
      <main style={backgroundHero} className="min-h-140 xl:min-h-180 w-full">
        <div id="hero"></div>
        <div className="max-w-6xl h-full mx-auto">
        <div className="mx-5 min-h-120 xl:min-h-160 flex items-center">
        <div className="max-w-md md:max-w-xl">
        <h1 className="font-aino text-2xl md:text-4xl text-white leading-14">
            Your official national guide to higher education in the Republic of Lithuania?
        </h1>
        </div>
        </div>
        <div className="mx-5 flex items-center">
            <p className="text-white text-base">share this page</p>
            <ul className="flex items-center ms-3 gap-2">
                <li><Link className="" href={''} target="_blank"><FaFacebookF className="size-4 text-white"/></Link></li>
                <li><Link className="" href={''} target="_blank"><FaXTwitter className="size-6 text-white"/></Link></li>
                <li><Link className="" href={''} target="_blank"><FaLinkedinIn className="size-5 text-white"/></Link></li>
            </ul>
        </div>
       </div>   
    </main>
    </section>
    <section className="max-w-6xl mx-auto">
    <div className="py-10 mx-4">
      <h4 className="font-aino text-xl md:text-2xl mb-4">What is...</h4>
      <h2 className="font-aino text-2xl md:text-4xl mb-4">Study in Lithuania?</h2>
      <p className="text-lg md:text-xl mb-6">
        Study in Lithuania is your official national guide to higher education in the Republic of Lithuania and is maintained by the Education and Youth Board of Lithuania. Our aim is to promote Lithuania as an attractive study destination and promote the possibilities for studying for international students.
        <br />
        <br />
        More than 150 degree programmes offered by our partner institutions are fully taught in English. We hope that all of you who have made the decision to come to study in Lithuania will experience something new and gain valuable experiences for the rest of your life.
     </p>
     <div className="flex justify-end items-end">
     <Link href={'/about'} className="text-blue-500 font-roboto hover:underline">Read more <FaArrowRightLong className="inline-block"/></Link>
     </div>
     </div>
    </section>
    <section className="max-w-6xl mx-auto">
      <div className="border-t border-primary">
      <div className="mx-4 mt-4">
          <h2 className="font-aino text-2xl md:text-4xl">Programme</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
          <div className="relative">
            <div className="">
               <Image className="w-full h-50 md:h-auto" width={360} height={60} src={'/images/home/bachelors.avif'} alt="bachelors in lithuania" />
               <div className="relative z-3 flex justify-center items-center flex-col gap-5 px-4 py-6">
               <h4 className="text-white text-2xl md:text-2xl font-aino">Bachelor's</h4>
               <p className="text-white text-sm md:text-md text-center">A bachelor’s degree provides you with the basic understanding and knowledge of the study programme that you have chosen.</p>
               <Link className="text-white px-6 py-2 rounded-full border border-white text-md md:text-base hover:bg-white hover:text-primary duration-300 ease-in-out" href={'/learn-more'}>Learn More <FaArrowRightLong className="size-5 inline-block"/></Link>
               </div>
            </div>
            <div className="absolute z-2 bottom-0 bg-linear-to-t from-primary via-primary to-tertiary/10 w-full h-full" />
          </div>
          <div className="relative">
            <div className="">
               <Image className="w-full h-50 md:h-auto" width={360} height={60} src={'/images/home/masters.avif'} alt="bachelors in lithuania" />
               <div className="relative z-3 flex justify-center items-center flex-col gap-5 px-4 py-6">
               <h4 className="text-white text-lg md:text-2xl font-aino">Master's</h4>
               <p className="text-white text-sm md:text-md text-center">The European education system is famous for its unique and high quality master’s degree programmes all over the world.</p>
               <Link className="text-white px-6 py-2 rounded-full border border-white text-md md:text-base hover:bg-white hover:text-tertiary duration-300 ease-in-out" href={'/learn-more'}>Learn More <FaArrowRightLong className="size-5 inline-block"/></Link>
               </div>
            </div>
            <div className="absolute z-2 bottom-0 bg-linear-to-t from-tertiary via-tertiary to-tertiary/10 w-full h-full" />
          </div>
          <div className="relative">
            <div className="">
               <Image className="w-full h-50 md:h-auto" width={360} height={60} src={'/images/home/doctoral.avif'} alt="bachelors in lithuania" />
               <div className="relative z-3 flex justify-center items-center flex-col gap-5 px-4 py-6">
               <h4 className="text-white text-lg md:text-2xl font-aino">Doctoral</h4>
               <p className="text-white text-sm md:text-md text-center">Doctoral studies in Estonia are without tuition fee. There are PhD students from more than 50 countries studying here</p>
               <Link className="text-white px-6 py-2 rounded-full border border-white text-md md:text-base hover:bg-white hover:text-primary duration-300 ease-in-out" href={'/learn-more'}>Learn More <FaArrowRightLong className="size-5 inline-block"/></Link>
               </div>
            </div>
            <div className="absolute z-2 bottom-0 bg-linear-to-t from-primary via-primary to-tertiary/10 w-full h-full" />
          </div>
          <div className="relative">
            <div>
               <Image className="w-full h-50 md:h-auto lg:max-h-47" width={360} height={60} src={'/images/home/short-courses.avif'} alt="bachelors in lithuania" />
               <div className="relative z-3 flex justify-center items-center flex-col gap-5 px-4 py-6">
               <h4 className="text-white text-lg md:text-2xl font-aino">Short Courses</h4>
               <p className="text-white text-sm md:text-md text-center">Estonian universities offer various international short courses (1-4 weeks) for applicants.</p>
               <Link className="text-white px-6 py-2 rounded-full border border-white text-md md:text-base hover:bg-white hover:text-tertiary duration-300 ease-in-out" href={'/learn-more'}>Learn More <FaArrowRightLong className="size-5 inline-block"/></Link>
            </div>
            </div>
            <div className="absolute z-2 bottom-0 bg-linear-to-t from-tertiary via-tertiary to-tertiary/10 w-full h-full" />
          </div>
          </div>
      </div>
      </div>
    </section>
    <section className="max-w-6xl mx-auto">
      <div className="py-12 px-4 flex flex-col justify-center items-center gap-6">
        <h2 className="font-aino text-2xl md:text-4xl">Application deadlines are approaching</h2>
        <p className="font-roboto text-lg md:text-base">Visit our online admission system to apply to Bachelor's, Master's or Doctoral programmes.</p>
      <Link className="px-6 py-2 bg-primary hover:bg-primary/75 duration-300 ease-in-out text-white text-lg rounded-full" href={'/'}>Go to DreamApply</Link>
      </div>
    </section>
    <section className="">
        <div className="relative">
          <Image className="h-auto w-full max-h-200" width={1080} height={600} src="/images/home/why-lithuania.avif" alt="Study in Lithuania" />
          <div className="absolute z-2 bottom-0 w-full h-full bg-linear-to-t from-primary via-primary to-primary/10" />
          <h2 className="absolute top-12 left-1/2 -translate-x-1/2 z-3 text-2xl md:text-4xl font-aino">why Lithuania?</h2>
          <div className="relative z-3 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-5 px-8">
              <div className="mx-auto">
                 <Image className="mb-5 rounded-md" width={360} height={480} src="/images/home/map.avif" alt="study abroad lithuania map"/>
              </div>
              <div className="mb-5">
                 <ul className="pr-5">
                  <li className="flex items-center gap-1 text-white my-10"><TbCircleDashedLetterL className="inline-block size-10 shrink-0" />&nbsp;<p className="text-sm md:text-md">Lithuania is an e-society, with electronic ID-cards, e-government, e-health, e-school, e-parking and so much more. You would be living in a very unique country!</p></li>
                  <li className="flex items-center gap-1 text-white my-10"><BsBank className="inline-block size-10 shrink-0" />&nbsp;<p className="text-sm md:text-md">It takes only about 20 minutes to found your own company online and 100% of banking is done online.</p></li>
                  <li className="flex items-center gap-1 text-white my-10"><SiEuropeanunion className="inline-block size-10 shrink-0" />&nbsp;<p className="text-sm md:text-md">Europe's start-up hot-spot!</p></li>
                  <li className="flex items-center gap-1 text-white my-10"><AiFillSafetyCertificate className="inline-block size-10 shrink-0" />&nbsp;<p className="text-sm md:text-md">One of the safest countries in the world.</p></li>
                  <li className="flex items-center gap-1 text-white my-10"><FaRankingStar className="inline-block size-10 shrink-0" />&nbsp;<p className="text-sm md:text-md">Ranks 2nd place for internet freedom in the world.</p></li>
                 </ul>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section className="max-w-6xl mx-auto">
      <div className="">
      <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <div className="">
               <Image className="w-full h-50 md:h-auto" width={360} height={60} src={'/images/home/scholarships.avif'} alt="scholarships in lithuania" />
               <div className="relative z-3 flex justify-center items-center flex-col gap-5 px-4 py-6">
               <h4 className="text-white text-2xl md:text-2xl font-aino">Scholarships</h4>
               <p className="text-white text-sm md:text-md text-center">Estonian government and universities have initiated various scholarship schemes in order to support international students who are interested in studying in Estonia.</p>
               <Link className="text-white px-6 py-2 rounded-full border border-white text-md md:text-base hover:bg-white hover:text-primary duration-300 ease-in-out" href={'/learn-more'}>Learn More <FaArrowRightLong className="size-5 inline-block"/></Link>
               </div>
            </div>
            <div className="absolute z-2 bottom-0 bg-linear-to-t from-primary via-primary to-tertiary/10 w-full h-full" />
          </div>
          <div className="relative">
            <div className="">
               <Image className="w-full h-50 md:h-auto" width={360} height={60} src={'/images/home/admission.avif'} alt="admission in lithuania" />
               <div className="relative z-3 flex justify-center items-center flex-col gap-5 px-4 py-6">
               <h4 className="text-white text-lg md:text-2xl font-aino">Admission</h4>
               <p className="text-white text-sm md:text-md text-center">Before applying to study in Estonia, please read the relevant information about study programmes, admission process, requirements for applicants, tuition fees and deadlines.</p>
               <Link className="text-white px-6 py-2 rounded-full border border-white text-md md:text-base hover:bg-white hover:text-tertiary duration-300 ease-in-out" href={'/learn-more'}>Learn More <FaArrowRightLong className="size-5 inline-block"/></Link>
               </div>
            </div>
            <div className="absolute z-2 bottom-0 bg-linear-to-t from-tertiary via-tertiary to-tertiary/10 w-full h-full" />
          </div>
          <div className="relative">
            <div className="">
               <Image className="w-full h-50 md:h-auto" width={360} height={60} src={'/images/home/working.avif'} alt="working in lithuania" />
               <div className="relative z-3 flex justify-center items-center flex-col gap-5 px-4 py-6">
               <h4 className="text-white text-lg md:text-2xl font-aino">Working</h4>
               <p className="text-white text-sm md:text-md text-center">International students in Estonia do not need an additional working permit to work while studying full time. They are allowed to work on the condition that it does not interfere with their studies.</p>
               <Link className="text-white px-6 py-2 rounded-full border border-white text-md md:text-base hover:bg-white hover:text-primary duration-300 ease-in-out" href={'/learn-more'}>Learn More <FaArrowRightLong className="size-5 inline-block"/></Link>
               </div>
            </div>
            <div className="absolute z-2 bottom-0 bg-linear-to-t from-primary via-primary to-tertiary/10 w-full h-full" />
          </div>
          <div className="relative">
            <div>
               <Image className="w-full h-50 md:h-auto lg:max-h-47" width={360} height={60} src={'/images/home/visa-and-residence-permit.avif'} alt="visa and residence permit in lithuania" />
               <div className="relative z-3 flex justify-center items-center flex-col gap-5 px-4 py-6">
               <h4 className="text-white text-lg md:text-2xl font-aino text-center">Visa and Residence Permit</h4>
               <p className="text-white text-sm md:text-md text-center">The visa and residence permit application process will usually begin after student has been accepted to study on chosen programme.</p>
               <Link className="text-white px-6 py-2 rounded-full border border-white text-md md:text-base hover:bg-white hover:text-tertiary duration-300 ease-in-out" href={'/learn-more'}>Learn More <FaArrowRightLong className="size-5 inline-block"/></Link>
            </div>
            </div>
            <div className="absolute z-2 bottom-0 bg-linear-to-t from-tertiary via-tertiary to-tertiary/10 w-full h-full" />
          </div>
          </div>
      </div>
      </div>
    </section>
    <section className="max-w-6xl mx-auto">
      <div className="my-12">
          <h2 className="font-aino text-2xl md:text-4xl">Blogs & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
            <div className="">
              <ul className="space-y-5">
                <li className="">
                  <h4 className="font-aino mb-3">Study in Lithuania</h4>
                  <div className="flex justify-center gap-2">
                    <div className="">
                      <Image className="" height={160} width={200} src={'/images/blogs/blog-1.avif'} alt="study in lithuania" />
                    </div>
                    <div className="">
                         <p className="font-aino">Last chance to apply: Environmental Governance and Landscape Architecture (deadline 20 April)</p>
                         <div className="flex justify-between items-center mt-4">
                          <span className="font-roboto text-sm md:text-md">12 May 2026</span>
                          <Link className="text-primary hover:underline" href={''}>Read more <FaArrowRightLong className="size-4 inline-block"/></Link>
                         </div>
                    </div>
                  </div>
                </li>
                <li>
                  <h4 className="font-aino mb-3">Study in Lithuania</h4>
                  <div className="flex justify-center gap-2">
                    <div className="">
                      <Image className="" height={160} width={200} src={'/images/blogs/blog-1.avif'} alt="study in lithuania" />
                    </div>
                    <div className="">
                         <p className="font-aino">Last chance to apply: Environmental Governance and Landscape Architecture (deadline 20 April)</p>
                         <div className="flex justify-between items-center mt-4">
                          <span className="font-roboto text-sm md:text-md">12 May 2026</span>
                          <Link className="text-primary hover:underline" href={''}>Read more <FaArrowRightLong className="size-4 inline-block"/></Link>
                         </div>
                    </div>
                  </div>
                </li>
                <li>
                  <h4 className="font-aino mb-3">Study in Lithuania</h4>
                  <div className="flex justify-center gap-2">
                    <div className="">
                      <Image className="" height={160} width={200} src={'/images/blogs/blog-1.avif'} alt="study in lithuania" />
                    </div>
                    <div className="">
                         <p className="font-aino">Last chance to apply: Environmental Governance and Landscape Architecture (deadline 20 April)</p>
                         <div className="flex justify-between items-center mt-4">
                          <span className="font-roboto text-sm md:text-md">12 May 2026</span>
                          <Link className="text-primary hover:underline" href={''}>Read more <FaArrowRightLong className="size-4 inline-block"/></Link>
                         </div>
                    </div>
                  </div>
                </li>
                <li>
                  <h4 className="font-aino mb-3">Study in Lithuania</h4>
                  <div className="flex justify-center gap-2">
                    <div className="">
                      <Image className="" height={160} width={200} src={'/images/blogs/blog-1.avif'} alt="study in lithuania" />
                    </div>
                    <div className="">
                         <p className="font-aino">Last chance to apply: Environmental Governance and Landscape Architecture (deadline 20 April)</p>
                         <div className="flex justify-between items-center mt-4">
                          <span className="font-roboto text-sm md:text-md">12 May 2026</span>
                          <Link className="text-primary hover:underline" href={''}>Read more <FaArrowRightLong className="size-4 inline-block"/></Link>
                         </div>
                    </div>
                  </div>
                </li>
              </ul>
          <div className="flex justify-end items-center mt-12">
            <Link className="px-4 py-2 border-2 border-primary text-primary bg-white rounded-full hover:bg-primary hover:text-white duration-300 ease-in-out" href={'/blogs'}>All Blogs &nbsp;<FaArrowRightLong className="size-6 inline-block"/></Link>
          </div>
            </div>
            <div className="">
              <ul className="mt-8">
                <li className="flex gap-3 justify-center space-y-5">
                    <span className="font-roboto text-sm md:text-md">May-06</span>
                    <Link className="text-primary hover:underline" href={''}><p className="font-aino text-sm md:text-md">Study in Europe Fair Moldova 2026</p></Link>
                </li>
                <li className="flex gap-3 justify-center space-y-5">
                    <span className="font-roboto text-sm md:text-md">May-06</span>
                    <Link className="text-primary hover:underline" href={''}><p className="font-aino text-sm md:text-md">Study in Europe Fair Moldova 2026</p></Link>
                </li>
                <li className="flex gap-3 justify-center space-y-5">
                    <span className="font-roboto text-sm md:text-md">May-06</span>
                    <Link className="text-primary hover:underline" href={''}><p className="font-aino text-sm md:text-md">Study in Europe Fair Moldova 2026</p></Link>
                </li>
                <li className="flex gap-3 justify-center space-y-5">
                    <span className="font-roboto text-sm md:text-md">May-06</span>
                    <Link className="text-primary hover:underline" href={''}><p className="font-aino text-sm md:text-md">Study in Europe Fair Moldova 2026</p></Link>
                </li>
                <li className="flex gap-3 justify-center space-y-5">
                    <span className="font-roboto text-sm md:text-md">May-06</span>
                    <Link className="text-primary hover:underline" href={''}><p className="font-aino text-sm md:text-md">Study in Europe Fair Moldova 2026</p></Link>
                </li>
                <li className="flex gap-3 justify-center space-y-5">
                    <span className="font-roboto text-sm md:text-md">May-06</span>
                    <Link className="text-primary hover:underline" href={''}><p className="font-aino text-sm md:text-md">Study in Europe Fair Moldova 2026</p></Link>
                </li>
                <li className="flex gap-3 justify-center space-y-5">
                    <span className="font-roboto text-sm md:text-md">May-06</span>
                    <Link className="text-primary hover:underline" href={''}><p className="font-aino text-sm md:text-md">Study in Europe Fair Moldova 2026</p></Link>
                </li>
                <li className="flex gap-3 justify-center space-y-5">
                    <span className="font-roboto text-sm md:text-md">May-06</span>
                    <Link className="text-primary hover:underline" href={''}><p className="font-aino text-sm md:text-md">Study in Europe Fair Moldova 2026</p></Link>
                </li>
                <li className="flex gap-3 justify-center space-y-5">
                    <span className="font-roboto text-sm md:text-md">May-06</span>
                    <Link className="text-primary hover:underline" href={''}><p className="font-aino text-sm md:text-md">Study in Europe Fair Moldova 2026</p></Link>
                </li>
                <li className="flex gap-3 justify-center space-y-5">
                    <span className="font-roboto text-sm md:text-md">May-06</span>
                    <Link className="text-primary hover:underline" href={''}><p className="font-aino text-sm md:text-md">Study in Europe Fair Moldova 2026</p></Link>
                </li>
                <li className="flex gap-3 justify-center space-y-5">
                    <span className="font-roboto text-sm md:text-md">May-06</span>
                    <Link className="text-primary hover:underline" href={''}><p className="font-aino text-sm md:text-md">Study in Europe Fair Moldova 2026</p></Link>
                </li>
                <li className="flex gap-3 justify-center space-y-5">
                    <span className="font-roboto text-sm md:text-md">May-06</span>
                    <Link className="text-primary hover:underline" href={''}><p className="font-aino text-sm md:text-md">Study in Europe Fair Moldova 2026</p></Link>
                </li>
                <li className="flex gap-3 justify-center space-y-5">
                    <span className="font-roboto text-sm md:text-md">May-06</span>
                    <Link className="text-primary hover:underline" href={''}><p className="font-aino text-sm md:text-md">Study in Europe Fair Moldova 2026</p></Link>
                </li>
              </ul>
              <div className="flex justify-end items-center mt-12">
              <Link className="px-4 py-2 border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white rounded-full duration-300 ease-in-out" href={'/events'}>All Events <FaArrowRightLong className="size-6 inline-block"/></Link>
              </div>
            </div>
          </div>
      </div>
    </section>
    <section className="py-12" style={contactFormBanner}>
      <div className="max-w-6xl mx-auto">
      <h2 className="font-aino text-white text-2xl md:text-4xl ms-6 pb-5">Connect With Us</h2>
       <div className="grid grid-cols-1 md:grid-cols-3">
         <div className="col-span-2 p-3">
           <Form />
         </div>
         <div className="space-y-4 col-span-1 p-6">
           <h4 className="font-aino text-xl md:text-2xl text-white">Contact</h4>
            <div className="relative w-90 h-60">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10724.278781509209!2d77.07865525541992!3d28.635596400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04bee270eea1%3A0xa4b0610ae05bae2d!2sIndo%20European%20%7C%20Study%20Abroad%20Consultants%20-%20Head%20Office!5e1!3m2!1sen!2sin!4v1779533148044!5m2!1sen!2sin"
                className="w-full h-full rounded-xl"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex items-center gap-4">
            <span className="font-aino text-white">Follow us on :</span>
            <ul className="flex items-center gap-2">
              <li className="text-white"><Link href={''}><FaFacebookF className="size-6 inline-block"/></Link></li>
              <li className="text-white"><Link href={''}><FaXTwitter className="size-6 inline-block"/></Link></li>
              <li className="text-white"><Link href={''}><FaLinkedinIn className="size-6 inline-block"/></Link></li>
            </ul>
           </div>
         </div>
       </div>
       </div>
    </section>
    </div>
  )
}

export default HomeClient