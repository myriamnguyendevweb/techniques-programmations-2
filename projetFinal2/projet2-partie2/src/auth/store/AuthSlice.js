import { createSlice } from "@reduxjs/toolkit";
import reducers from "./AuthReducers";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            email: "",
            name: "",
            id: "",
        }
    },
    reducers: reducers,
});

export const { updateEmail, updateName, updateWholeUser, resetUser } = authSlice.actions;

export default AuthSlice.reducer;