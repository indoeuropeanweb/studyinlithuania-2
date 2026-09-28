import React from 'react'
import Sidebar from '../components/Sidebar';


const menuItems = [
  {
    name: "Universities",
    href: "/study/universities"
  },
  {
    heading: "Programmes",
    href: "/study/programmes"
  },
  {
     heading: "Bachelor's",
     href: "/study/bachelors"
  },
  {
     heading: "Master's",
     href: "/study/masters"
  },
  {
     heading: "PhD",
     href: "/study/phd"
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
        <div className='hidden lg:block lg:col-span-1'>
           <Sidebar menuItems={menuItems}/>
        </div>
        <div className='col-span-5 lg:col-span-4'>
           {children}
        </div>
    </section>
  )
}

export default StudyLayout