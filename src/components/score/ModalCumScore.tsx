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
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { Icon } from "@iconify/react";

type ModalCumPropsType = {
  type: string;
  subject: string;
};

const ModalCumScore = (props: ModalCumPropsType) => {
  const { type, subject } = props;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Icon icon="iconoir:question-mark-circle" className="text-sm cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="bg-white w-[90%] lg:w-1/2 px-5 sm:px-10">
        <DialogHeader className="flex flex-col items-center">
          <DialogTitle className="text-2xl capitalize">Cummulative {type}</DialogTitle>
          <DialogDescription className="text-xl font-normal capitalize">{subject}</DialogDescription>
          <hr className="h-[2px] bg-[#AFAFAF]" />
        </DialogHeader>
        <Table className="bg-white rounded-xl">
          <TableHeader>
            <TableRow className="bg-slate-200">
              <TableHead className="text-xl py-3 text-center">Quiz 1</TableHead>
              <TableHead className="text-xl py-3 text-center">Quiz 2</TableHead>
              <TableHead className="text-xl py-3 text-center">Quiz 3</TableHead>
              <TableHead className="text-xl py-3 text-center">Quiz 4</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="group">
              <TableCell className="text-xl border-b-2 border-slate-400 py-3 text-center">90</TableCell>
              <TableCell className="text-xl border-b-2 border-slate-400 py-3 text-center">99</TableCell>
              <TableCell className="text-xl border-b-2 border-slate-400 py-3 text-center">87</TableCell>
              <TableCell className="text-xl border-b-2 border-slate-400 py-3 text-center">67</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
};

export default ModalCumScore;
