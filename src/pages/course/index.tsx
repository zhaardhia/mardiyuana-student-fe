import Layout from "@/components/Layout";
import React, { useState } from "react";
import Select, { ActionMeta } from "react-select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { CourseList } from "@/types"
import { useSessionUser } from "@/contexts/SessionUserContext"
type Option = { value: string; label: string };

const options = [
  { value: "X", label: "X" },
  { value: "XI", label: "XI" },
  { value: "XII", label: "XII" },
];

const CoursePage = () => {
  const { axiosJWT } = useSessionUser()
  const [selectedClass, setSelectedClass] = useState<Option>(options[0]);
  const [courses, setCourses] = useState<CourseList[]>()
  const handleSelectClass = (option: Option | null, actionMeta: ActionMeta<Option>) => {
    option && setSelectedClass(option);
  };

  React.useEffect(() => {
    fetchData()
  }, [])
  console.log({courses})
  const fetchData = async () => {
    const response = await axiosJWT.get(`${process.env.NEXT_PUBLIC_BASE_URL}/mardiyuana-student/course`, {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*', 
        'Content-Type': 'application/json',
      },
    })
    console.log({response})
    if (response?.data?.statusCode === "000") {
      setCourses(response?.data?.data?.listCourse)
    }
    // else toast({
    //   title: "Gagal mendapatkan data list pelajaran.",
    //   description: response?.data?.message || "Silahkan cek kembali data yang anda input, atau bisa melaporkan ke tim IT",
    //   className: "bg-red-200"
    // })
  }

  return (
    <Layout>
      <div className="flex justify-between items-center mb-8 w-[90%] mx-auto max-w-[1400px]">
        <h1 className="text-2xl font-semibold">Courses</h1>
        <p>Jumat, 3 Desember 1945</p>
      </div>

      <hr className="h-[2px] bg-[#AFAFAF]" />

      <div className="my-5 w-[90%] mx-auto py-3 flex gap-14 items-center max-w-[1400px]">
        <Select
          name="class"
          className="basic-single w-[18%] min-w-28 rounded-xl"
          value={selectedClass}
          classNamePrefix="select"
          isClearable={false}
          isSearchable={false}
          defaultValue={selectedClass}
          options={options}
          placeholder="Pilih Kelas"
          onChange={handleSelectClass}
        />
      </div>

      <div className="w-[90%] mx-auto flex gap-14 items-center max-w-[1400px]">
        <Accordion type="single" collapsible className="w-full">
          {courses?.map((_: CourseList, idx) => (
            <AccordionItem value={`item-${idx}`} className="border-b border-slate-400" key={_.id}>
              <AccordionTrigger className="text-lg py-7">{_.name}</AccordionTrigger>
              <AccordionContent>
                <p className="text-base">
                  <span className="font-semibold">Guru</span>: {_.enrollment_teacher.teacherName}
                </p>
                <Link href={`/course/detail/${idx + 1}`} className="hover:underline text-blue-600">
                  More detail
                </Link>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Layout>
  );
};

export default CoursePage;
