import { Status } from "@/lib/types/type";

export interface ITeacherData {
  teacherName: string;
  teacherEmail: string;
  teacherPhoneNumber: string;
}

export interface ITeacherInitialData {
  teacher: ITeacherData;
  status: Status;
}
