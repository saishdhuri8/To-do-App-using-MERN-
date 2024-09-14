import React, { useState,useRef } from 'react';
import {Link} from 'react-router-dom'

export default function Signup() {

    const [signupdata, setsignupdata] = useState({
        name: "",
        username: "",
        password: "",
        email: ""
    })
    const [valid, setValid] = useState(-1)

    const donbtnref=useRef()
    function handleOnChange(e) {
        const curr = signupdata;
        const key = e.target.name;
        const val = e.target.value;
        setsignupdata({
            ...curr,
            [key]: val
        })
    }

    function clear(inputeFields){
        for(let i of inputeFields){
            i.value="";
        }
    }

    async function hangleSubmit(e) {
        
        
        e.preventDefault();
        try {

            const response = await fetch("http://localhost:3000/signup", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signupdata)
            })
            const data = await response.json()
            if(data.flag==true){
                setValid(1);
                donbtnref.current.disabled=true;
            }
            else{
                clear(e.target.getElementsByClassName("in"))
                setValid(0);
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className=" absolute top-36 w-full  p-3  flex justify-center items-center ">
            <div className='w-[60%] border rounded-xl border-slate-400 flex flex-row p-5 gap-3 bg-[#0c1637]'>
                <div className='w-2/4 items-center flex justify-center font-extrabold bg-[#222764] text-4xl text-white rounded-r-[60px] text-center'>Thanks For Chooseing Us</div>
                <div className='w-2/4 pl-2'>
                    <form action="" className='flex flex-col gap-3' onSubmit={hangleSubmit}>
                        <div className='flex flex-col font-semibold text-lg gap-3'>
                            <div className='text-[#ff0053] text-xl'>Name</div>
                            <input type="text" name='name' placeholder='Enter Name' required className=' in border bg-black p-2 rounded-lg text-white hover:border-red-300 duration-200' onChange={handleOnChange} />
                        </div>
                        <div className='flex flex-col font-semibold text-lg gap-3'>
                            <div className='text-[#ff0053] text-xl'>UserName</div>
                            <input type="text" name='username' placeholder='Enter userName of your choice' required className=' in border bg-black p-2 rounded-lg text-white hover:border-red-300 duration-200' onChange={handleOnChange} />
                        </div>
                        <div className='flex flex-col font-semibold text-lg gap-3'>
                            <div className='text-[#ff0053] text-xl'>Email</div>
                            <input type="email" name='email' placeholder='Enter valid email' required className=' in border bg-black p-2 rounded-lg text-white hover:border-red-300 duration-200' onChange={handleOnChange} />
                        </div>
                        <div className='flex flex-col font-semibold text-lg gap-3'>
                            <div className='text-[#ff0053] text-xl'> Make PassWord</div>
                            <input type="text" name='password' required className=' border in bg-black p-2 rounded-lg text-white hover:border-red-300 duration-200' placeholder='Enter password' onChange={handleOnChange} />
                        </div>
                        {(valid===0) && <div className='text-red-500 font-semibold font-mono'>Username Already taken or entered email  already have an account </div>}
                        {(valid===1) && <div className='text-red-500 font-semibold font-mono'>Successfully Singed Up {<Link className='text-[#00ffdc] underline font-semibold ' to="/login">Proceed To Login</Link>} </div>}
                        <button className=" bg-[#ff0053]  rounded px-10 py-1 text-white font-semibold hover:bg-[#ee0852] duration-200 text-lg  m-auto " ref={donbtnref} type="submit">Done</button>
                    </form>
                </div>
            </div>
        </div>
    )
}