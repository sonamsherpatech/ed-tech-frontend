import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInstituteData, IInstituteInitialData } from "./institute-slice-types";
import { Status } from "@/lib/types/type";
import { AppDispatch } from "../store";
import { API, APIWITHTOKEN } from "@/lib/http";

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

export function createInstitute(data: IInstituteData) {
  return async function createInstituteThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.post("/institute", data);
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function fetchInstitute() {
  return async function fetchInstituteThunk(dispatch: AppDispatch) {
    try {
      const response = await API.get("/institute");
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        dispatch(setInstitute(response.data.data));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(Status.ERROR));
    }
  };
}
