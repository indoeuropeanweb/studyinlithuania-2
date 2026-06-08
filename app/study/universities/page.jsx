import Breadcrumb from "@/app/components/Breadcrumb"
import Image from "next/image"

const page = () => {

  const univeristiesData = [
  {
    "id": 1,
    "name": "Vilnius University",
    "img_url": "/images/universities/vilnius-university.webp",
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
    "img_url": "/images/universities/kausan-university.webp",
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
    "img_url": "/images/universities/vyantus-university.webp",
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
    "img_url": "/images/universities/lithuanian-university-of-health-sciences.webp",
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
    "img_url": "/images/universities/vilnius-gediminas-technical-university.webp",
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
    "img_url": "/images/universities/ism-university-of-management-and-economics.webp",
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
    "img_url": "/images/universities/klaipeda-university.webp",
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
    "img_url": "/images/universities/mykolas-romeris-university.webp",
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
    "img_url": "/images/universities/lcc-international-university.webp",
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
    "img_url": "/images/universities/kazimieras-simonavicius-university.webp",
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
    "img_url": "/images/universities/vilnius-academy-of-arts.webp",
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
    "img_url": "/images/universities/lithuanian-academy-of-music-and-theatre.webp",
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
    "img_url": "/images/universities/siauliai-academy.webp",
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
        <Breadcrumb heading={''}/>
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
                      className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#048D4E] via-[#FFB81C] to-[#BE3A34]" />

                      <div className="relative h-60 overflow-hidden">
                        <Image
                          width={400}
                          height={240}
                          src={university.img_url}
                          alt={university.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                        <div className="absolute bottom-5 left-5 right-5">
                          <h2 className="text-2xl font-bold text-white leading-snug">
                            {university.name}
                          </h2>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="mb-5">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-[#FFB81C]" />
                            <h3 className="font-semibold text-[#15803D]">
                              Ranking & Recognition
                            </h3>
                          </div>

                          <p className="text-gray-600 text-sm leading-relaxed">
                            {university.rankingRecognition}
                          </p>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="w-2 h-2 rounded-full bg-[#BE3A34]" />
                            <h3 className="font-semibold text-[#15803D]">
                              Academic Strength
                            </h3>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {university.academicStrength.map((course, index) => (
                              <span
                                key={index}
                                className="px-3 py-1.5 text-xs font-medium rounded-full
                                  bg-[#048D4E]/10 text-[#048D4E]
                                  border border-[#048D4E]/20"
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