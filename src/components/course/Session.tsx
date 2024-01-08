import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSessionUser } from "@/contexts/SessionUserContext"
import { CourseDetailSession, ModuleListSession } from "@/types/course"

const Session = () => {
  const router = useRouter();
  const { courseId } = router.query;
  console.log({courseId});

  const { axiosJWT } = useSessionUser()
  const [courseSection, setCourseSection] = useState<CourseDetailSession[]>()

  React.useEffect(() => {
    if (courseId) fetchData()
  }, [courseId])

  const fetchData = async () => {
    const response = await axiosJWT.get(`${process.env.NEXT_PUBLIC_BASE_URL}/mardiyuana-student/course/detail?courseId=${courseId}`, {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*', 
        'Content-Type': 'application/json',
      },
    })
    console.log({response})
    if (response?.data?.statusCode === "000") {
      setCourseSection(response?.data?.data)
    }
  }
  console.log({courseSection})
  return (
    <Tabs defaultValue="bab 1" className="w-full overflow-x-hidden">
      <TabsList className="w-full flex items-center gap-4 justify-start pl-0 min-w-[500px] overflow-y-hidden overflow-x-scroll md:pr-0 sm:pr-10 pr-52 mb-5">
        {courseSection?.map((_: CourseDetailSession, idx) => (
          <TabsTrigger
            value={`bab ${_.numberSection + 1}`}
            className="text-base font-normal bg-gray-300 rounded-xl border-none data-[state=active]:bg-[#2F9757] data-[state=active]:text-white data-[state=active]:font-medium px-5"
          >
            Bab {_.numberSection + 1}
          </TabsTrigger>
        ))}
      </TabsList>
      {courseSection?.map((_: CourseDetailSession, idx) => (
        <TabsContent value={`bab ${_.numberSection + 1}`} className="flex flex-col gap-3 mt-0">
          <div>
            <h2 className="font-semibold text-3xl mb-2">{_.name}</h2>
            <h4 className="font-normal text-lg mb-1">{_.description}</h4>
            <ol className="text-normal">
              {_.modules?.sort((a, b) => a.numberModule - b.numberModule)?.map((module: ModuleListSession) => (
                <li>{module.numberModule + 1}. {module.content}</li>
              ))}
            </ol>
          </div>
          {_.supportedMaterial?.length > 0 && (
            <div>
              <h2 className="font-semibold text-2xl italic mt-5">Supported Material</h2>
              <ol>
                {_.supportedMaterial?.sort((a, b) => a.numberModule - b.numberModule)?.map((module: ModuleListSession) => (
                  <li>
                    <a className="text-blue-800 hover:underline text-lg" href={module.url} target="_blank">
                      {module.numberModule + 1}. {module.content}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default Session
