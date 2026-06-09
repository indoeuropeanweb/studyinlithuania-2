import React from 'react'
import Sidebar from '../components/Sidebar';


const menuItems = [
  {
    name: "Accommodation",
    href: "/living/accommodation"
  },
  {
    heading: "Living Costs",
    href: "/living/living-costs"
  },
  {
    heading: "Visa and Residence Permit",
    href: "/living/visa-and-residence-permit"
  },
  {
    heading: "Working",
    href: "/living/working"
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