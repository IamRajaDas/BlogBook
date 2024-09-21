import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    theme: 'light',
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        },
        lightTheme:(state)=>{
            state.theme='light';
        },
        darkTheme:(state)=>{
            state.theme='dark';
        }
     }
})

export const {login, logout,lightTheme,darkTheme} = authSlice.actions;

export default authSlice.reducer;