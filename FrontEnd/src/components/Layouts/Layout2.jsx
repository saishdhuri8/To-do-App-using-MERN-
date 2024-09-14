import React, { useState, useEffect } from 'react'
import TaskForm from '../Taskform'
import Card from "../Card"
import { useLocation } from "react-router-dom"
import Navbar from '../Navbar'


export default function Layout2() {

    const location = useLocation();
    const dataFromLogin = location.state || {};
    const [flag1, setflag1] = useState(true);
    const [currTaskData, setCurrTaskData] = useState([])
    let userdata = {
        username: dataFromLogin.dataFromLogin.username,
        password: dataFromLogin.dataFromLogin.password
    }


    useEffect(() => {
        const fetchdata = async (userdata) => {

            const response = await fetch("http://localhost:3000/getdata", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userdata)
            });

            const data = await response.json();
            setCurrTaskData(data.task)
        }
        fetchdata(userdata)
    }, [])



    let c = currTaskData.map((ele, i) => {
        return <Card key={i} currTaskData={currTaskData} setCurrTaskData={setCurrTaskData} task={ele} userdata={userdata} />
    })

    return (

        <>

            <Navbar />

            <TaskForm userdata={userdata} currTaskData={currTaskData} setCurrTaskData={setCurrTaskData} />

            <div className="w-[95%] mx-auto my-3" >
                <h1 className="font-extrabold text-3xl pb-2 text-white">Your Tasks :</h1>
                <div className=" rounded-xl  w-[85%] mx-auto py-3 px-8 bg-[#0b1a4b] ">
                    <ul className='flex flex-col gap-4 '>
                        {c}
                        {(currTaskData.length === 0) && <div className='w-full flex justify-center items-center flex-row text-red-600 text-lg font-semibold'>No Task Added Yet</div>}
                    </ul>

                </div>
            </div>

        </>
    )
}