export interface IStudentInitalSlice {
  studentName: string;
  studentAddress: string;
}

export interface IUserInitialState {
  name: string | null;
  address: string | null;
}

export interface ITeacherInitialState {
    teacherName : string, 
    teacherPassword : string
}

export interface IUserPayloadAction {
    name: string,
    address : string,
    age : number
}