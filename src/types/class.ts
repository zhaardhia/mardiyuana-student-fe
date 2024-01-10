export type ClassInitialCourse = {
  id: string
  name: string
  status: string
}

export type ClassStudentList = {
  id: string
  studentId: string
  studentName: string
  classId: string
  student: {
    id: string
    email: string
    phone: string
  }
}
