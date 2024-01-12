import Layout from "@/components/Layout";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import React from "react";

const DiscussionDetailPage = () => {
  const router = useRouter();
  const { scoringId } = router.query;
  return (
    <Layout>
      <div className="flex justify-between items-center mb-8 w-[90%] mx-auto max-w-[1400px]">
        <Icon icon="formkit:arrowleft" className="cursor-pointer h-full w-10" onClick={() => router.back()} />
        <h1 className="text-2xl font-semibold">Fisika</h1>
      </div>

      <hr className="h-[2px] border-dotted w-[90%] mx-auto border-slate-300" />

      <div className="my-4 w-[90%] mx-auto flex flex-col max-w-[1400px]">
        <h2 className="mb-7 font-semibold text-2xl">Chapter 4: Fotosintesis</h2>

        <div className="flex items-center gap-4">
          <img src="/photo_teacher.jpg" alt="" className="w-20 h-20 rounded-full object-cover" />
          <div className="flex flex-col w-1/5">
            <h3 className="font-semibold text-xl">Novaria Kemmel S.Pd.</h3>
            <p className="font-normal">
              Teacher | IPA - 1 <span className="ml-4">Sat, 11 Nov 2023</span>
            </p>
          </div>
        </div>

        <h4 className="font-medium text-xl underline mt-4">Latihan</h4>

        <p className="text-justify mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, totam adipisci. Hic eveniet beatae dolor
          eligendi cumque ex, rem iste quae velit illo, saepe ducimus tempore, asperiores consequatur consequuntur eaque
          ad accusamus excepturi recusandae voluptatem. Quia, voluptas laborum. Asperiores ullam, laborum soluta
          doloremque dolorum repellendus repellat nesciunt minima aut autem ipsum neque odit itaque perspiciatis vitae?
          Magni vero ex officiis at hic beatae quam eaque. Blanditiis et veritatis quod hic sequi architecto aperiam
          quae doloremque facere nisi dolorum labore iste, ipsum enim cumque eos facilis eaque quasi! Doloremque
          repellendus ratione, beatae ab iure quaerat temporibus vitae molestias, odit iste sit!
        </p>
      </div>
    </Layout>
  );
};

export default DiscussionDetailPage;
