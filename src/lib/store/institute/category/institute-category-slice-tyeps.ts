import { Status } from "@/lib/types/type";

export interface ICategoryAddData {
  categoryName: string;
  categoryDescription: string;
}

export interface IInstituteCategoryIntitalDataCategory
  extends ICategoryAddData {
  id: string;
  createdAt: string;
}

export interface IInstituteCategoryIntitalData {
  category: IInstituteCategoryIntitalDataCategory[];
  status: Status;
}
