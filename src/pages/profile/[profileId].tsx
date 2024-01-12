import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import moment from "moment";
import ModalEditPassword from "@/components/profile/ModalEditPassword";
import { useSessionUser } from "@/contexts/SessionUserContext";
import { ProfileDataType } from "@/types";

const ProfilePage = () => {
  const { axiosJWT, state } = useSessionUser()
  const userId = state?.userInfo?.userId
  const [profile, setProfile] = useState<ProfileDataType>()

  useEffect(() => {
    fetchData()
  }, [userId])

  const fetchData = async () => {
    const response = await axiosJWT.get(`${process.env.NEXT_PUBLIC_BASE_URL}/mardiyuana-student/session/profile-data`, {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*', 
        'Content-Type': 'application/json',
      },
    })
    console.log({response})
    if (response?.status === 200) {
      setProfile(response?.data?.data)
    }
  }
  console.log({profile})
  return (
    <Layout>
      <div className="flex justify-between items-center mb-8 w-[90%] mx-auto max-w-[1400px]">
        <h1 className="text-2xl font-semibold">Profile</h1>
        <p>{moment().format('llll')}</p>
      </div>

      <hr className="h-[2px] border-dotted w-[90%] mx-auto border-slate-300" />

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
                Nama Lengkap
              </label>
              <input
                type="text"
                className="rounded-[8px] border  focus:outline-primaryBtn px-3 w-full py-2"
                value={profile?.fullname}
              />
            </div>
            <div>
              <label htmlFor="" className="font-medium text-lg">
                Nama Singkat
              </label>
              <input
                type="text"
                className="rounded-[8px] border  focus:outline-primaryBtn px-3 w-full py-2"
                value={profile?.name}
              />
            </div>
            <div>
              <label htmlFor="" className="font-medium text-lg">
                Email
              </label>
              <input
                type="text"
                className="rounded-[8px] border  focus:outline-primaryBtn px-3 w-full py-2"
                value={profile?.email}
              />
            </div>
            <div>
              <label htmlFor="" className="font-medium text-lg">
                Username
              </label>
              <input
                type="text"
                className="rounded-[8px] border  focus:outline-primaryBtn px-3 w-full py-2"
                value={profile?.username}
              />
            </div>
            <div>
              <label htmlFor="" className="font-medium text-lg">
                Nomor Telepon / HP
              </label>
              <input
                type="text"
                className="rounded-[8px] border  focus:outline-primaryBtn px-3 w-full py-2"
                value={profile?.phone}
              />
            </div>
            <div className="flex flex-col gap-1">
              <ModalEditPassword />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
