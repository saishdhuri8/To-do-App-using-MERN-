import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigateTo = useNavigate()
    const [valid, setValid] = useState(false)
    const [logindata, setlogindata] = useState({
        username: "",
        password: ""
    })

    async function handleOnSubmit(e) {
        e.preventDefault();
        try {

            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(logindata)
            });

            const data = await response.json();


            if (data["flag"] === undefined) {
                console.log(data)
                navigateTo("/task", { state: { dataFromLogin: data } })
            }
            else setValid(!data.flag);



        } catch (error) {
            console.log(error);
        }
    }

    function updateUsername(e) {

        const curr = logindata;
        const val = e.target.value;
        setlogindata({
            ...curr,
            username: val
        })
    }
    function updatePassword(e) {
        const curr = logindata;
        const val = e.target.value;

        setlogindata({
            ...curr,
            password: val
        })
    }

    return (

        <div className=" absolute top-60 w-full  p-3  flex justify-center items-center ">
            <div className='w-[60%] border rounded-xl border-slate-400 flex flex-row p-5 gap-3 bg-[#0c1637]'>
                <div className='w-2/4 items-center flex justify-center font-extrabold bg-[#222764] text-4xl text-white rounded-r-[60px]'>Welcome Back</div>
                <div className='w-2/4 pl-2'>
                    <form className='flex flex-col gap-9' onSubmit={handleOnSubmit} >
                        <div className='flex flex-col font-semibold text-lg gap-3'>
                        <div className='text-[#ff0053] text-xl'>UserName</div>
                        <input type="text" name='username' required placeholder='Enter username' className='border bg-black p-2 rounded-lg text-white hover:border-red-300 duration-200' onChange={updateUsername} />
                        </div>
                        <div className='flex flex-col font-semibold text-lg gap-3'>
                        <div className='text-[#ff0053] text-xl'>PassWord</div>
                        <input type="text" name='password' required className='border bg-black p-2 rounded-lg text-white hover:border-red-300 duration-200' placeholder='Enter password' onChange={updatePassword} />
                        </div>
                        {(valid && <div className='text-red-500 font-semibold font-mono'>Username Already taken or entered email  already have an account or no account created </div>)}
                        <button className=" bg-[#ff0053]  rounded px-10 py-1 text-white font-semibold hover:bg-[#ee0852] duration-200 text-lg  m-auto " type="submit">Done</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
