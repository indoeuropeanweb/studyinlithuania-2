import React from 'react'
import Sidebar from '../components/Sidebar';


const menuItems = [
  {
    name: "State",
    href: "/lithuania/state"
  },
  {
    heading: "Nature and Climate",
    href: "/lithuania/nature-and-climate"
  },
  {
    heading: "Economy",
    href: "/lithuania/economy"
  },
  {
    heading: "Culture",
    href: "/lithuania/culture"
  },
  {
    heading: "Life-style and Character",
    href: "/lithuania/life-style-and-character"
  },
  {
    heading: "Language",
    href: "/lithuania/language"
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