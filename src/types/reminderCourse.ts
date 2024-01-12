export type ReminderCourseList = {
  id: string
  academicYearId: string
  courseSectionId: string
  numberSection: number
  classId: string
  className: string
  teacherId: string
  teacherName: string
  title: string
  body: string
  createdDate: Date
}

export type ReminderCourseDetail = {
  id: string
  academicYearId: string
  courseSectionId: string
  classId: string
  className: string
  teacherId: string
  teacherName: string
  title: string
  body: string
  createdDate: Date
  course_section: {
    id: string
    courseId: string
    name: string
    numberSection: number
    course: {
      id: string
      name: string
    }
  }
}

export type ReminderCourseDashboard = {
  id: string
  title: string
  body: string
}
