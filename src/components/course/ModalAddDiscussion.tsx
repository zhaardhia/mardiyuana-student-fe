import React from "react";
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

const ModalAddDiscussion = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center px-4 py-2 text-white font-medium rounded-xl bg-[#2F9757] hover:opacity-95">
          <Icon icon="material-symbols:add" /> Add Discussion
        </button>
      </DialogTrigger>
      <DialogContent className="bg-white w-[90%] lg:w-1/2">
        <DialogHeader>
          <DialogTitle className="text-2xl">Add Discussion</DialogTitle>
          <DialogDescription>Create new discussion with others</DialogDescription>
          <hr className="h-[2px] bg-[#AFAFAF]" />
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-3 w-3/5 border border-slate-400 rounded-[6px] p-3">
            <div className="flex flex-col gap-2 col-span-2">
              <p>Class</p>
              <p>Choose chapter</p>
            </div>
            <div className="flex flex-col items-center gap-2 col-span-1">
              <p>IPA-1</p>
              <div className="flex items-center gap-2">
                <Icon icon="material-symbols:arrow-left" color="#2f9757" className="cursor-pointer w-6 h-6" />
                <span className="font-medium text-base">4</span>
                <Icon icon="material-symbols:arrow-right" color="#2f9757" className="cursor-pointer w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="title" className="text-slate-800 font-medium">
              Judul
            </label>
            <input id="title" placeholder="Masukkan Judul" className="border broder-slate-400 p-2 rounded-[6px]" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="text-slate-800 font-medium">
              Deskripsi
            </label>
            <textarea
              id="description"
              placeholder="Masukkan Deskripsi"
              rows={5}
              className="border broder-slate-400 p-2 rounded-[6px]"
            ></textarea>
          </div>
        </div>
        <DialogFooter>
          <button
            type="submit"
            className="flex items-center justify-center px-4 py-2 text-white font-medium rounded-xl bg-[#2F9757] hover:opacity-95"
          >
            <Icon icon="material-symbols:add" /> Add Discussion
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalAddDiscussion;
