import Layout from "@/components/Layout";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useSessionUser } from "@/contexts/SessionUserContext"
import { ReminderCourseDetail } from "@/types"
import moment from "moment";

const ReminderDetailPage = () => {
  const router = useRouter();
  const { reminderId } = router.query;
  const { axiosJWT } = useSessionUser()
  const [reminderData, setReminderData] = useState<ReminderCourseDetail>()
  console.log({reminderId})
  useEffect(() => {
    if (reminderId) fetchData()
  }, [reminderId])

  const fetchData = async () => {
    const response = await axiosJWT.get(`${process.env.NEXT_PUBLIC_BASE_URL}/mardiyuana-student/course/reminder-course?id=${reminderId}`, {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*', 
        'Content-Type': 'application/json',
      },
    })
    console.log({response})
    if (response?.status === 200) {
      setReminderData(response?.data?.data)
    }
  }
  console.log({reminderData})
  return (
    <Layout>
      <div className="flex justify-between items-center mb-8 w-[90%] mx-auto max-w-[1400px]">
        <Icon icon="formkit:arrowleft" className="cursor-pointer h-full w-10" onClick={() => router.back()} />
        <h1 className="text-2xl font-semibold">{reminderData?.course_section?.course?.name}</h1>
      </div>

      <hr className="h-[2px] bg-[#AFAFAF]" />

      <div className="my-4 w-[90%] mx-auto flex flex-col max-w-[1400px]">
        <h2 className="mb-7 font-semibold text-2xl">Chapter {(reminderData?.course_section?.numberSection || 0) + 1}: {reminderData?.course_section?.name}</h2>

        <div className="p-4 border border-slate-400 rounded-xl bg-white">
          <div className="flex items-center gap-4">
            <img src="/photo_teacher.jpg" alt="" className="w-20 h-20 rounded-full object-cover" />
            <div className="flex flex-col">
              <h3 className="font-semibold text-xl">{reminderData?.teacherName}.</h3>
              <p className="font-normal">
                Teacher | {reminderData?.className} <span className="ml-4">{moment(reminderData?.createdDate).format("LLL")}</span>
              </p>
            </div>
          </div>

          <h4 className="font-medium text-xl underline mt-4">{reminderData?.title}</h4>

          <p className="text-justify mt-2">
            {reminderData?.body}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ReminderDetailPage;
