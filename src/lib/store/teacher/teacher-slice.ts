import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITeacherData, ITeacherInitialData } from "./teacher-slice-types";
import { Status } from "@/lib/types/type";

const initialState: ITeacherInitialData = {
  teacher: {
    teacherName: "",
    teacherEmail: "",
    teacherPhoneNumber: "",
  },
  status: Status.LOADING,
};

const teacherSlice = createSlice({
  name: "teacher",
  initialState: initialState,
  reducers: {
    setTeacher(
      state: ITeacherInitialData,
      action: PayloadAction<ITeacherData>
    ) {
      state.teacher = action.payload;
    },
    setStatus(state: ITeacherInitialData, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
  },
});
const { setStatus, setTeacher } = teacherSlice.actions;
export default teacherSlice.reducer;
export { setStatus, setTeacher };
