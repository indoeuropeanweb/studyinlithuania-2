import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaYoutube, FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6'

const footer = () => {
  return (
    <footer className='max-w-6xl mx-auto'>
        <div className='py-6 grid grid-cols-1 md:grid-cols-4 gap-5'>
          <div className='max-w-100 col-span-1'>
            <Link className='' href={'/'}><Image className="" width={140} height={70} src='/images/logos/logo.webp' alt="study in lithuania centre" /></Link>
            <p className='mt-3'>A student visa and residence permit are required to study in Lithuania, allowing legal stay and smooth access to education benefits.</p>
            <div className='flex gap-5 mt-3'>
              <span className=''>Follow us on</span>
              <ul className='flex gap-3'>
                <li><Link href={''}><FaFacebookF className="size-6 text-primary hover:scale-110 duration-300 ease-in-out" /></Link></li>
                <li><Link href={''}><FaYoutube className="hover:scale-110 size-6 text-primary duration-300 ease-in-out" /></Link></li>
                <li><Link href={''}><FaInstagram className="hover:scale-110 size-6 text-primary duration-300 ease-in-out" /></Link></li>
                <li><Link href={''}><FaXTwitter className="hover:scale-110 size-6 text-primary duration-300 ease-in-out" /></Link></li>
                <li><Link href={''}><FaLinkedinIn className="hover:scale-110 size-6 text-primary duration-300 ease-in-out" /></Link></li>
              </ul>
            </div>
          </div>
          <div className='col-span-3 grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 mt-5'>
          <div className='ms-16'>
            <h3 className='font-aino text-base md:text-lg text-primary'>Home</h3>
           <ul className='mt-3 space-y-3'>
            <li className='text-md md:text-base hover:underline'><Link href={'/lithuania'}>Lithuania</Link></li>
            <li className='text-md md:text-base hover:underline'><Link href={'/study'}>Study</Link></li>
            <li className='text-md md:text-base hover:underline'><Link href={'/living'}>Living</Link></li>
            <li className='text-md md:text-base hover:underline'><Link href={'/student-ambassadors'}>Student Ambassador</Link></li>
           </ul>
          </div>
          <div className=''>
            <h3 className='font-aino text-lg md:text-xl text-primary'>Resources</h3>
           <ul className='mt-3 space-y-3'>
            <li className='text-md md:text-base hover:underline'><Link href={'/blogs'}>Blogs</Link></li>
            <li className='text-md md:text-base hover:underline'><Link href={'/gallery'}>Gallery</Link></li>
            <li className='text-md md:text-base hover:underline'><Link href={'/faq'}>FAQ</Link></li>
           </ul>
          </div>
          <div className=''>
            <h3 className='font-aino text-lg md:text-xl text-primary'>Contact</h3>
           <ul className='mt-3 space-y-3'>
            <li className='text-md md:text-base hover:underline'><Link href={'/about'}>About Us</Link></li>
            <li className='text-md md:text-base hover:underline'><Link href={'/contact'}>Contact Us</Link></li>
           </ul>
          </div>
          </div>
        </div>
    </footer>
  )
}

export default footer