export type CourseList = {
  id: string
  name: string
  courseIdentifier: string
  grade: number
  curriculumId: string
  curriculumName: string
  enrollment_teacher: {
    id: string
    teacherId: string
    teacherName: string
    className: string
    academicYear: string
    academicYearId: string
    status: string
  }
}
