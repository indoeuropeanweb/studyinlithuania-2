"use client";
import Breadcrumb from '@/app/components/Breadcrumb'
import axios from "axios";
import { useState, useEffect } from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import SearchIcon from "@mui/icons-material/Search";
import useFetch from "@/utils/customhooks/useFetch";
import { FaSearch } from "react-icons/fa";
import Pagination from '@mui/material/Pagination';
import CourseCard from "@/app/components/CourseCard.jsx";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const ProgrammeClient = () => {
  const [filterEl, setFilterEl] = useState({
    searchText: "",
    university: "",
    level: "",
  });

  const [filters, setFilters] = useState({
    searchText: "",
    university: "",
    level: "",
  });
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const coursesPerPage = 6;

  useEffect(() => {
    if (!filters) return;

    const fetchCourses = async () => {
      try {
        setLoading(true);

        const url = `https://crm.indoeuropean.in/WebService/CourseFinder/Programs_api.asmx/ProgramsAPI?countryid=111&univid=${filters.university || ""}&levelid=${filters.level || ""}&intakeid=&searchtext=${filters.searchText || ""}`;

        const response = await axios.get(url);

        setCourseData(response?.data);
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [filters]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilters({ ...filterEl });
  };
  
  const totalPages = Math.ceil(courseData.length / coursesPerPage);

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  };

  const startIndex = (page - 1) * coursesPerPage;
  const selectedCourses = courseData.slice(
    startIndex,
    startIndex + coursesPerPage
  );

  const { data: universityData } = useFetch(
    "https://crm.indoeuropean.in/WebService/CourseFinder/Programs_api.asmx",
    "UniversityAPI?countryid=111",
    ""
  );

  const { data: levelData } = useFetch(
    "https://crm.indoeuropean.in/WebService/CourseFinder/Programs_api.asmx",
    "LevelAPI",
    ""
  );

  return (
    <>
      <Breadcrumb heading={"Earn​‍​‌‍​‍‌ your programme's degree in Latvia: quality education at lower ​‍​‌‍​‍‌prices"}/>
      <div className='py-6 px-10'>
        <h2 className='text-2xl md:text-4xl font-aino'>Programmes for Lithuania</h2>
        <p className='mt-3 text-justify text-roboto'>Look​‍​‌‍​‍‌ into Bachelor, Master, and PhD courses at Lithuanian universities that have international recognition. Pick among a diverse array of excellent courses instructed in English in areas like Business, Engineering, Information Technology, Health Sciences, Social Sciences, etc. Besides low-cost tuition, state-of-the-art campuses, creative learning environments, and Europeanly and globally recognized degrees, Lithuania is a great place for foreign students. No matter if you are studying <Link className="font-semibold hover:underline" href="/study/bachelors">Bachelors</Link>, Masters, or PhD, Lithuania offers the academic excellence, practical experience, and worldwide opportunities that are essential to a successful international ​‍​‌‍​‍‌career.</p>
      </div>
      <section className="my-5">
        <div className="mx-auto max-w-6xl px-4">
          <div className="py-8 px-4 shadow rounded-md">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-4"
            >
              <Input
                placeholder="Search Course..."
                value={filterEl.searchText}
                onChange={(e) =>
                  setFilterEl((prev) => ({
                    ...prev,
                    searchText: e.target.value,
                  }))
                }
                startDecorator={<SearchIcon />}
                sx={{ flex: 2 }}
              />

              <Select
                placeholder="University"
                value={filterEl.university}
                onChange={(e, val) =>
                  setFilterEl((prev) => ({
                    ...prev,
                    university: val || "",
                  }))
                }
                sx={{ flex: 1 }}
              >
                <Option value="">All Universities</Option>
                {universityData?.map((u, i) => (
                  <Option key={i} value={u.UNIVID}>
                    {u.UNIVNAME}
                  </Option>
                ))}
              </Select>

              <Select
                placeholder="Level"
                value={filterEl.level}
                onChange={(e, val) =>
                  setFilterEl((prev) => ({
                    ...prev,
                    level: val || "",
                  }))
                }
                sx={{ flex: 1 }}
              >
                <Option value="">All Levels</Option>
                {levelData?.map((l, i) => (
                  <Option key={i} value={l.ID}>
                    {l.LevelName}
                  </Option>
                ))}
              </Select>
            <Button
              type="submit"
              loading={loading}
              color='primary'
            >
              <FaSearch className="size-4" />
              &nbsp; Search
            </Button>
            </form>
             <div className="my-12 grid grid-cols-1 lg:grid-cols-2 gap-3 justify-center">
              {selectedCourses.length > 0 ? selectedCourses.map((course, index) => {
                return <CourseCard 
                key={course.Row_No}
                UnivName={course.UnivName} 
                Program={course.Program} 
                LevelName={course.LevelName} 
                StudyArea={course.Study_Area} 
                Duration={course.Duration} 
                Language={course.Launguage_Of_Teaching} 
                LanguageProficiency={course.English_Proficiency_Requirement} 
                Description={course.Program_Description}/>
              }) : <div className="col-span-1 lg:col-span-2 text-center text-tertiary w-full font-medium text-base lg:text-xl">No Data Found !</div>}
             </div>
             <div className="flex justify-center items-center">
              <Pagination
                count={totalPages}
                page={page}
                onChange={handleChange}
                shape="rounded"
                sx={{
                  "& .MuiPaginationItem-root": {
                    color: "#048D4E",
                    borderColor: "#048D4E",
                  },
                  "& .Mui-selected": {
                    backgroundColor: "#048D4E !important",
                    color: "#fff",
                  },
                  "& .MuiPaginationItem-root:hover": {
                    backgroundColor: "#e5f3ed",
                  },
                }}
              />
             </div>
          </div>
        </div>
        <div className="flex justify-end items-end mt-5">
            <Link href={'/study/bachelors'} className="text-blue-500 font-roboto hover:underline">Read bachelors programme <FaArrowRightLong className="inline-block"/></Link>
        </div>
      </section>
    </>
  )
}

export default ProgrammeClient