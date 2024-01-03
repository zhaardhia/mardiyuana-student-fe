import Layout from "@/components/Layout";
import React, { useState } from "react";
import Select, { ActionMeta } from "react-select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

type Option = { value: string; label: string };

const options = [
  { value: "X", label: "X" },
  { value: "XI", label: "XI" },
  { value: "XII", label: "XII" },
];

const CoursePage = () => {
  // const [selectOption, setSelectOption] = useState<Option[]>(options);
  const [selectedClass, setSelectedClass] = useState<Option>(options[0]);
  const handleSelectClass = (option: Option | null, actionMeta: ActionMeta<Option>) => {
    option && setSelectedClass(option);
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-8 w-[90%] mx-auto max-w-[1400px]">
        <h1 className="text-2xl font-semibold">Courses</h1>
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

      <div className="w-[90%] mx-auto flex gap-14 items-center max-w-[1400px]">
        <Accordion type="single" collapsible className="w-full">
          {[...Array(7)].map((_, idx) => (
            <AccordionItem value={`item-${idx}`} className="border-b border-slate-400">
              <AccordionTrigger className="text-lg py-7">Matematika</AccordionTrigger>
              <AccordionContent>
                <p className="text-base">
                  <span className="font-semibold">Guru</span>: Novaria Kemmel S.Pd
                </p>
                <Link href={`/course/detail/${idx + 1}`} className="hover:underline text-blue-600">
                  More detail
                </Link>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Layout>
  );
};

export default CoursePage;
