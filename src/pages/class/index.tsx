import Layout from "@/components/Layout";
import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ClassPage = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center mb-8 w-[90%] mx-auto max-w-[1400px]">
        <h1 className="text-2xl font-semibold">Your Class</h1>
        <h1 className="text-2xl font-semibold">VII-A</h1>
      </div>

      <hr className="h-[2px] bg-[#AFAFAF]" />

      <div className="my-2 w-[90%] mx-auto py-3 flex gap-14 items-center max-w-[1400px]">
        <h1 className="text-xl">View Classmate</h1>
      </div>

      <hr className="h-[2px] bg-[#AFAFAF]" />

      <div className="my-5 w-[90%] mx-auto rounded-xl shadow-xl flex gap-14 items-center max-w-[1400px]">
        <Table className="bg-white rounded-xl min-w-[350px]">
          <TableHeader>
            <TableRow>
              <TableHead className="pl-7 text-xl py-3">Nama</TableHead>
              <TableHead className="pl-7 text-xl py-3">Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(10)].map(() => {
              return (
                <TableRow>
                  <TableCell className="pl-7 py-3">
                    <div className="flex items-center gap-2 sm:gap-6">
                      <img src="/photo_profile.jpg" alt="" className="w-16 h-16 rounded-full object-cover" />
                      <div className="flex flex-col w-fit">
                        <h4 className="text-center text-lg ">Martin Garrix Ramadhan</h4>
                        <h5 className="text-center">VII-A</h5>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="pl-7 text-lg py-3">fadli@mail.com</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </Layout>
  );
};

export default ClassPage;
