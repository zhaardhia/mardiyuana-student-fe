import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

const Score = () => {
  const router = useRouter();

  return (
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
  )
}

export default Score