import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const AddhomeRentAction = createAsyncThunk("addint/act", async ( userData, { rejectWithValue , getState }) => {
    try {
        const {data} = await axios.post("http://localhost:5000/rent/addHomerent"  , userData)
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
}
)
export const gethomeRentAction = createAsyncThunk("getint/act", async ( userData, { rejectWithValue , getState }) => {
    try {
        const {data} = await axios.get("http://localhost:5000/rent" )
        return data.result
    } catch (error) {
        return rejectWithValue(error.message)
    }
}
)

export const getsingleHomeRentData = createAsyncThunk("getHome/sing", async ( rentDataID, { rejectWithValue , getState }) => {
    try {
        const {data} = await axios.get(`http://localhost:5000/rent/${rentDataID}`)
        return data.result
    } catch (error) {
        return rejectWithValue(error.message)
    }
} )