import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Leads from "./pages/Leads/Leads";
import Customer from "./pages/Contact/Customer/Customer";
import Vendor from "./pages/Contact/Vendor/Vendor";
import NewLead from "./pages/Leads/New Lead/NewLead";
import NewCustomer from "./pages/Contact/Customer/New Customer/NewCustomer";
import Product from "./pages/Products/Product";
import NewVendor from "./pages/Contact/Vendor/New Vendor/NewVendor";
import { Report } from "./pages/Report/Report";
import ResetPassword from "./pages/login/ResetPassword";
import { Promotion } from "./pages/Promotion/Promotion";
import BasicTable from "./pages/Contact/Customer/New Customer/CustomerList";
import CustomerTable from "./pages/Contact/Customer/CustomerTable";
import CustomerList from "./pages/Contact/Customer/New Customer/CustomerList";
import Newrent from "./pages/Contact/Rent/New Rent/Newrent";
import Rent from "./pages/Contact/Rent/Rent";
import NewRentForm from "./pages/Contact/Rent/New Rent/NewRentForm";
import CustomerDetails from "./pages/Contact/Vendor/New Vendor/CustomerDetails";
import UpdateInterestForm from "./pages/Contact/Vendor/New Vendor/UpdateInterestForm";
import LoginOnly from "./pages/login/LoginOnly";
import HomeRentDetails from "./pages/Contact/Rent/New Rent/HomeRentDetails";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="/" element={<LoginOnly element={<Home />} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset_password" element={<ResetPassword />} />
            <Route path="/report" element={<Report />} />
            <Route path="/promotion" element={<Promotion />} />
            <Route path="leads" ><Route index element={<Leads />} />
           <Route  path="newLead" element={<NewLead />} />
            </Route>

            <Route path="/contact">
              <Route path="customer" element={<Customer />} />
              <Route path="Rent" element={<Rent />} />
              <Route path="vendor" element={<Vendor />} />
            </Route>
            <Route path="/contact/customer/newCustomer" element={<NewCustomer />} />
            <Route path="/contact/Rent/Newrent" element={<Newrent />} />
            <Route path="/contact/vendor/newVendor" element={<NewVendor />} />
            <Route path="/CustomerDetails/:id" element={<CustomerDetails />} />
            <Route path="/UpdateInterestForm/:id" element={<UpdateInterestForm />} />
            <Route path="/HomeRentDetails/:id" element={<HomeRentDetails />} />
            

            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>

            <Route path="products">
              <Route index element={<Product />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Package" />}
              />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
