import React from 'react'
import Breadcrumb from '@/app/components/Breadcrumb';
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const page = () => {
  return (
    <>
        <Breadcrumb />
        <div className='px-5 py-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center'>
          <div className=''>
          <h2 className='text-2xl md:text-4xl font-aino'>Living Cost in Lithuania for International Students</h2>
          <p className='text-md font-roboto mt-3 text-justify'>Understanding the living cost in Lithuania is an important part of planning your study abroad journey. Lithuania is considered one of the more affordable European destinations, offering a good balance between quality education and reasonable lifestyle expenses for international students.<br />
            On average, a student can manage monthly expenses in Lithuania within €350–€700, depending on lifestyle, city, and accommodation type. Cities like Vilnius and Kaunas may be slightly higher in cost compared to smaller towns, but overall Lithuania remains budget-friendly for students.
            </p>
            </div>
            <div>
              <Image className="rounded-md" width={420} height={320} src="/images/living/living-cost/living-cost.avif" alt="living cost in lithuania while studying" />
            </div>
            </div>
            <div className='mt-5'>
              <div className='mt-5'>
                <h5 className='font-roboto text-lg md:text-xl'>Accommodation Expenses</h5>
                <p className='mt-2 text-inter text-md text-justify'>Housing is the biggest part of a student’s budget in Lithuania. Students can choose between university dormitories, shared apartments, or private rentals.</p>
                <ul className='space-y-2 mt-2'>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;<b>University dormitories:</b> €120–€300 per month</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;<b>Shared apartments:</b> €200–€450 per month</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;<b>Private apartments:</b> €350–€650 per month</li>
                </ul>
                <p className='text-inter text-md my-5 text-justify'>Living in university accommodation also allows students to interact with classmates and
                    experience multicultural student life more easily.</p>
              </div>
              <div className='mt-5'>
                <h5 className='font-roboto text-lg md:text-xl'>Monthly Food & Grocery Cost</h5>
                <p className='mt-2 text-inter text-md text-justify'>Food expenses in Lithuania are quite manageable for students. Most universities also have cafeterias that offer affordable meal options.</p>
                <ul className='space-y-2 mt-2'>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;<b>Average monthly food cost:</b> €150–€300</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;<b>University cafeteria meals:</b> budget-friendly daily options</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;<b>Eating out occasionally:</b> moderate pricing depending on restaurant type</li>
                </ul>
                <p className='text-inter text-md my-5 text-justify'>Students who cook at home can reduce their monthly food expenses even further.</p>
              </div>
            </div>
              <div className='mt-5'>
                <h5 className='font-roboto text-lg md:text-xl'>Transportation Cost in Lithuania</h5>
                <p className='mt-2 text-inter text-md text-justify'>Public transport in Lithuania is well-connected and affordable for students. Cities like Vilnius and Kaunas offer student discounts on monthly transport passes.</p>
                <ul className='space-y-2 mt-2'>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;<b>Monthly student transport pass: </b> approx. €5–€15</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;<b>ingle ticket:</b> around €0.50–€1.00</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;<b>Intercity travel (bus/train):</b> €5–€15 depending on distance</li>
                </ul>
                <p className='text-inter text-md my-5 text-justify'>Many students prefer public transport or cycling, as most facilities are located within easy reach</p>
              </div>
              <div className='mt-5'>
                <h5 className='font-roboto text-lg md:text-xl'>Lifestyle, Entertainment & Personal Expenses</h5>
                <p className='mt-2 text-inter text-md text-justify'>Apart from basic needs, students also spend on entertainment, social life, and personal activities. Lithuania offers a balanced student lifestyle with reasonable costs.</p>
                <ul className='space-y-2 mt-2'>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;<b>Movie tickets: </b> €5–€10</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;<b>C €20–€50 per month</b></li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;<b>Social outings and cafés: </b> €50–€150 monthly (depending on lifestyle)</li>
                </ul>
                <p className='text-inter text-md my-5 text-justify'>Students can comfortably enjoy social activities without putting too much pressure on their budget.</p>
              </div>
            <div className='mt-5'>
              <h4 className='font-roboto text-xl md:text-2xl'>Final Overview</h4>
              <p className='font-inter text-md mt-3 text-justify'>Overall, Lithuania offers an affordable and student-friendly cost of living compared to many other European countries. With proper budgeting, students can easily manage their monthly expenses while enjoying a comfortable and active student life in Europe.</p>
            </div>
        </div>
    </>
  )
}

export default page