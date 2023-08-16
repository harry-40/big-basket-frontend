import Company from "./components/administrator/Company"; 
import DisplayAllCompanies from "./components/administrator/DisplayAllCompanies";
import DashBoard from "./components/administrator2/DashBoard";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AdminLogin from "./components/administrator2/Admin Login";

import Home from "./components/userinterface/screens/Home";
import HomePageDrawer from  "./components/userinterface/usercomponents/HomePageDrawer"
import Banner from "./components/administrator2/Banner";
import Product from "./components/userinterface/screens/Product"
import AllCategory from "./components/userinterface/screens/AllCategory";
import Cart from "./components/userinterface/screens/Cart"
import MakePayment from "./components/userinterface/screens/MakePayment";
function App() {
  return (
    <div>
      <Router>
        <Routes>
           <Route element={<Company/>} path={"/company"} />
           <Route element={<DisplayAllCompanies/>} path={"/displayallcompany"} />
           <Route element={<AdminLogin/>} path={"/adminlogin"}/>
           
           <Route element={<DashBoard/>} path={"/dashboard/*"}/>
           <Route element={<Home/>} path={"/home/*"}/>
           <Route element={<HomePageDrawer/>} path={"/homepagedrawer*"}/>
           <Route element={<Banner/>} path={"/Banner"}/>
           <Route element={<Product/>} path={"/exploreproduct"}/>
           <Route element={<Cart />} path={"/cart"} />
           <Route element={<AllCategory/>} path={"/allcategory"}/>
           <Route element={<MakePayment />} path={"/makepayment"} />
            
        </Routes>
      </Router>
   
    </div>
  );
}

export default App;
