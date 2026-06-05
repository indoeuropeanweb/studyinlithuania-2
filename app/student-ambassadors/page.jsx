import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Image from 'next/image'

const page = () => {

    const students = [
  {
    "name": "Lovepreet Singh",
    "university": "SMK University of Applied Social Sciences",
    "country": "Lithuania",
    "course": "Bachelor of Science in Nursing",
    "img_url": "/images/student-ambassadors/student-01.webp",
    "testimonial": "Choosing the Study in Lithuania Centre was one of the best decisions for my study abroad journey. From admission guidance to Lithuania student visa support, the team assisted me at every step. Today, I am happily pursuing my Nursing degree in Lithuania."
  },
  {
    "name": "Vansh Kapoor",
    "university": "SMK University of Applied Social Sciences",
    "country": "Lithuania",
    "course": "Bachelor's in Business Building",
    "img_url": "/images/student-ambassadors/student-02.webp",
    "testimonial": "I always wanted to study in Lithuania, and the guidance I received made the process simple and stress-free. The team helped me with university applications, documentation, and visa preparation. I am thankful for their continuous support."
  },
  {
    "name": "Jourdaine John D'Souza",
    "university": "SMK University of Applied Social Sciences",
    "country": "Lithuania",
    "course": "Bachelor's in Business Management",
    "img_url": "/images/student-ambassadors/student-03.webp",
    "testimonial": "My experience was excellent from start to finish. The counselling sessions helped me choose the right course and university. Thanks to their expertise in the Lithuania admission process, I successfully secured my place at a leading Lithuanian university."
  },
  {
    "name": "Vijaya Gowthami Bowddu",
    "university": "Kazimieras Simonavicius University",
    "country": "Lithuania",
    "course": "Master in Computer Science (Artificial Intelligence)",
    "img_url": "/images/student-ambassadors/student-04.webp",
    "testimonial": "Pursuing a Master's degree in Artificial Intelligence abroad was a dream come true. The Lithuania education consultant team guided me through admissions, documentation, and visa procedures. Their support helped me achieve my academic goals with confidence."
  },
  {
    "name": "Gurpreet Singh",
    "university": "Kazimieras Simonavicius University",
    "country": "Lithuania",
    "course": "Bachelor in Hospitality Management",
    "img_url": "/images/student-ambassadors/student-05.webp",
    "testimonial": "The entire process was smooth and well-organised. I received excellent assistance with university admission and Lithuania student visa requirements. The team was always available whenever I needed guidance, making my journey stress-free."
  },
  {
    "name": "Manpreet Singh",
    "university": "Kazimieras Simonavicius University",
    "country": "Lithuania",
    "course": "Bachelor's in Business Management",
    "img_url": "/images/student-ambassadors/student-06.webp",
    "testimonial": "I am grateful for the support I received throughout my study abroad application. From selecting the right programme to completing the Lithuania university admission process, everything was handled professionally and efficiently."
  },
  {
    "name": "Mehak Jain",
    "university": "Vilnius Technical University",
    "country": "Lithuania",
    "course": "Bachelor in Computer Engineering",
    "img_url": "/images/student-ambassadors/student-07.webp",
    "testimonial": "I was looking for trusted guidance to study abroad in Lithuania, and I received exactly that. The admission process was smooth, and the team provided complete support for visa preparation. Their professionalism made a huge difference."
  },
  {
    "name": "Prem Kumar",
    "university": "Vilnius Technical University",
    "country": "Lithuania",
    "course": "Bachelor in Mechatronics and Robotics",
    "img_url": "/images/student-ambassadors/student-08.webp",
    "testimonial": "My dream of studying engineering abroad became a reality thanks to the expert guidance I received. The Study in Lithuania Centre helped me understand every step of the admission and visa process, making everything simple and transparent."
  },
  {
    "name": "Himanshi Vaid",
    "university": "Vilnius Technical University",
    "country": "Lithuania",
    "course": "MSc Data Science",
    "img_url": "/images/student-ambassadors/student-09.webp",
    "testimonial": "The counselling and support I received were outstanding. The team guided me throughout the Lithuania higher education application process and ensured all my documents were prepared correctly. I am thankful for their dedication and assistance."
  },
  {
    "name": "Parth Raja Sahu",
    "university": "Vilnius Technical University",
    "country": "Lithuania",
    "course": "Master in Mechanical Engineering",
    "img_url": "/images/student-ambassadors/student-10.webp",
    "testimonial": "My experience with the Lithuania study abroad consultant team was exceptional. They provided clear guidance on university selection, applications, and visa procedures. Their support helped me start my Master's degree journey without any complications."
  },
  {
    "name": "Pratishtha Golia",
    "university": "Vilnius Technical University",
    "country": "Lithuania",
    "course": "Bachelor's in Computer Science",
    "img_url": "/images/student-ambassadors/student-11.webp",
    "testimonial": "The team made my admission journey smooth and hassle-free. From choosing the right programme to preparing for my Lithuania student visa application, I received complete support. I highly recommend their services to future students."
  },
  {
    "name": "Hashmita H. Sargunam",
    "university": "Vilnius Technical University",
    "country": "Lithuania",
    "course": "Bachelor's in Computer Science",
    "img_url": "/images/student-ambassadors/student-12.webp",
    "testimonial": "I am grateful for the professional guidance I received throughout my study abroad journey. The team helped me with university applications, documentation, and visa preparation. Thanks to their support, I was able to begin my studies in Lithuania confidently."
  }
]

  return (
    <>
     <Breadcrumb heading="Discover the inspiring journeys of students who chose Lithuania as their study destination and
successfully started their international education experience. From securing university
admissions and student visas to adapting to life in Lithuania, these students have achieved their
academic goals with confidence. Explore their experiences, insights, and success stories to
learn what studying and living in Lithuania is really like from the students themselves."/>
     <section className='max-w-6xl mx-auto'>
       <div className='py-10 px-5'>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-8">
        {students.map((student, index) => {
            return (
            <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-[#048D4E]/10 bg-white shadow-lg transition-all duration-500"
            >
                <div className="grid grid-cols-1 gap-6 p-4 sm:p-6 md:p-7 lg:grid-cols-[200px_1fr] xl:grid-cols-[220px_1fr]">
                <div className="relative mx-auto w-full max-w-55">
                    <div className="absolute -left-3 -top-3 h-full w-full rounded-2xl bg-[#048D4E]/10 transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
                    <Image
                    className="relative z-10 h-70 sm:h-80 w-full rounded-2xl border-4 border-white object-cover shadow-xl"
                    height={360}
                    width={220}
                    src={student.img_url}
                    alt={student.name}
                    />
                    <div className="absolute bottom-4 left-4 z-20 rounded-full bg-secondary px-3 py-1 text-xs sm:text-sm font-semibold text-black shadow-md">
                    Student Ambassador
                    </div>
                </div>
                <div className="flex flex-col justify-center text-center lg:text-left">
                    <div className="mb-2 text-5xl sm:text-6xl leading-none text-dark/15">
                    ”
                    </div>
                    <h2 className="font-aino text-2xl font-bold text-primary sm:text-3xl">
                    {student.name}
                    </h2>
                    <h4 className="mt-2 font-roboto text-sm sm:text-base font-medium leading-relaxed text-tertiary">
                    {student.university}
                    </h4>
                    <div className="mt-3">
                    <h6 className="inline-block rounded-full bg-dark/10 px-4 py-1 text-xs sm:text-sm font-semibold text-primary-dark">
                        {student.course}
                    </h6>
                    </div>
                    <p className="mt-5 border-l-4 border-secondary pl-4 sm:pl-5 text-sm sm:text-[15px] leading-7 sm:leading-8 text-gray-700 italic">
                    “{student.testimonial}”
                    </p>
                    <div className="mt-5 flex items-center justify-center gap-2 lg:justify-start">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span className="h-2 w-2 rounded-full bg-secondary" />
                    <span className="h-2 w-2 rounded-full bg-tertiary" />
                    </div>
                </div>
                </div>
            </div>
            );
        })}
        </div>
       </div>
     </section>
    </>
  )
}

export default page