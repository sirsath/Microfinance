import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const CustomerRegistrationAction = createAsyncThunk("Customer/Resg", async ( CustomerData, { rejectWithValue , getState }) => {
    try {
        const {data} = await axios.post("http://localhost:5000/customer/register" , CustomerData )
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
}
)
export const getAllCustomerDataAction = createAsyncThunk("Customert/get", async ( CustomerData, { rejectWithValue , getState }) => {
    try {
        const {data} = await axios.get("http://localhost:5000/customer")
        return data.result
    } catch (error) {
        return rejectWithValue(error.message)
    }
}
)
