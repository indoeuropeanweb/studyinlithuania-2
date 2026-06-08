import Breadcrumb from '../components/Breadcrumb';
import FAQ from '../components/FAQ';

const page = () => {

    const faqData = [
  {
    "id": 1,
    "question": "1. Is Lithuania good for Indian students?",
    "answer": "Yes, Lithuania is becoming a popular destination for Indian students because of its affordable education, globally recognized universities, safe environment, and English-taught programs."
  },
  {
    "id": 2,
    "question": "2. What is the cost of studying in Lithuania?",
    "answer": "The cost of studying in Lithuania is relatively affordable compared to many other European countries. Tuition fees and living expenses depend on the university, city, and course."
  },
  {
    "id": 3,
    "question": "3. Can Indian students study in Lithuania?",
    "answer": "Yes, Indian students can study in Lithuania by applying to recognized universities and obtaining a Lithuanian student visa."
  },
  {
    "id": 4,
    "question": "4. Is IELTS required for Lithuania?",
    "answer": "Many universities in Lithuania accept IELTS scores, but some institutions may also accept other English proficiency proofs depending on the course requirements."
  },
  {
    "id": 5,
    "question": "5. What are the top universities in Lithuania?",
    "answer": "Some popular universities in Lithuania include universities located in Vilnius and Kaunas that offer Indianly recognized degrees."
  },
  {
    "id": 6,
    "question": "6. Is Lithuania part of the Schengen Area?",
    "answer": "Yes, Lithuania is a member of the Schengen Area, which allows students to travel across many European countries."
  },
  {
    "id": 7,
    "question": "7. Can students work while studying in Lithuania?",
    "answer": "Indian students in Lithuania are generally allowed to work part-time during their studies according to visa regulations."
  },
  {
    "id": 8,
    "question": "8. What is the average living cost in Lithuania?",
    "answer": "Living costs in Lithuania are considered budget-friendly for students and usually include accommodation, food, transport, and personal expenses."
  },
  {
    "id": 9,
    "question": "9. Are English-taught programs available in Lithuania?",
    "answer": "Yes, many universities in Lithuania offer bachelor's and master's programs in English for Indian students."
  },
  {
    "id": 10,
    "question": "10. Is Lithuania safe for Indian students?",
    "answer": "Lithuania is considered one of the safer European countries with a peaceful and student-friendly environment."
  },
  {
    "id": 11,
    "question": "11. How long does the Lithuania student visa process take?",
    "answer": "The Lithuania student visa process may take several weeks depending on the application and document verification process."
  },
  {
    "id": 12,
    "question": "12. What are the admission requirements for Lithuanian universities?",
    "answer": "Admission requirements usually include academic documents, passport, application form, English proficiency proof, and other university-specific requirements."
  },
  {
    "id": 13,
    "question": "13. Which courses are popular in Lithuania?",
    "answer": "Business, IT, engineering, medicine, management, and data science are among the popular courses in Lithuania."
  },
  {
    "id": 14,
    "question": "14. Can students stay in Lithuania after graduation?",
    "answer": "Many graduates explore job opportunities and post-study options in Lithuania and other European countries after completing their studies."
  },
  {
    "id": 15,
    "question": "15. Is Lithuania affordable compared to other European countries?",
    "answer": "Yes, Lithuania is often considered more affordable than many Western European study destinations."
  },
  {
    "id": 16,
    "question": "16. What is the climate like in Lithuania?",
    "answer": "Lithuania experiences four seasons with mild summers and cold winters."
  },
  {
    "id": 17,
    "question": "17. Is accommodation available for Indian students in Lithuania?",
    "answer": "Yes, universities usually provide hostel facilities, and private accommodation options are also available."
  },
  {
    "id": 18,
    "question": "18. Do universities in Lithuania provide scholarships?",
    "answer": "Some Lithuanian universities and government programs offer scholarships for Indian students based on eligibility."
  },
  {
    "id": 19,
    "question": "19. Why do students choose Lithuania for higher education?",
    "answer": "Students choose Lithuania because of quality education, affordable costs, Indian exposure, and European career opportunities."
  },
  {
    "id": 20,
    "question": "20. Is Lithuania a good place to live for students?",
    "answer": "Yes, Lithuania offers a peaceful lifestyle, modern facilities, clean surroundings, and a comfortable environment for students."
  }
]

  return (
    <>
         <Breadcrumb heading={'Frequently Asked Questions'}/>
         <div className='max-w-6xl mx-auto'>
            <div className='px-5 py-10'>
               {faqData?.map((faq, index) => {
                return <FAQ panelNo={faq.id} key={index} question={faq.question} answer={faq.answer}/>
               })}
            </div>
         </div>
    </>
  )
}

export default page