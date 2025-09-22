import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Status } from "@/lib/types/type";
import {
  IInstituteTeacherInitialData,
  IInstituteTeacherInitialDataTeacher,
  IInstituteTeacherWithCourse,
  TeacherExpertise,
} from "./institute-teacher-type";
import { AppDispatch } from "../../store";
import API from "@/lib/http";

const initialState: IInstituteTeacherInitialData = {
  teacher: {
    teacherName: "",
    teacherEmail: "",
    teacherPhoneNumber: "",
    teacherExpertise: TeacherExpertise.Beginner,
    joinedDate: "",
    salary: "",
    teacherPhoto: "",
    course: {
      courseName: "",
      coursePrice: "",
      courseThumbnail: "",
    },
  },
  status: Status.LOADING,
};

const instituteTeacherSlice = createSlice({
  name: "institute-teacher",
  initialState: initialState,
  reducers: {
    setTeacher(
      state: IInstituteTeacherInitialData,
      action: PayloadAction<IInstituteTeacherWithCourse>
    ) {
      state.teacher = action.payload;
    },
    setStatus(
      state: IInstituteTeacherInitialData,
      action: PayloadAction<Status>
    ) {
      state.status = action.payload;
    },
  },
});
const { setStatus, setTeacher } = instituteTeacherSlice.actions;
export default instituteTeacherSlice.reducer;

export function createInstituteTeacher(
  data: IInstituteTeacherInitialDataTeacher
) {
  return async function createInstituteTeacherThunk(dispatch: AppDispatch) {
    try {
      const response = await API.post("/institute/teacher", data);
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function fetchInstituteTeacher() {
  return async function fetchInstituteTeacherThunk(dispatch: AppDispatch) {
    try {
      const response = await API.get("/institute/teacher");
      if (response.status === 200) {
        response.data.data.length > 0 &&
          dispatch(setTeacher(response.data.data));
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function deleteInstituteTeacherById(id: string) {
  return async function deleteInstituteTeacherByIdThunk(dispatch: AppDispatch) {
    try {
      const response = await API.delete(`/institute/teacher/${id}`);
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        //pop out teacher of that id from slice too

      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}
