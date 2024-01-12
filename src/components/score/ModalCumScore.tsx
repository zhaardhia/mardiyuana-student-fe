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
import { ScoreCourseDetailAllScore } from "@/types"
import { Icon } from "@iconify/react";

type ModalCumPropsType = {
  type: string;
  subject: string;
  scoreList: ScoreCourseDetailAllScore[] | []
};

const ModalCumScore: React.FC<ModalCumPropsType> = ({ scoreList, subject, type }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Icon icon="iconoir:question-mark-circle" className="text-sm cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="bg-white w-[90%] lg:w-1/2 px-5 sm:px-10">
        <DialogHeader className="flex flex-col items-center">
          <DialogTitle className="text-2xl capitalize">Cummulative {type}</DialogTitle>
          <DialogDescription className="text-xl font-normal capitalize">{subject}</DialogDescription>
          <hr className="h-[2px] border-dotted w-[90%] mx-auto border-slate-300" />
        </DialogHeader>
        <Table className="bg-white rounded-xl">
          <TableHeader>
            <TableRow className="bg-slate-200">
              {scoreList.map((score: ScoreCourseDetailAllScore, idx) => {
                return (
                  <>
                    <TableHead className="text-xl py-3 text-center">{score.type} {idx + 1}</TableHead>
                  </>
                )
              })}
              
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="group">
              {scoreList.map((score: ScoreCourseDetailAllScore, idx) => {
                return (
                  <>
                    <TableCell className="text-xl border-b-2 border-slate-400 py-3 text-center">{score.score}</TableCell>
                  </>
                )
              })}
            </TableRow>
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
};

export default ModalCumScore;
