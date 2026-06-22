import Breadcrumb from '../components/Breadcrumb';
import { Testimonials } from "@/public/data/testimonials";
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export const metadata = {
  title: "Student Success Stories & Video Reviews | Study in Lithuania Centre",
  description: "Hear directly from students who successfully secured admissions, scholarships, and visas to study in Lithuania. Watch their video reviews and explore moments from their international education journey.",
  keywords: ["Study in Lithuania Centre reviews", "student success stories Lithuania", "Lithuania student video reviews", "Lithuania visa success stories", "Lithuania scholarship success", "Indian students in Lithuania", "study in Lithuania testimonials", "Lithuania admission success", "study abroad student reviews", "Lithuania education journey"],
  alternates: {
    canonical: "https://www.studyinlithuania.in/gallery"
  },
    robots: {
    index: true,
    follow: true,
  },
  openGraph: {
  type: "website",
  title:
    "Student Success Stories & Video Reviews | Study in Lithuania Centre",
  description:
    "Watch real student video reviews and success stories from students studying in Lithuania.",
  url: "https://www.studyinlithuania.in/gallery/",
  siteName: "Study in Lithuania Centre",
  images: [
    {
      url:
        "https://www.studyinlithuania.in/images/logos/logo.png",
      width: 1200,
      height: 630,
      alt: "Student Success Stories",
    },
  ],
},
twitter: {
  card: "summary_large_image",
  title:
    "Student Success Stories & Video Reviews | Study in Lithuania Centre",
  description:
    "Watch student success stories and video reviews.",
  images: [
    "https://www.studyinlithuania.in/images/logos/logo.png",
  ],
},
}

const page = () => {

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.studyinlithuania.in/contact",
        "name": "Study in Lithuania Centre",
        "url": "https://www.studyinlithuania.in/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.studyinlithuania.in/images/logos/logo.png"
        }
      },
      {
        "@type": "CollectionPage",
        "@id":
          "https://www.studyinlithuania.in/gallery/collectionpage",
        "url": "https://www.studyinlithuania.in/gallery/",
        "name":
          "Student Success Stories & Video Reviews",
        "description":
          "A gallery of student success stories and video reviews."
      },
      {
        "@type": "ImageGallery",
        "@id":
          "https://www.studyinlithuania.in/gallery/",
        "name":
          "Study in Lithuania Student Gallery",
        "url":
          "https://www.studyinlithuania.in/gallery/"
      },
      {
        "@type": "VideoObject",
        "@id":
          "https://www.studyinlithuania.in/gallery/#video1",
        "name":
          "Student Video Review - Study in Lithuania",
        "description":
          "Student shares their experience studying in Lithuania.",
        "thumbnailUrl":
          "https://www.studyinlithuania.in/images/logos/logo/logo.png",
        "uploadDate": "2026-01-01",
        "contentUrl":
          "https://www.studyinlithuania.in/gallery/"
      },
      {
        "@type": "Review",
        "@id":
          "https://www.studyinlithuania.in/gallery/#review1",
        "author": {
          "@type": "Person",
          "name": "Student"
        },
        "reviewBody":
          "Study in Lithuania Centre helped me secure admission and visa support.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://www.studyinlithuania.in/faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name":
              "What can I see on the gallery page?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "The gallery page includes student video reviews and success stories."
            }
          },
          {
            "@type": "Question",
            "name":
              "Are the student reviews about studying in Lithuania?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, the reviews feature students studying in Lithuania."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
     <Breadcrumb heading={'Student Experiences in Lithuania: Real Stories, Success Journeys and Study Abroad Experiences'}/>
     <section className='mx-auto max-w-6xl'>
       <div className='py-10 px-5'>
         <h2 className='text-2xl md:text-4xl font-aino'>Student Experiences in Lithuania</h2>
         <p className='text-base font-inter text-justify mt-3'>Hear directly from students who successfully secured admissions, scholarships, and visas to study in Lithuania. Watch their video reviews and explore moments from their international education journey.</p>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-3 space-x-3 mt-8'>
            {Testimonials.map((testimonial, index) => {
              return <div className='' key={index}>
                <iframe className='rounded-lg' src={testimonial} width={320} height={160} />
              </div>
            })}
         </div>
       </div>
      <div className="flex justify-end items-end">
          <Link href={'/faq'} className="text-blue-500 font-roboto hover:underline">Read Frequently Asked Questions (FAQ) <FaArrowRightLong className="inline-block"/></Link>
      </div>
     </section>
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  )
}

export default page