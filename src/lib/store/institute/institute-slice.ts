import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInstituteData, IInstituteInitialData } from "./institute-slice-types";
import { Status } from "@/lib/types/type";

const initialState: IInstituteInitialData = {
  institute: {
    instituteName: "",
    instituteAddress: "",
    instituteEmail: "",
    institutePhoneNumber: "",
  },
  status: Status.LOADING,
};

const instituteSlice = createSlice({
  name: "institute",
  initialState: initialState,
  reducers: {
    setInstitute(
      state: IInstituteInitialData,
      action: PayloadAction<IInstituteData>
    ) {
      state.institute = action.payload;
    },
    setStatus(state: IInstituteInitialData, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
  },
});
const { setInstitute, setStatus } = instituteSlice.actions;
export default instituteSlice.reducer;
export { setInstitute, setStatus };
