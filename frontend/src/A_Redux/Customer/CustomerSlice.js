import { createSlice } from "@reduxjs/toolkit"
import { CustomerRegistrationAction, getAllCustomerDataAction } from "./../Customer/CustomerAction"
const customerSlice = createSlice({
    name: "customer",
    initialState: { CustomerDetails : [] },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(CustomerRegistrationAction.pending, (state ) => {
                state.loading = true
            })
            .addCase(CustomerRegistrationAction.fulfilled, (state ,{payload}) => {
                state.loading = false
                state.CustomerRegister = payload  
            })
            .addCase(CustomerRegistrationAction.rejected, (state, { payload }) => {
                state.loading = false
            })  
            .addCase(getAllCustomerDataAction.pending, (state ) => {
                state.loading = true
            })
            .addCase(getAllCustomerDataAction.fulfilled, (state ,{payload}) => {
                state.loading = false
                state.CustomerDetails = payload
            })
            .addCase(getAllCustomerDataAction.rejected, (state, { payload }) => {
                state.loading = false
            })  

        }
    })

    export default customerSlice.reducer