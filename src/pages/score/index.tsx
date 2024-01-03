import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Select, { ActionMeta } from "react-select";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import ModalCumScore from "@/components/score/ModalCumScore";

type Option = { value: string; label: string };

const options = [
  { value: "X", label: "X" },
  { value: "XI", label: "XI" },
  { value: "XII", label: "XII" },
];

const ScorePage = () => {
  const router = useRouter();
  const [selectedClass, setSelectedClass] = useState<Option>(options[0]);
  const handleSelectClass = (option: Option | null, actionMeta: ActionMeta<Option>) => {
    option && setSelectedClass(option);
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-8 w-[90%] mx-auto max-w-[1400px]">
        <h1 className="text-2xl font-semibold">Score</h1>
        <p>Jumat, 3 Desember 1945</p>
      </div>

      <hr className="h-[2px] bg-[#AFAFAF]" />

      <div className="my-5 w-[90%] mx-auto py-3 flex gap-14 items-center max-w-[1400px]">
        <Select
          name="class"
          className="basic-single w-[18%] min-w-28 rounded-xl"
          value={selectedClass}
          classNamePrefix="select"
          isClearable={false}
          isSearchable={false}
          defaultValue={selectedClass}
          options={options}
          placeholder="Pilih Kelas"
          onChange={handleSelectClass}
        />
      </div>

      <div className="w-[90%] mx-auto flex gap-14 rounded-xl shadow-xl items-center max-w-[1400px]">
        <Table className="bg-white rounded-xl ">
          <TableHeader>
            <TableRow>
              <TableHead className="text-xl py-3 text-center">Mata Pelajaran</TableHead>
              <TableHead className="text-xl py-3 text-center">Cum. Assignment</TableHead>
              <TableHead className="text-xl py-3 text-center">Cum. Quiz</TableHead>
              <TableHead className="text-xl py-3 text-center">Mid Exam</TableHead>
              <TableHead className="text-xl py-3 text-center">KKM</TableHead>
              <TableHead className="text-xl py-3 text-center">Final Exam</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(10)].map((_, idx) => {
              return (
                <TableRow className="group">
                  <TableCell className="text-lg py-3 text-center">Seni Budaya</TableCell>
                  <TableCell className="text-lg py-3 text-center">
                    <div className="flex justify-center items-start">
                      <p>90</p>
                      <ModalCumScore type="Assignment" subject="Fisika" />
                    </div>
                  </TableCell>
                  <TableCell className="text-lg py-3 text-center">
                    <div className="flex justify-center items-start">
                      <p>86</p>
                      <ModalCumScore type="Quiz" subject="Olahraga" />
                    </div>
                  </TableCell>
                  <TableCell className="text-lg py-3 text-center">76</TableCell>
                  <TableCell className="text-lg py-3 text-center">70</TableCell>
                  <TableCell className="text-lg py-3 text-center">80</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </Layout>
  );
};

export default ScorePage;
