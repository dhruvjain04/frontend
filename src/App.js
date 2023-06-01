import { Route, Routes } from 'react-router-dom';
//Login Components
import LoginHome from './components/login/Home';
import Login from './components/login/Login';
import Register from './components/login/Register';

//Farmer Components
import FarmerHome from './components/farmer/Home';
import Sell from './components/farmer/Sell';
import FarmerViewProduct from './components/farmer/ViewProduct';
import FarmerProfile from './components/farmer/FarmerProfile';


//User Components
import UserHome from'./components/user/Home';
import Buy from './components/user/Buy';
import UserViewProduct from './components/user/ViewProduct';
import UserProfile from './components/user/Profile';

//Footer
import Footer from './components/Footer';


import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="content">
      <Routes>
        
        {/* login routes */}
        <Route path="/" element={<LoginHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* farmer routes */}
        <Route path="/farmer" element={<FarmerHome />} />
        <Route path="/farmer/sell" element={<Sell />} />
        <Route path="/farmer/product/:prodID" element={<FarmerViewProduct />} />
        <Route path="/farmer/profile" element={<FarmerProfile />} />

        {/* user routes */}
        <Route path="/user" element={<UserHome />} />
        <Route path="/user/buy" element={<Buy />} />
        <Route path="/user/product/:prodID" element={<UserViewProduct />} />
        <Route path="/user/profile" element={<UserProfile />} />
          
        
           
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;
