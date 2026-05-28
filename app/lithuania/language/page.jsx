import Breadcrumb from '@/app/components/Breadcrumb'

const page = () => {
  return (
    <div className=''>
      <Breadcrumb heading={''} />
      <div className='px-5 py-5'>
        <h2 className='text-2xl md:text-4xl font-aino'>Language in Lithuania</h2>
        <div className=''>
        <p className='text-md font-roboto mt-3 text-justify'>
          Lithuania has a unique linguistic heritage, and the official language of the country is Lithuanian. It is considered one of the oldest living languages in Europe and holds great cultural importance in Lithuanian society. While Lithuanian is mainly used in daily life and local communication, English is widely spoken among students and young people, especially in cities and universities. This makes communication easier for international students studying in Lithuania.
        </p>
        </div>
      </div>
    </div>
  )
}

export default page