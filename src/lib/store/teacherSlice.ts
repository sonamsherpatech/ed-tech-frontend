import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITeacherInitialState } from "./types";

const teacherInitialSlice : ITeacherInitialState= {
    teacherName: "",
    teacherPassword: "",
  }

const teacherSlice = createSlice({
  name: "teacherSlice",
  initialState: teacherInitialSlice,
  reducers: {
    setTeacherName(state:ITeacherInitialState, action:PayloadAction<string>) {
      state.teacherName = action.payload;
    },
    setTeacherPassword(state:ITeacherInitialState, action:PayloadAction<string>) {
      state.teacherPassword = action.payload;
    },
  },
});

// const setTeacherName = teacherSlice.actions.setTeacherName
// const setTeacherPassword = teacherSlice.actions.setTeacherPassword

const { setTeacherName, setTeacherPassword } = teacherSlice.actions;
// setTeacherName()
export default teacherSlice.reducer;
export { setTeacherName, setTeacherPassword };

//createSlice functions always returns an object taht contains actions that is generated automatically
/**
 * i.e:
 * const teacherSlice ={
 *  actions: {
 *      setTeacherName: (){},
 *      setTeacherPassword : (){}
 * },
 * ...
 * }
 *
 * note: reducre ko name j xa, actions ko name pani same tehi hunxa, action invoke garne bittikaivitra reducer automatic call hunxa
 */

/**
 * Flow::
 *
 * reducers --> automatically creates corresponding actions
 *
 * reducers --> acommunication --> action lai call garnu parxa jaile pani action call hunxa, reducer hunna
 */
