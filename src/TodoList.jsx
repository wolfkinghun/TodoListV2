import React from 'react'
import { useState } from 'react'

export const TodoList = () => {
    const [tasks,setTasks] = useState(["walk the dog","kms"]);
    const [newTask,setNewTask] = useState("");

    function handleInput(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(!newTask==""){
        setTasks([...tasks,newTask]);
        setNewTask("");
        };
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        if(index>0){
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index-1]] = [updatedTask[index-1],updatedTask[index]]
            setTasks(updatedTask)
        }
    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            console.log(tasks.length);
            
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index+1]] = [updatedTask[index+1],updatedTask[index]]
            setTasks(updatedTask)
        }
     
    }

  return (
    <div className="flex flex-col items-center justify-center bg-zinc-700 p-5 m-5 rounded-xl w-[85%]">

        <h1>To do list</h1>
        <div>
            <input type="text" className='bg-zinc-500 border-2 border-yellow-700 text-white rounded-sm p-2 m-2' placeholder='enter a task' value={newTask} onChange={handleInput}/>
            <button  class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-5 border border-gray-400 rounded shadow" onClick={()=>addTask()}>
                Add
            </button>
            
        </div>
        <ol>
            {tasks.map((task,index)=>
            <li key={index} className='flex w-full justify-between gap-5 w-full p-2 w-[55%]'>
               <span className="max-w-[150px] flex-1 text-gray-100 text-base font-medium truncate">{task}</span>

                <button  class="bg-rose-500 hover:bg-zinc-800 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => deleteTask(index)}>delete</button>
                <button  class="bg-emerald-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => moveTaskUp(index)}>move up</button>
                <button  class="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => moveTaskDown(index)}>move down</button>
            </li>
            )}
        </ol>
    </div>
  )
}
