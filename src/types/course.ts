import { ClassInitialCourse, AcademicYearInitialCourse, TeacherDataInitialCourse } from "./"

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

export type CourseDetailSession = {
  id: string
  courseId: string
  numberSection: number
  name: string
  description: string
  modules: ModuleListSession[]
  supportedMaterial: ModuleListSession[]
}

export type ModuleListSession = {
  id: string
  courseSection: string
  numberModule: number
  content: string
  url?: string
  type: string
}

export type CourseInitialCourseData = {
  id: string
  name: string
  courseidentifier: string
  grade: number
  course_sections: CourseSectionInitialCourseData[]
}

export type CourseSectionInitialCourseData = {
  id: string
  courseId: string
  name: string
  numberSection: number
}

export type InitialCourseData = {
  course: CourseInitialCourseData
  class: ClassInitialCourse
  academicYear: AcademicYearInitialCourse
  teacherData: TeacherDataInitialCourse
}
