import { createSlice } from "@reduxjs/toolkit"
import { AdminLoginAction } from "./AuthAction"
const localData = localStorage.getItem("login")
    ? JSON.parse(localStorage.getItem("login"))
    : {}
console.log(localData)
const AuthSlice = createSlice({
    name: "admin",
    initialState: { AdminLogin: localData },
    reducers: {
        logoutAction: (state) => {
            localStorage.removeItem("login")
            state.AdminLogin = null
        }
    },
    extraReducers(builder) {
        builder
            .addCase(AdminLoginAction.pending, (state) => {
                state.loading = true
            })
            .addCase(AdminLoginAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.AdminLogin = payload
            })
            .addCase(AdminLoginAction.rejected, (state, { payload }) => {
                state.loading = false
            })

    }
})
export const { logoutAction } = AuthSlice.actions

export default AuthSlice.reducer