import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInitialState, IUserPayloadAction } from "./types";

const userInitialState: IUserInitialState = {
  name: "",
  address: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: userInitialState,
  reducers: {
    //state --> mathi ko initialState
    //action --> trigger garda pathaune data
    setName(state:IUserInitialState, action:PayloadAction<string>) {
      state.name = action.payload;
    },
    setAddress(state:IUserInitialState, action:PayloadAction<string>) {
      state.address = action.payload;
    },
  },
});

const { setName, setAddress } = userSlice.actions;
// dispatch(setName({
//     name: "sonam",
//     address: "pasikot",
//     age: 23
// }))
export { setName, setAddress };
export default userSlice.reducer;
/**
 * initialState is similar to ---> const [name, setName] = useState(null), const[address, setAddress] = useState(null)
 * Reducers --> is a function jasko through bata hami kehi programmed lekhxau usually initialState update
 */
