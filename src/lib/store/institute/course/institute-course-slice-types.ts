import { Status } from "@/lib/types/type";

export enum CourseLevel {
  Beginner = "beginner",
  Intermediate = "intermediate",
  Advance = "advance",
}

export interface IInstituteCourseInitialDataCourse {
  courseName: string;
  courseDescription: string;
  coursePrice: string;
  courseDuration: string;
  courseLevel: CourseLevel;
  id: string;
}

export interface IInstituteCourseInitialData {
  courses: IInstituteCourseInitialDataCourse[];
  status: Status;
}
