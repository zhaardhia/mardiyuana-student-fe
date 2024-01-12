import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Icon } from "@iconify/react";
import { useSessionUser } from "@/contexts/SessionUserContext";
import { useToast } from "../ui/use-toast";

const ModalEditPassword = () => {
  const { axiosJWT } = useSessionUser()
  const { toast } = useToast()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const [msgError, setMsgError] = useState<string>();

  const submitPassword = async () => {
    console.log("tes");
    try {
      // axios.defaults.withCredentials = true
      const response = await axiosJWT.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/mardiyuana-student/session/edit-password`,
        {
          oldPassword,
          newPassword,
          confirmNewPassword
        },
        {
          withCredentials: true,
          headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
        }
      );
      if (response?.data?.statusCode === "000") {
        toast({
          title: "Berhasil mengubah password!",
          // description: "Silahkan cek data kurikulum pada kolom yang tersedia. Perhatikan kembali tahun ajaran mana yang ingin diaktifkan",
          className: "bg-white"
        })
  
      } else {
        toast({
          title: "Gagal mengubah password.",
          description: response?.data?.message,
          className: "bg-red-200"
        })
      }
      setIsModalOpen(!isModalOpen)
    } catch (error: any) {
      console.error(error.response.data.message);
      toast({
        title: "Gagal mengubah password.",
        description: error.response.data.message,
        className: "bg-red-200"
      })
    }
  };

  return (
    <Dialog
      open={isModalOpen}
      onOpenChange={(val) => {
        setIsModalOpen(val)
      }}
    >
      <DialogTrigger asChild>
        <button className="flex items-center px-4 py-2 text-white font-medium rounded-xl bg-[#2F9757] hover:opacity-95">
          Edit Password
        </button>
      </DialogTrigger>
      <DialogContent className="bg-white w-[90%] lg:w-1/2">
        <DialogHeader>
          <DialogTitle className="text-2xl">Edit Password</DialogTitle>
          <DialogDescription>Masukkan Password Lama & Password yang anda inginkan.</DialogDescription>
          <hr className="h-[2px] bg-[#AFAFAF]" />
        </DialogHeader>
        <div className="flex flex-col gap-3">

          <div className="flex flex-col">
            <label htmlFor="title" className="text-slate-800 font-medium">
              Password Lama
            </label>
            <input id="title" placeholder="Masukkan Password Lama" className="border broder-slate-400 p-2 rounded-[6px]" 
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="title" className="text-slate-800 font-medium">
              Password Baru
            </label>
            <input id="title" placeholder="Masukkan Password Baru" className="border broder-slate-400 p-2 rounded-[6px]" 
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="title" className="text-slate-800 font-medium">
              Konfirmasi Password Baru
            </label>
            <input id="title" placeholder="Konfirmasi Password Baru" className="border broder-slate-400 p-2 rounded-[6px]" 
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <button
            onClick={submitPassword}
            type="submit"
            className="flex items-center justify-center px-4 py-2 text-white font-medium rounded-xl bg-[#2F9757] hover:opacity-95"
          >
            Edit Password
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalEditPassword;
