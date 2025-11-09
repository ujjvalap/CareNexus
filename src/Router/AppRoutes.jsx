import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

const AppRoutes=()=>{
return(
        <div className="flex">
            <Sidebar/>
            <div className="w-full">
            <Header/>
            </div>
        </div>
    )

}
    

export default AppRoutes
