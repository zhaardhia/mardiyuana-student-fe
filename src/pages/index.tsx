import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  return (
    <Layout>
      <div className="flex justify-between items-center mb-8 w-[90%] mx-auto max-w-[1400px]">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p>Jumat, 3 Desember 1945</p>
      </div>

      <hr className="h-[2px] bg-[#AFAFAF]" />

      <div className="my-5 w-[90%] mx-auto py-3 flex lg:flex-row flex-col gap-14 items-center max-w-[1400px]">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-xl">School Events</h2>
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                <div
                  className="h-[250px] w-full rounded-xl relative cursor-pointer"
                  onClick={() => router.push(`/event/12321`)}
                >
                  <img src="/vote_img.png" alt="" className="h-full object-cover rounded-xl w-full" />
                  <p className="text-white absolute left-5 z-50 bottom-5 font-semibold text-xl">Peningkatan Literasi</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div
                  className="h-[250px] w-full rounded-xl relative cursor-pointer"
                  onClick={() => router.push(`/event/12321`)}
                >
                  <img src="/school_event.png" alt="" className="h-full object-cover rounded-xl w-full" />
                  <p className="text-white absolute left-5 z-50 bottom-5 font-semibold text-xl">Class Meeting</p>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
        <div className="flex flex-col gap-4 xl:w-fit w-full">
          <h2 className="text-xl">Notification</h2>
          <div className="bg-white min-h-[247px] rounded-[10px] px-5 flex flex-col items-center justify-center gap-3 w-full xl:w-[380px]">
            <p className="bg-[#E4EBF7] px-5 py-3 rounded-[15px] w-full">Libur Nasional</p>
            <p className="bg-[#E4EBF7] px-5 py-3 rounded-[15px] w-full">Ujian Semester</p>
            <p className="bg-[#E4EBF7] px-5 py-3 rounded-[15px] w-full">Quiz</p>
            <p className="text-center text-blue-600 hover:underline cursor-pointer w-fit px-3">Load more..</p>
          </div>
        </div>
      </div>

      <hr className="h-[2px] bg-[#AFAFAF]" />

      <div className="my-5 w-[90%] mx-auto py-3 flex lg:flex-row flex-col gap-14 items-center justify-center max-w-[1400px]">
        <div className="flex flex-col gap-4 xl:w-fit w-full">
          <h2 className="text-xl">Reminder</h2>
          <div className="bg-white min-h-[247px] rounded-[10px] px-5 flex flex-col justify-center gap-3 w-full xl:w-[380px]">
            <p className="bg-[#E4EBF7] px-5 py-4 rounded-[15px]">Libur Nasional</p>
            <p className="bg-[#E4EBF7] px-5 py-4 rounded-[15px]">Ujian Semester</p>
            <p className="bg-[#E4EBF7] px-5 py-4 rounded-[15px]">Quiz</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl">Displaying Vote</h2>
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent>
                <CarouselItem>
                  <div className="h-[250px] w-full relative cursor-pointer" onClick={() => router.push(`/vote/12321`)}>
                    <img src="/vote_img.png" alt="" className="h-full object-cover rounded-xl w-full" />
                    <p className="text-white absolute left-5 z-50 bottom-5 font-semibold text-xl">
                      Study Tour: Parayangan Farm
                    </p>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="h-[250px] w-full relative cursor-pointer" onClick={() => router.push(`/vote/12321`)}>
                    <img src="/school_event.png" alt="" className="h-full object-cover rounded-xl w-full" />
                    <p className="text-white absolute left-5 z-50 bottom-5 font-semibold text-xl">Bagi Rapot di Bali</p>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </Layout>
  );
}
