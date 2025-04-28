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
    <div className="flex flex-col items-center justify-center bg-zinc-700 p-5 m-15 rounded-xl  sm:w-[80%] md:w-[60%] lg:w-[40%]">
    <div className="w-full flex flex-col justify-center items-center ">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Teendők</h1>  
  
      <div className="flex flex-col sm:flex-row items-center w-full">
      <input 
        type="text"
        className="flex-1 bg-zinc-500 w-[80%] border-2 border-yellow-700 text-white rounded-sm p-2 m-2 
                    overflow-x-auto whitespace-nowrap"
        placeholder="Írj be egy feladatot"
        value={newTask}
        onChange={handleInput}
        />

        <button 
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-5 border border-gray-400 rounded shadow text-sm sm:text-base m-2"
          onClick={() => addTask()}
        >
          Hozzáadás
        </button>
      </div>
  
      <ol className="w-full mt-4">
        {tasks.map((task, index) => (
          <li key={index} className="flex flex-wrap lg:gap-5 md:gap-2 sm:gap-2 w-full p-2 items-center">
            <span className="flex-1 bg-blue-400 flex justify-center items-center text-gray-100 text-sm sm:text-base font-medium break-words p-2 m-1 rounded">
              {task}
            </span>
  
            <button  
              className="flex-1 min-w-[120px] m-1 bg-rose-500 hover:bg-zinc-800 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-xs sm:text-sm"
              onClick={() => deleteTask(index)}
            >
              Törlés
            </button>
  
            <button  
              className="flex-1 min-w-[120px] m-1 bg-emerald-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-xs sm:text-sm"
              onClick={() => moveTaskUp(index)}
            >
              Feljebb
            </button>
  
            <button  
              className="flex-1 min-w-[120px] m-1 bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-xs sm:text-sm"
              onClick={() => moveTaskDown(index)}
            >
              Lejjebb
            </button>
          </li>
        ))}
      </ol>
    </div>
  </div>
  
  )
}
