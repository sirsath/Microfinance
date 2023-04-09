import { createSlice } from "@reduxjs/toolkit"
import { AddInterestAction, getInterestDataAction, getSingleDetailsDataAction } from "../interest/InterestAction"
const InterestSlice = createSlice({
    name: "interest",
    initialState: { interestData: [] , singleUserDetails : {}},
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(AddInterestAction.pending, (state) => {
                state.loading = true
            })
            .addCase(AddInterestAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.AddInterest = payload
            })
            .addCase(AddInterestAction.rejected, (state, { payload }) => {
                state.loading = false
            })
            .addCase(getInterestDataAction.pending, (state) => {
                state.loading = true
            })
            .addCase(getInterestDataAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.interestData = payload
            })
            .addCase(getInterestDataAction.rejected, (state, { payload }) => {
                state.loading = false
            })
            .addCase(getSingleDetailsDataAction.pending, (state) => {
                state.loading = true
            })
            .addCase(getSingleDetailsDataAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.singleUserDetails = payload
            })
            .addCase(getSingleDetailsDataAction.rejected, (state, { payload }) => {
                state.loading = false
            })

    }
})

export default InterestSlice.reducer