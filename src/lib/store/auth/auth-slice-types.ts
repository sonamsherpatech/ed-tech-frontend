import { Status } from "@/lib/types/type";

export interface IUserData {
  username: string;
  password: string;
}

export interface IInitialState {
  user: IUserData;
  status: Status;
}

export interface ILoginData {
  email: string;
  password: string;
}
