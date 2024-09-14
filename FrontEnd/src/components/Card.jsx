import Tick from "./Icons/tick"



export default function Card({task ,currTaskData,setCurrTaskData,userdata}) {


async function handleDelete(e){

    let modifiedArray=[];
    for(let i  =0 ; i<currTaskData.length;i++){
        if(currTaskData[i]===task)continue;
        modifiedArray.push(currTaskData[i]);
    }
    const updateTaskData={
        ...userdata,
        todo:modifiedArray,
    }

    const response = await fetch("http://localhost:3000/update",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateTaskData)
    })

    const data = await response.json()
    setCurrTaskData(modifiedArray);
    console.log(data)
}

    return (
        <li>
        <div className="card border relative  hover:bg-green-400 hover:text-black duration-200 font-mono cursor-default p-2 w-fit text-lg text-white rounded-md " >
            {task}
            <div className=" manupulate absolute top-[20%] px-3 left-full flex flex-row gap-2 ">
                <button onClick={handleDelete}><Tick /></button>
            </div>
        </div>
        </li>
    )
}