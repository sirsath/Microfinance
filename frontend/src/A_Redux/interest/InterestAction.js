import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const AddInterestAction = createAsyncThunk("addint/act", async ( userData, { rejectWithValue , getState }) => {
    try {
        const {data} = await axios.post("http://localhost:5000/loan/addintrest"  , userData)
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
}
)
export const getInterestDataAction = createAsyncThunk("getint/act", async ( userData, { rejectWithValue , getState }) => {
    try {
        const {data} = await axios.get("http://localhost:5000/loan" )
        return data.result
    } catch (error) {
        return rejectWithValue(error.message)
    }
}
)
export const getSingleDetailsDataAction = createAsyncThunk("getSingle/int", async ( userDataID, { rejectWithValue , getState }) => {
    try {
        const {data} = await axios.get(`http://localhost:5000/loan/${userDataID}`)
        return data.result
    } catch (error) {
        return rejectWithValue(error.message)
    }
}
)
export const UpdateSingleDetailsDataAction = createAsyncThunk("UpdateSingle/int", async ( userData, { rejectWithValue , getState }) => {
    try {
        const {data} = await axios.put(`http://localhost:5000/loan/update/${userData._id}` , userData)
        return data.result
    } catch (error) {
        return rejectWithValue(error.message)
    }
}
)