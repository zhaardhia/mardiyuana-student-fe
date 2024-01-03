import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import React from "react";

const ProfilePage = () => {
  const router = useRouter();
  const { profileId } = router.query;

  return (
    <Layout>
      <div className="flex justify-between items-center mb-8 w-[90%] mx-auto max-w-[1400px]">
        <h1 className="text-2xl font-semibold">Profile</h1>
        <p>Jumat, 3 Desember 1945</p>
      </div>

      <hr className="h-[2px] bg-[#AFAFAF]" />

      <div className="my-5 w-[90%] mx-auto py-3 flex flex-col gap-14 max-w-[1400px]">
        <div className="flex sm:flex-row flex-col items-center sm:justify-center gap-10">
          <img src="/photo_profile.jpg" alt="" className="w-56 h-56 sm:w-72 sm:h-72 rounded-full object-cover" />
          <div className="flex flex-col justify-center gap-1">
            <label htmlFor="" className="font-medium text-lg text-gray-700">
              Ubah Gambar
            </label>
            <button className="py-1 px-4 text-lg rounded-[6px] text-white bg-green-600">Edit</button>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-10 justify-center">
          <div className="flex flex-col gap-3 w-full sm:w-1/3">
            <div>
              <label htmlFor="" className="font-medium text-lg">
                Name
              </label>
              <input
                type="text"
                className="rounded-[8px] border border-gray-400 bg-[#F9FAFB] focus:outline-primaryBtn px-3 w-full py-2"
                value={"Fadli Rizaldy"}
              />
            </div>
            <div>
              <label htmlFor="" className="font-medium text-lg">
                Kelas
              </label>
              <input
                type="text"
                className="rounded-[8px] border border-gray-400 bg-[#F9FAFB] focus:outline-primaryBtn px-3 w-full py-2"
                value={"IX-A"}
              />
            </div>
            <div>
              <label htmlFor="" className="font-medium text-lg">
                Wali Kelas
              </label>
              <input
                type="text"
                className="rounded-[8px] border border-gray-400 bg-[#F9FAFB] focus:outline-primaryBtn px-3 w-full py-2"
                value={"Novaria"}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-medium text-lg">
              Ubah Password
            </label>
            <button className="py-1 px-4 text-lg rounded-[6px] text-white bg-green-600">Edit</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
