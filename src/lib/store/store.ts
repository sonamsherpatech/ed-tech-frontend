import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth-slice";
import teacherSlice from "./teacher/teacher-slice";
import instituteSlice from "./institute/institute-slice";
import instituteCategorySlice from "./institute/category/institute-category-slice";

// collect all slices and store
const store = configureStore({
  reducer: {
    auth: authSlice,
    teacher: teacherSlice,
    institute: instituteSlice,
    category: instituteCategorySlice,
  },
});
export default store;

//dispatch ko type
//dispatch(setName()) --> dispatch() : AppDispatch
export type AppDispatch = typeof store.dispatch; // useDispatch lai type dina chayenxa
export type RootState = ReturnType<typeof store.getState>; //useSelector lai type dina

//react-redux -- package -- a connection between nextjs componenet and state management
// next - redux(toolkit) -- provides different hooks : useSelector(), useDispatch()
