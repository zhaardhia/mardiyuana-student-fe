export type ScoreCourseTypeConstant = {
  ASSIGNMENT: string
  DAILY_EXAM: string
  MID_EXAM: string
  FINAL_EXAM: string
}

export type ScoreCourseList = {
  id: string
  title: string
  scoreDue: string
  updatedDate: string
  scoreCourseId: string
  score: 0
  status: string
  type: string
}

export type ScoreCourseStudentAllScore = {
  id: string
  name: string
  courseidentifier: string
  grade: number
  curriculumId: string
  scoreCourseStudentDetail: ScoreCourseStudentDetailAllScore[]
}

export type ScoreCourseStudentDetailAllScore = {
  scoreMean: number
  scoreCourseType: string
  scoreCourseDetail: ScoreCourseDetailAllScore[] | []
}

export type ScoreCourseDetailAllScore = {
  id: string
  scoreCourseId: string
  score: number
  status: string
  type: string
  studentId: string
  courseId: string
  classId: string
  academicYearId: string
  createdDate: Date
}
