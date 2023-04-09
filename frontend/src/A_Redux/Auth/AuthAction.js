import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const AdminLoginAction = createAsyncThunk("Admin/login", async ( userData, { rejectWithValue , getState }) => {
    try {
         console.log(userData , "Login data");
        const {data} = await axios.post("http://localhost:5000/login/admin" , userData )
        localStorage.setItem("login",JSON.stringify(data.result))
        return data.result
    } catch (error) {
        return rejectWithValue(error.message)
    }
}
)
 
 
 