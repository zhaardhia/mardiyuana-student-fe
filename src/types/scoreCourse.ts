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
