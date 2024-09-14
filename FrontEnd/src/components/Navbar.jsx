import React from 'react'
import Logo from './Icons/logo'
import {Link }from "react-router-dom"

export default function Navbar() {

    return (
        <>
            <div className=" flex flex-row justify-center items-center rounded-full shadow-xl  px-7 w-[80%] mx-auto  bg-[#1a1d38]">
                <div className="logo flex flex-row justify-between items-center gap-4">
                    <Logo /> 
                 <Link to="/"> <h1 className='text-white font-extrabold text-lg hover:underline '>Just Task</h1></Link>        
                </div>
                <div>
                </div>
            </div>
        </>
    )
}