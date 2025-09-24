import { Status } from "@/lib/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../../store";
import { API } from "@/lib/http";
import {
  CourseLevel,
  IInstituteCourseInitialData,
  IInstituteCourseInitialDataCourse,
} from "./institute-course-slice-types";

const initialState: IInstituteCourseInitialData = {
  courses: [],
  status: Status.LOADING,
};

const instituteCourseSlice = createSlice({
  name: "institute-course",
  initialState: initialState,
  reducers: {
    setStatus(
      state: IInstituteCourseInitialData,
      action: PayloadAction<Status>
    ) {
      state.status = action.payload;
    },
    setCourse(
      state: IInstituteCourseInitialData,
      action: PayloadAction<IInstituteCourseInitialDataCourse>
    ) {
      state.courses.push(action.payload);
    },
    setDeleteCourse(
      state: IInstituteCourseInitialData,
      action: PayloadAction<string>
    ) {
      //id
      const index = state.courses.findIndex(
        (course) => course.id === action.payload
      );
      if (index !== -1) {
        state.courses.splice(index, 1);
      }
    },
    setEditCourse(
      state: IInstituteCourseInitialData,
      action: PayloadAction<any>
    ) {
      const id = action.payload.id;
      const data = action.payload.data;
      const index = state.courses.findIndex((course) => course.id === id);
      if (index !== -1) {
        state.courses[index] = data;
      }
    },
  },
});

const { setStatus, setCourse, setDeleteCourse, setEditCourse } =
  instituteCourseSlice.actions;
export default instituteCourseSlice.reducer;

//thunks
export function createInstituteCourse(data: any) {
  return async function createInstituteCourseThunk(dispatch: AppDispatch) {
    try {
      const response = await API.post("/institute/course", data);
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

export function deleteInstituteCourse(id: string) {
  return async function deleteInstituteCourseThunk(dispatch: AppDispatch) {
    try {
      const response = await API.delete(`/institute/course/${id}`);
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        dispatch(setDeleteCourse(id));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function fetchInsituteCourse() {
  return async function fetchInsituteCourseThunk(dispatch: AppDispatch) {
    try {
      const response = await API.get("/institute/course");
      if (response.status === 200) {
        response.data.data.length > 0 &&
          dispatch(setCourse(response.data.data));
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

export function fetchSingleInstituteCourse() {}

export function editInstituteCourse(id: string, data: any) {
  return async function createInstituteCourseThunk(dispatch: AppDispatch) {
    try {
      const response = await API.patch(`/institute/course/${id}`, data);
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        dispatch(setEditCourse({ id, data }));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}
