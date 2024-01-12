import Layout from "@/components/Layout";
import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useSessionUser } from "@/contexts/SessionUserContext"
import { ScoreCourseStudentAllScore, ScoreCourseStudentDetailAllScore, ClassStudentList } from "@/types"

const gparam = {
  page: 1,
  pageSize: 10,
}

const ClassPage = () => {
  const { state, axiosJWT } = useSessionUser()
  const [currentPage, setCurrentPage] = useState(1);

  const [studentData, setStudentData] = useState<ClassStudentList[]>();
  const [totalData, setTotalData] = useState<number | null>();
  const [totalPages, setTotalPages] = useState<number>(10);
  const [nextPage, setNextPage] = useState<number | null>();

  useEffect(() => {
    fetchData()
  }, [currentPage])

  const onPageChange = (page: number) => setCurrentPage(page);

  const fetchData = async () => {
    try {
      console.log({beforeFetch: gparam})
      const response = await axiosJWT.get(`${process.env.NEXT_PUBLIC_BASE_URL}/mardiyuana-student/school-class/classmates?page=${gparam.page}&pageSize=${gparam.pageSize}`)

      console.log({response})

      if (response?.data?.statusCode === "000") {
        setStudentData(response?.data?.data?.listStudents);
        setTotalData(response?.data?.data?.totalData);
        setTotalPages(response?.data?.data?.totalPages);
        setNextPage(response?.data?.data?.nextPage);
      } else {
        throw Error("Fetch data error.")
      }
    } catch (error) {
      console.error(error)
    }
  }

  const renderPaginationItems = () => {
    const paginationItems = [];

    paginationItems.push(
      <PaginationItem key="previous">
        <PaginationPrevious
          // href="#"
          className="rounded-xl hover:border-[1px] border-gray-400 cursor-pointer hover:bg-slate-300"
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1)
              gparam.page = currentPage - 1
            }
          }}
          isActive={currentPage !== 1}
        />
      </PaginationItem>
    );

    paginationItems.push(
      <PaginationItem key={currentPage}>
        <PaginationLink className="rounded-xl hover:border-[1px] border-gray-400 cursor-pointer hover:bg-slate-300" isActive onClick={() => {
          setCurrentPage(currentPage)
          gparam.page = currentPage
        }}>
          {currentPage}
        </PaginationLink>
      </PaginationItem>
    );

    for (let page = currentPage + 1; page <= currentPage + 2 && page <= totalPages; page++) {
      paginationItems.push(
        <PaginationItem key={page}>
          <PaginationLink className="rounded-xl hover:border-[1px] border-gray-400 cursor-pointer hover:bg-slate-300" href="#" onClick={() => {
            setCurrentPage(page)
            gparam.page = page
          }}>
            {page}
          </PaginationLink>
        </PaginationItem>
      );
    }

    paginationItems.push(
      <PaginationItem key="next">
        <PaginationNext
          // href="#"
          className="rounded-xl hover:border-[1px] border-gray-400 cursor-pointer hover:bg-slate-300"
          onClick={() => {
            if (totalPages > currentPage) {
              setCurrentPage(currentPage + 1)
              gparam.page = currentPage + 1
            }
          }}
          isActive={currentPage !== totalPages}
        />
      </PaginationItem>
    );

    return paginationItems;
  };
  console.log({studentData})
  return (
    <Layout>
      <div className="flex justify-between items-center mb-8 w-[90%] mx-auto max-w-[1400px]">
        <h1 className="text-2xl font-semibold">Your Class</h1>
        <h1 className="text-2xl font-semibold">VII-A</h1>
      </div>

      <hr className="h-[2px] border-dotted w-[90%] mx-auto border-slate-300" />

      <div className="my-2 w-[90%] mx-auto py-3 flex gap-14 items-center max-w-[1400px]">
        <h1 className="text-xl">View Classmate</h1>
      </div>

      <hr className="h-[2px] border-dotted w-[90%] mx-auto border-slate-300" />

      <div className="my-5 w-[90%] mx-auto rounded-xl shadow-xl flex gap-14 items-center max-w-[1400px]">
        <Table className="bg-white rounded-xl min-w-[350px]">
          <TableHeader>
            <TableRow>
              <TableHead className="pl-7 text-xl py-3">Nama</TableHead>
              <TableHead className="pl-7 text-xl py-3">Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {studentData?.map((student: ClassStudentList) => {
              return (
                <TableRow>
                  <TableCell className="pl-7 py-3">
                    <div className="flex items-center gap-2 sm:gap-6">
                      <img src="/photo_profile.jpg" alt="" className="w-16 h-16 rounded-full object-cover" />
                      <h4 className="text-center text-lg ">{student.studentName}</h4>
                    </div>
                  </TableCell>
                  <TableCell className="pl-7 text-lg py-3">{student.student?.email}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <div className="flex overflow-x-auto sm:justify-center mt-5">
        {totalData && (
          <Pagination>
            <PaginationContent>{renderPaginationItems()}</PaginationContent>
          </Pagination>
        )}
      </div>
    </Layout>
  );
};

export default ClassPage;
