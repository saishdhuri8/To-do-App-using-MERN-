import { Link } from "react-router-dom"

import Arrow from '../Icons/Arrow'

export default function Starting(){
    return(
        <div className=" absolute top-72 text-white flex flex-col gap-4 justify-center items-center w-full ">
            <h1 className="font-bold text-[50px]">Welcome Thanks for Visiting Here Go Ahead with JustTask</h1>
            <div className="flex flex-row gap-4">
            <Link to="/login">    <li className='font-bold list-none border  py-2 px-3 rounded-lg hover:bg-[#ff0053]   duration-100 text-lg'>Login </li></Link>
            <Link to="/signup">   <li className=' flex flex-row justify-center items-center gap-3  font-bold list-none border py-2 px-3 rounded-lg hover:bg-[#ff0053]   duration-100 text-lg'>Get Started{<Arrow/>}</li></Link>
            </div>
        </div>
    )
}