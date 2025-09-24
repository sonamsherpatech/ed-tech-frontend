import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ICategoryAddData,
  IInstituteCategoryIntitalData,
  IInstituteCategoryIntitalDataCategory,
} from "./institute-category-slice-tyeps";
import { Status } from "@/lib/types/type";
import { AppDispatch } from "../../store";
import { APIWITHTOKEN } from "@/lib/http";

const initialState: IInstituteCategoryIntitalData = {
  category: [],
  status: Status.LOADING,
};

const instituteCategorySlice = createSlice({
  name: "institute-category",
  initialState: initialState,
  reducers: {
    setFetchCategory(
      state: IInstituteCategoryIntitalData,
      action: PayloadAction<IInstituteCategoryIntitalDataCategory[]>
    ) {
      state.category = action.payload;
    },
    setAddCategory(
      state: IInstituteCategoryIntitalData,
      action: PayloadAction<IInstituteCategoryIntitalDataCategory>
    ) {
      state.category.push(action.payload);
    },
    setStatus(
      state: IInstituteCategoryIntitalData,
      action: PayloadAction<Status>
    ) {
      state.status = action.payload;
    },
    setDelete(
      state: IInstituteCategoryIntitalData,
      action: PayloadAction<String>
    ) {
      const index = state.category.findIndex(
        (cat) => cat.id === action.payload
      );
      if (index !== -1) {
        state.category.splice(index, 1);
      }
    },
  },
});

const { setFetchCategory, setStatus, setDelete, setAddCategory } =
  instituteCategorySlice.actions;
export default instituteCategorySlice.reducer;

export function fetchCategories() {
  return async function fetchCategoriesThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.get("/institute/category");
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        response.data.data.length > 0 &&
          dispatch(setFetchCategory(response.data.data));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function addCategory(data: ICategoryAddData) {
  return async function addCategoryThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.post("/institute/category", data);
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        response.data.data && dispatch(setAddCategory(response.data.data));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function deleteCategory(id: string) {
  return async function deleteCategoryThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.delete(`/institute/category/${id}`);
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        dispatch(setDelete(id));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}
