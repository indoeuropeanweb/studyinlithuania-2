import React from 'react'
import Sidebar from '../components/Sidebar';


const menuItems = [
  {
    name: "Universities",
    href: "/study/universities"
  },
  {
    heading: "Programmes",
    links: [
      { name: "Bachelor's", href: "/study/programmes/bachelors" },
      { name: "Master's", href: "/study/programmes/masters" },
      { name: "PhD", href: "/study/programmes/phd" },
      { name: "Short courses", href: "/study/programmes/short-courses" },
    ],
  },
  {
    heading: "Admission",
    href: "/study/admission"
  },
  {
    heading: "Scholarships",
    href: "/study/scholarships"
  }
];

const StudyLayout = ({children}) => {

  return (
    <section className='grid grid-cols-5'>
        <div className='col-span-1'>
           <Sidebar menuItems={menuItems}/>
        </div>
        <div className='col-span-4'>
           {children}
        </div>
    </section>
  )
}

export default StudyLayout