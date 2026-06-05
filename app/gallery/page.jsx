import Breadcrumb from '../components/Breadcrumb';
import { Testimonials } from "@/public/data/testimonials";

const page = () => {
  return (
    <>
     <Breadcrumb heading={'Our Students Eperience'}/>
     <section className='mx-auto max-w-6xl'>
       <div className='py-10 px-5'>
         <h1 className='text-2xl md:text-4xl font-aino'>Real Student Experiences in Lithuania</h1>
         <p className='text-base font-inter text-justify mt-3'>Hear directly from students who successfully secured admissions, scholarships, and visas to study in Lithuania. Watch their video reviews and explore moments from their international education journey.</p>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-3 space-x-3 mt-8'>
            {Testimonials.map((testimonial, index) => {
              return <div className='' key={index}>
                <iframe className='rounded-lg' src={testimonial} width={320} height={160} />
              </div>
            })}
         </div>
       </div>
     </section>
    </>
  )
}

export default page