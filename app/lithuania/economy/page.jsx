import Breadcrumb from '@/app/components/Breadcrumb'
import Image from 'next/image';

const page = () => {
  return (
    <div className=''>
      <Breadcrumb heading={''} />
      <div className='px-5 py-5'>
        <h2 className='text-2xl md:text-4xl font-aino'>Economy</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <p className='text-md font-roboto mt-3 text-justify'>
            Lithuania has one of the fastest-growing economies in the Baltic region and is known for
            its stable and modern economic system. The country’s economy is mainly supported by
            industries such as information technology, manufacturing, transportation, finance,
            agriculture, and international trade. Being a member of the European Union and the
            Eurozone has helped Lithuania attract global investments and expand its business
            opportunities across Europe.<br />
            In recent years, Lithuania has become a popular hub for startups, fintech companies,
            and technology-based businesses. Cities like Vilnius are rapidly developing with modern
            infrastructure, international companies, and growing employment opportunities. The
            country also offers a strong digital economy, affordable living costs, and a business-
            friendly environment, which makes it attractive for international students and
            professionals looking for career growth in Europe.
        </p>
        <Image className="rounded-md" width={280} height={540} src="/images/lithuania/economy/economy.webp" alt="Economy of Lithuania"/>
        </div>
      </div>
    </div>
  )
}

export default page