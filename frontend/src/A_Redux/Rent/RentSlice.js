import { createSlice } from "@reduxjs/toolkit"
import { AddhomeRentAction, gethomeRentAction, getsingleHomeRentData } from "./../Rent/RentAction"
const HomeRentSlice = createSlice({
    name: "HomeRent",
    initialState: { HomeRentData: [] , singleData : {} },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(AddhomeRentAction.pending, (state) => {
                state.loading = true
            })
            .addCase(AddhomeRentAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.AddHomeRent = payload
            })
            .addCase(AddhomeRentAction.rejected, (state, { payload }) => {
                state.loading = false
            })
            .addCase(gethomeRentAction.pending, (state) => {
                state.loading = true
            })
            .addCase(gethomeRentAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.HomeRentData = payload
            })
            .addCase(gethomeRentAction.rejected, (state, { payload }) => {
                state.loading = false
            })
            .addCase(getsingleHomeRentData.pending, (state) => {
                state.loading = true
            })
            .addCase(getsingleHomeRentData.fulfilled, (state, { payload }) => {
                state.loading = false
                state.singleData = payload
            })
            .addCase(getsingleHomeRentData.rejected, (state, { payload }) => {
                state.loading = false
            })

    }
})

export default HomeRentSlice.reducer