import React  from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";

const AdminDashboard=()=>{
    return(
        <div className="flex ">
            <Sidebar/>
            <div className="flex flex-col w-full">
                <Header/>
                <Outlet/>
            </div>
        </div>
    )

}

export default AdminDashboard;

