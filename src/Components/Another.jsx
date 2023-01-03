import React from "react";
import Search from "./Search";
const Another=()=>{
    return <>
    <div className=" container max-w-[1240px] shadow-xl h-[400px] mx-auto p-3">
        <div className="row">
        <input type="search" className="w-full border border-black rounded"></input>
           
        </div>
       <Search />
    </div>
    
    
    
    </>




}
export default Another;