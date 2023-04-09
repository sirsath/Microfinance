import { configureStore } from "@reduxjs/toolkit"
import AuthSlice from "./Auth/AuthSlice"
import CustomerSlice from "./Customer/CustomerSlice"
import InterestSlice from "./interest/InterestSlice"
import HomeRentSlice from "./Rent/RentSlice"

const store = configureStore({
    reducer: {
        allCustomer: CustomerSlice,
        allinterest: InterestSlice,
        allauth: AuthSlice,
        allHomeRent : HomeRentSlice
    }
})

export default store 