import Breadcrumb from '@/app/components/Breadcrumb'
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export const metadata = {
    title: "Lifestyle and Character of Lithuania | Culture, Values, Student Life & Living Experience",
    description: "Explore the lifestyle and character of Lithuania, including its friendly people, safety, work-life balance, modern European lifestyle, student-friendly environment, cultural values, and quality of life for international students. Lithuania offers a peaceful, affordable, and welcoming atmosphere in the heart of Europe.",
    keywords: ["Lithuania lifestyle", "Lithuania character", "life in Lithuania", "Lithuanian people", "Lithuania student life", "Lithuania quality of life", "Lithuania culture and lifestyle", "living in Lithuania", "Lithuania work life balance", "Lithuania international students", "Lithuania safety", "Lithuania European lifestyle", "Lithuania society", "Lithuania living experience", "Lithuania student experience", "Lithuania affordable living", "Lithuania friendly people", "Lithuania modern lifestyle", "study in Lithuania", "Lithuania daily life"],
    alternates: {
        canonical: "https://www.studyinlithuania.in/lithuania/life-style-and-character"
    },
    robots: {
      index: true,
      follow: true,
    },
}

const page = () => {
  return (
    <div className=''>
      <Breadcrumb heading={'Lifestyle and Character of Lithuania: Where Tradition Meets Modern European Living'} />
      <div className='px-5 py-5'>
        <h2 className='text-2xl md:text-4xl font-aino'>The Way of Life in Lithuania</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <p className='text-md font-roboto mt-3 text-justify'>
         Lithuania is a country where traditional values and modern European living come together naturally. Life here is peaceful, organized, and closely connected to nature. From beautiful forests and historic towns to modern cities and digital innovation, Lithuania offers a lifestyle that feels both calm and progressive at the same time. People value education, personal space, hard work, and a balanced routine, which creates a comfortable environment for international students.
         <br />Lithuanians are known for being practical, disciplined, and thoughtful in their daily lives. The country has preserved its cultural roots and traditions for generations while also adapting to modern technology and global trends. This unique combination of history, simplicity, innovation, and strong community values makes Lithuania an attractive place to live, study, and experience European culture.
        </p>
        <Image className="rounded-md" width={540} height={320} src="/images/lithuania/lifestyle/lifestyle.webp" alt="Lifestyle of Lithuania"/>
        </div>
        <div className='mt-10'>
            <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Distinct Features of Lithuanian Lifestyle and Character page </h2>
             <ul className='mt-6 space-y-3'>
                <li className='space-y-2'>
                    <h4 className='text-lg md:text-xl font-roboto'>Deep Connection with Nature</h4>
                    <p className='text-md text-justify font-inter'>Lithuania’s forests, lakes, parks, and open spaces are an important part of life. People like to spend time in the open air and to live in a clean and peaceful environment. </p>
                </li>
                <li className='space-y-2'>
                    <h4 className='text-lg md:text-xl font-roboto'>Strong Cultural Identity</h4>
                    <p className='text-md text-justify font-inter'>The Lithuanians are proud of their language, traditions, music, and historical heritage, which can still be found in modern society today. </p>
                </li>
                <li className='space-y-2'>
                    <h4 className='text-lg md:text-xl font-roboto'>Modern Yet Peaceful Living</h4>
                    <p className='text-md text-justify font-inter'>The country has modern infrastructure, digital development, and comfortable city life but without the hustle and bustle of many larger European countries.  </p>
                </li>
                <li className='space-y-2'>
                    <h4 className='text-lg md:text-xl font-roboto'>Respectful and Reserved Nature</h4>
                    <p className='text-md text-justify font-inter'>Lithuanians are very polite, well-behaved, and respectful of your personal space. Relationships are often real and long-lasting, but friendships can take time to develop. </p>
                </li>
                <li className='space-y-2'>
                    <h4 className='text-lg md:text-xl font-roboto'>Focus on Education and Growth</h4>
                    <p className='text-md text-justify font-inter'>Education, skills, and self-development are highly valued, especially among young people and students.</p>
                </li>
                <li className='space-y-2'>
                    <h4 className='text-lg md:text-xl font-roboto'>Balance Between Tradition and Innovation</h4>
                    <p className='text-md text-justify font-inter'>Lithuania combines the best of old with the best of new, history with business and technology, and international culture. </p>
                </li>
             </ul>
        </div>
        <div className="flex justify-end items-end mt-5">
            <Link href={'/lithuania/language'} className="text-blue-500 font-roboto hover:underline">Read about Language <FaArrowRightLong className="inline-block"/></Link>
        </div>
      </div>
    </div>
  )
}

export default page