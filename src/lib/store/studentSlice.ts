import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStudentInitalSlice } from "./types";

const studentInitialSlice: IStudentInitalSlice = {
  studentName: "",
  studentAddress: "",
};

const studentSlice = createSlice({
  name: "studentSlice",
  initialState: studentInitialSlice,
  reducers: {
    setStudentName(state: IStudentInitalSlice, action: PayloadAction<string>) {
      state.studentName = action.payload;
    },
    setStudentAddress(
      state: IStudentInitalSlice,
      action: PayloadAction<string>
    ) {
      state.studentAddress = action.payload;
    },
  },
});

const { setStudentName, setStudentAddress } = studentSlice.actions;
// dispatch(setStudentAddress("Itahari"))
export default studentSlice.reducer;
export { setStudentName, setStudentAddress };
