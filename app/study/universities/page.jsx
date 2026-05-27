import Breadcrumb from "@/app/components/form/Breadcrumb"
import Image from "next/image"

const page = () => {

  const univeristiesData = [
  {
    "id": 1,
    "name": "Vilnius University",
    "img_url": "/images/universities/vilnius-university.avif",
    "rankingRecognition": "Ranked #1 university in Lithuania in most global ranking systems (QS/THE national listings). It is also the oldest university in Lithuania (founded 1579) and one of the most recognised in Eastern Europe.",
    "academicStrength": [
      "Medicine",
      "Law",
      "Business",
      "Economics",
      "Social Sciences"
    ]
  },
  {
    "id": 2,
    "name": "Kaunas University of Technology",
    "img_url": "/images/universities/kausan-university.avif",
    "rankingRecognition": "Consistently ranked among the top 3 technical universities in Lithuania, known for engineering and innovation-focused education.",
    "academicStrength": [
      "IT",
      "Engineering",
      "Artificial Intelligence",
      "Data Science",
      "Electronics"
    ]
  },
  {
    "id": 3,
    "name": "Vytautas Magnus University",
    "img_url": "/images/universities/vyantus-university.avif",
    "rankingRecognition": "Recognised as a top Lithuanian university for humanities and social sciences, with strong international collaboration programs.",
    "academicStrength": [
      "Marketing",
      "Political Science",
      "Communication",
      "Humanities",
      "Education"
    ]
  },
  {
    "id": 4,
    "name": "Lithuanian University of Health Sciences",
    "img_url": "/images/universities/lithuanian-university-of-health-sciences.avif",
    "rankingRecognition": "One of the leading medical universities in Lithuania and the Baltic region, especially known for clinical training and healthcare education.",
    "academicStrength": [
      "Medicine",
      "Dentistry",
      "Pharmacy",
      "Nursing",
      "Veterinary Medicine"
    ]
  },
  {
    "id": 5,
    "name": "Vilnius Gediminas Technical University",
    "img_url": "/images/universities/vilnius-gediminas-technical-university.avif",
    "rankingRecognition": "Ranked among the top engineering and architecture universities in Lithuania, with strong focus on applied sciences and innovation.",
    "academicStrength": [
      "Civil Engineering",
      "Architecture",
      "Mechanical Engineering",
      "Aviation",
      "Computer Science"
    ]
  },
  {
    "id": 6,
    "name": "ISM University of Management and Economics",
    "img_url": "/images/universities/ism-university-of-management-and-economics.avif",
    "rankingRecognition": "One of the top private business universities in Lithuania, focused on management and economics education.",
    "academicStrength": [
      "Business Administration",
      "Finance",
      "Economics",
      "Marketing"
    ]
  },
  {
    "id": 7,
    "name": "Klaipėda University",
    "img_url": "/images/universities/klaipeda-university.avif",
    "rankingRecognition": "Known for marine science and environmental studies, with strong regional academic importance.",
    "academicStrength": [
      "Marine Science",
      "Environmental Studies",
      "Public Health",
      "Social Sciences"
    ]
  },
  {
    "id": 8,
    "name": "Mykolas Romeris University",
    "img_url": "/images/universities/mykolas-romeris-university.avif",
    "rankingRecognition": "Strong reputation in law, public administration, and social sciences in Lithuania.",
    "academicStrength": [
      "Law",
      "Psychology",
      "Public Administration",
      "Digital Society"
    ]
  },
  {
    "id": 9,
    "name": "LCC International University",
    "img_url": "/images/universities/lcc-international-university.avif",
    "rankingRecognition": "A small international liberal arts university with English-taught programs and global student intake.",
    "academicStrength": [
      "Business",
      "Communication",
      "Psychology",
      "International Relations"
    ]
  },
  {
    "id": 10,
    "name": "Kazimieras Simonavičius University (KSU)",
    "img_url": "/images/universities/kazimieras-simonavicius-university.avif",
    "rankingRecognition": "An emerging private university, focused on entrepreneurship, aviation, and creative industries.",
    "academicStrength": [
      "Business",
      "Marketing",
      "Aviation Management",
      "Law",
      "Creative Industries"
    ]
  },
  {
    "id": 11,
    "name": "Vilnius Academy of Arts",
    "img_url": "/images/universities/vilnius-academy-of-arts.avif",
    "rankingRecognition": "Top arts and design institution in Lithuania, highly specialised in creative education.",
    "academicStrength": [
      "Fine Arts",
      "Graphic Design",
      "Fashion",
      "Interior Design"
    ]
  },
  {
    "id": 12,
    "name": "Lithuanian Academy of Music and Theatre",
    "img_url": "/images/universities/lithuanian-academy-of-music-and-theatre.avif",
    "rankingRecognition": "Leading national-level institution for music, theatre, and performing arts education.",
    "academicStrength": [
      "Music",
      "Acting",
      "Theatre",
      "Film",
      "Composition"
    ]
  },
  {
    "id": 13,
    "name": "Šiauliai Academy (Vilnius University branch)",
    "img_url": "/images/universities/siauliai-academy.avif",
    "rankingRecognition": "A regional branch of Vilnius University, focused on accessible education and regional development.",
    "academicStrength": [
      "Education",
      "Business",
      "Social Sciences",
      "IT"
    ]
  }
]

  return (
    <section className=''>
      <div className="h-40 bg-[#eaeff2] py-10 px-10">
        <Breadcrumb />
        {/* <h2 className="font-aino text-2xl md:text-4xl text-center my-10">Universities in Lithuania</h2> */}
      </div>
      <div className="px-10 mt-10">
         <h2 className="font-aino text-2xl md:text-4xl">Explore Top Universities in Lithuania</h2>
         <p className="mt-5">Lithuania hosts internationally recognised universities offering quality education, affordable fees,
          and globally accepted degrees. Students can study business, medicine, engineering, IT,
          management, and social sciences.<br />
          Universities provide modern campuses, research opportunities, English-taught programs in
          public and private institutions in Vilnius.
          </p>
          <div className="mt-12">
          <h2 className="font-aino text-2xl md:text-4xl">Discover Leading Universities in Lithuania</h2>
          <div className="mt-5">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {univeristiesData.map((university) => (
                      <div
                        key={university.id}
                        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
                      >
                        <div className="h-56 overflow-hidden">
                          <Image
                            width={250}
                            height={160}
                            src={university.img_url}
                            alt={university.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        <div className="p-5">
                          <h2 className="text-xl font-bold text-gray-900 mb-3">
                            {university.name}
                          </h2>

                          <div className="mb-4">
                            <h3 className="text-sm font-semibold text-blue-600 mb-1">
                              Ranking & Recognition
                            </h3>

                            <p className="text-sm text-gray-600 leading-6">
                              {university.rankingRecognition}
                            </p>
                          </div>

                          <div>
                            <h3 className="text-sm font-semibold text-green-600 mb-2">
                              Academic Strength
                            </h3>

                            <div className="flex flex-wrap gap-2">
                              {university.academicStrength.map((course, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
          </div>
          </div>
      </div>
    </section>
  )
}

export default page