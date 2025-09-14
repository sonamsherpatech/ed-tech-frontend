import { Status } from "@/lib/types/type";

export interface IInstituteData {
  instituteName: string;
  instituteEmail: string;
  institutePhoneNumber: string;
  instituteAddress: string;
}

export interface IInstituteInitialData {
  institute: IInstituteData;
  status : Status
}
