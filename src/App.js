import logo from "./logo.svg";
import "./css/sb-admin-2.css";
import "./App.css"
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import Users from "./Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./CreateUser";
import Login from "./Login";
import Portal from "./Portal";
import Userview from "./Userview";
import EditUser from "./EditUser";
import Demo from "./Demo";
import Product from "./Product";
import { Form } from "formik";




function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<Users />}/>
          <Route path ="users/:id" element={<Userview />}/>
          <Route path ="user/edit/:id" element={<EditUser />}/>
          <Route path ="create-user" element={<CreateUser />}/>
          <Route path ="product" element={<Product/>}/>
        
      </Route>
        </Routes>
    </BrowserRouter>
    
  ); 
}

export default App;