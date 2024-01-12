import { AnnouncementDashboard, EventType, ReminderCourseDashboard } from "./index"

export type DashboardData = {
  eventNormal: EventType[]
  eventVote: EventType[]
  announcement: AnnouncementDashboard[]
  reminder: ReminderCourseDashboard[]
}
