import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import teacherSlice from "./teacherSlice";
import studentSlice from "./studentSlice";

// collect all slices and store
const store = configureStore({
  reducer: {
    user: userSlice,
    teacher: teacherSlice,
    student: studentSlice,
  },
});

export default store;

//dispatch ko type
//dispatch(setName()) --> dispatch() : AppDispatch
export type AppDispatch = typeof store.dispatch; // useDispatch lai type dina chayenxa
export type RootState = ReturnType<typeof store.getState>; //useSelector lai type dina

//react-redux -- package -- a connection between nextjs componenet and state management
// next - redux(toolkit) -- provides different hooks : useSelector(), useDispatch()
