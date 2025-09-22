import { Status } from "@/lib/types/type";

export enum TeacherExpertise {
  Beginner = "beginner",
  Intermediate = "intermediate",
  Pro = "pro",
}

interface IInstituteTeacherInitialDataTeacherCourse {
  courseName: string;
  coursePrice: string;
  courseThumbnail: string;
}

export interface IInstituteTeacherInitialDataTeacher {
  teacherName: string;
  teacherEmail: string;
  teacherPhoneNumber: string;
  teacherExpertise: TeacherExpertise;
  joinedDate: string;
  salary: string;
  teacherPhoto: string;
  
}

export interface IInstituteTeacherWithCourse extends IInstituteTeacherInitialDataTeacher {
    course: IInstituteTeacherInitialDataTeacherCourse;
}

export interface IInstituteTeacherInitialData {
  teacher: IInstituteTeacherWithCourse;
  status: Status;
}
