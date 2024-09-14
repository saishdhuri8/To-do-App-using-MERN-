import { Outlet } from "react-router-dom"
import Navbar from "../Navbar"

export default function Layout1(){
    return(
        <>
        <Navbar/>          

        <Outlet />
        
        </>
       
    )
}