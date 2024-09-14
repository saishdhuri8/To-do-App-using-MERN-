import React from 'react'
import { useState, useRef } from 'react'


const Taskform = ({ userdata ,currTaskData,setCurrTaskData }) => {

    const [flag, setflag] = useState(false)
    const [data, setdata] = useState("")
    const btnref = useRef();
    function handleOnChange(e) {
        setdata(e.target.value);
    }
    function handhleClear(e) {
        e.preventDefault();
        btnref.current.value = "";
    }
  
    function makeNewArray(newTask) {
        return [...currTaskData, newTask] 
    }

   async function handleOnSubmit(e) {
        e.preventDefault();

        if(btnref.current.value!=""){

            
            const updatedTodo=makeNewArray(data)
            const obj={
                ...userdata,
                todo:updatedTodo
            }
            try {
                const response=  await fetch("http://localhost:3000/update",{
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(obj)
                })
                const updated=await response.json()
                btnref.current.value="";
                setCurrTaskData(updatedTodo);
                
            } catch (error) {
                console.log(error)
            }
        }
        
    }

    return (
        <div className="w-[85%] mx-auto my-7 ">
        <div className="flex flex-row gap-2">
            <button className=" px-3 py-2 rounded-lg bg-green-400 duration-100 hover:bg-green-500 text-violet-600 font-bold" onClick={(e) => {
                setflag(true);
                e.target.disabled = true;
            }}>Add Task</button>
        </div>
        {(flag) && <form className="flex flex-col gap-1" onSubmit={handleOnSubmit}>
            <div className="w-full p-3">
                <input ref={btnref} name="task" type="text" className="border w-full text-2xl bg-black p-2 rounded-lg text-white hover:border-green-500 duration-200" placeholder="Enter your task here" onChange={handleOnChange} />
                <div >
                    <button className="p-2 rounded-lg bg-blue-600 hover:text-white mt-2 px-5 duration-100 font-semibold text-white hover:bg-blue-700" type="submit">Done</button>
                    <button className=" p-2 ml-2 rounded-lg bg-red-500 duration-100 font-semibold text-white hover:bg-red-700" onClick={handhleClear}>Clear</button>
                </div>
            </div>
        </form>}
    </div>
    )
}

export default Taskform