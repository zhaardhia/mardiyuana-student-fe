import React from "react";
import Layout from "@/components/Layout";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ModalAddDiscussion from "@/components/course/ModalAddDiscussion";

const CourseDetail = () => {
  const router = useRouter();
  const { courseId } = router.query;
  console.log(courseId);

  return (
    <Layout>
      <div className="flex justify-between items-center mb-8 w-[90%] mx-auto max-w-[1400px]">
        <Icon icon="formkit:arrowleft" className="cursor-pointer h-full w-10" onClick={() => router.back()} />
        <h1 className="text-2xl font-semibold">Fisika</h1>
      </div>

      <hr className="h-[2px] bg-[#AFAFAF]" />

      <div className="my-4 w-[90%] mx-auto flex gap-14 items-center max-w-[1400px]">
        <div className="flex items-center gap-4">
          <img src="/photo_teacher.jpg" alt="" className="w-20 h-20 rounded-full object-cover" />
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold">Novaria Kemmel S.Pd, M.Pd</h3>
            <p>Teacher | IPA - 1</p>
          </div>
        </div>
      </div>

      <hr className="h-[2px] bg-[#AFAFAF]" />

      <div className="my-4 w-[90%] mx-auto flex gap-14 items-center max-w-[1400px]">
        <Tabs defaultValue="session" className="w-full overflow-x-hidden">
          <TabsList className="w-full flex items-center gap-4 justify-start pl-0 mb-3 min-w-[300px] overflow-x-scroll overflow-y-hidden">
            <TabsTrigger value="session" className="text-lg font-normal">
              Session
            </TabsTrigger>
            <TabsTrigger value="discussion" className="text-lg font-normal">
              Discussion
            </TabsTrigger>
            <TabsTrigger value="scoring" className="text-lg font-normal">
              Scoring
            </TabsTrigger>
          </TabsList>

          <TabsContent value="session">
            <Tabs defaultValue="bab 1" className="w-full overflow-x-hidden">
              <TabsList className="w-full flex items-center gap-4 justify-start pl-0 overflow-y-hidden min-w-[500px] overflow-x-scroll">
                {[...Array(8)].map((_, idx) => (
                  <TabsTrigger
                    value={`bab ${idx + 1}`}
                    className="text-base font-normal bg-gray-300 rounded-xl border-none data-[state=active]:bg-[#2F9757] data-[state=active]:text-white data-[state=active]:font-medium px-5"
                  >
                    Bab {idx + 1}
                  </TabsTrigger>
                ))}
              </TabsList>
              {[...Array(8)].map((_, idx) => (
                <TabsContent value={`bab ${idx + 1}`} className="mt-10">
                  <h2 className="font-semibold text-3xl mb-2">Fotosintesis</h2>
                  <h4 className="font-normal text-lg mb-1">Mengenal foto sintesis</h4>
                  <ol className="text-normal">
                    <li>1. Mempelajari Bab {idx + 1}</li>
                    <li>2. Visualisasi fotosintesis</li>
                    <li>3. Fakta unik mengenai fotosintesis</li>
                  </ol>

                  <h2 className="font-semibold text-2xl italic mt-5">Supported Material</h2>
                  <button className="text-blue-800 hover:underline text-lg">Click</button>
                </TabsContent>
              ))}
            </Tabs>
          </TabsContent>

          <TabsContent value="discussion">
            <Tabs defaultValue="bab 1" className="w-full overflow-x-hidden">
              <TabsList className="w-full flex items-center gap-4 justify-start pl-0 min-w-[500px] overflow-y-hidden overflow-x-scroll md:pr-0 sm:pr-10 pr-52">
                {[...Array(8)].map((_, idx) => (
                  <TabsTrigger
                    value={`bab ${idx + 1}`}
                    className="text-base font-normal bg-gray-300 rounded-xl border-none data-[state=active]:bg-[#2F9757] data-[state=active]:text-white data-[state=active]:font-medium px-5"
                  >
                    Bab {idx + 1}
                  </TabsTrigger>
                ))}
              </TabsList>
              {[...Array(8)].map((_, idx) => (
                <TabsContent value={`bab ${idx + 1}`} className="mt-10">
                  <h2 className="font-semibold text-3xl mb-2">Fotosintesis</h2>
                  <div className="flex items-center justify-between">
                    <ModalAddDiscussion />

                    <section className="flex items-center gap-3">
                      <Icon icon="iconamoon:arrow-left-2" className="w-5 h-5" />
                      <p>1</p>
                      <p>2</p>
                      <Icon icon="iconamoon:arrow-right-2" className="w-5 h-5" />
                    </section>
                  </div>

                  <section className="mt-5">
                    <div
                      className="py-4 px-5 lg:px-10 bg-white rounded-[6px] flex items-center gap-5 shadow-lg cursor-pointer"
                      onClick={() => router.push(`/discussion/${courseId}`)}
                    >
                      <img src="/photo_teacher.jpg" alt="" className="w-20 h-20 rounded-full object-cover" />
                      <div className="flex flex-col lg:flex-row lg:items-center ">
                        <div className="flex flex-col lg:w-1/5">
                          <h3 className="font-semibold text-lg lg:text-xl">Novaria Kemmel S.Pd.</h3>
                          <p>Teacher | IPA - 1</p>
                          <p className="text-sm lg:text-base">Sat, 11 Nov 2023</p>
                        </div>
                        <div className="text-lg lg:text-2xl font-normal lg:ml-10 w-full lg:w-2/3">
                          Lanjutan Hasil Diskusi Fotosintesis
                        </div>
                      </div>
                    </div>
                  </section>
                </TabsContent>
              ))}
            </Tabs>
          </TabsContent>

          <TabsContent value="scoring">
            <Tabs defaultValue="bab 1" className="w-full overflow-x-hidden">
              <TabsList className="w-full flex items-center gap-4 justify-start pl-0 min-w-[500px] overflow-y-hidden overflow-x-scroll">
                {[...Array(8)].map((_, idx) => (
                  <TabsTrigger
                    value={`bab ${idx + 1}`}
                    className="text-base font-normal bg-gray-300 rounded-xl border-none data-[state=active]:bg-[#2F9757] data-[state=active]:text-white data-[state=active]:font-medium px-5"
                  >
                    Bab {idx + 1}
                  </TabsTrigger>
                ))}
              </TabsList>
              {[...Array(8)].map((_, idx) => (
                <TabsContent value={`bab ${idx + 1}`} className="mt-10">
                  <h2 className="font-semibold text-3xl mb-2">Fotosintesis</h2>

                  <section
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 cursor-pointer"
                    onClick={() => router.push(`/scoring/${idx + 1}`)}
                  >
                    <div className="py-5 px-6 bg-white rounded-[6px] flex flex-col cursor-pointer shadow-lg hover:shadow-xl">
                      <h3 className="font-medium text-[22px] mb-1">Latihan</h3>
                      <h5 className="text-base">Fotosintesis menurut ahli</h5>
                      <p className="text-[#52C61B] flex items-center gap-2">
                        Completed <Icon icon="lets-icons:check-fill" />
                      </p>
                      <p className="text-sm">due, 22 November 2025</p>
                    </div>
                    <div className="py-5 px-6 bg-white rounded-[6px] flex flex-col cursor-pointer shadow-lg hover:shadow-xl">
                      <h3 className="font-medium text-[22px] mb-1">Quiz</h3>
                      <h5 className="text-base">Fotosintesis menurut ahli</h5>
                      <p className="text-[#F24E1E] flex items-center gap-2">
                        Not Completed <Icon icon="gridicons:cross-circle" />
                      </p>
                      <p className="text-sm">due, 22 November 2025</p>
                    </div>
                    <div className="py-5 px-6 bg-white rounded-[6px] flex flex-col cursor-pointer shadow-lg hover:shadow-xl">
                      <h3 className="font-medium text-[22px] mb-1">Quiz 2</h3>
                      <h5 className="text-base">Fotosintesis menurut ahli</h5>
                      <p className="text-[#F24E1E] flex items-center gap-2">
                        Not Completed <Icon icon="gridicons:cross-circle" />
                      </p>
                      <p className="text-sm">due, 22 November 2025</p>
                    </div>
                    <div className="py-5 px-6 bg-white rounded-[6px] flex flex-col cursor-pointer shadow-lg hover:shadow-xl">
                      <h3 className="font-medium text-[22px] mb-1">Latihan</h3>
                      <h5 className="text-base">Fotosintesis menurut ahli</h5>
                      <p className="text-[#52C61B] flex items-center gap-2">
                        Completed <Icon icon="lets-icons:check-fill" />
                      </p>
                      <p className="text-sm">due, 22 November 2025</p>
                    </div>
                  </section>
                </TabsContent>
              ))}
            </Tabs>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default CourseDetail;
