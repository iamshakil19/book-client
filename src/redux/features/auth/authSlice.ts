import { IUser } from "../../../types/globalTypes";
import { createSlice } from "@reduxjs/toolkit";

interface IAuth {
  accessToken?: string;
  user?: IUser;
}

const initialState: IAuth = {
  accessToken: undefined,
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const {} = authSlice.actions

export default authSlice.reducer;
