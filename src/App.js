import React,{useState}from 'react';
import './index.css';
export default function App(){
  const [input,setInput]=useState();
  const [task,setTask]=useState([]);
  
  function change(e){
    setInput(e.target.value)
    
  }
  function submit(e){
    e.preventDefault();
    console.log(input);
    if(input.trim()==="") return;
    setTask([...task,{text:input,checked:false}]);
    setInput("")
    

  }
  function removeIndex(indexToRemove){
    const updated=task.filter((_,index)=>index!==indexToRemove);
    setTask(updated);
  }
  function strike(indexToStrike){
    const newOne=task.map((t,index)=>(
      index===indexToStrike?{...t,checked:!t.checked}:t
      
    ))
    setTask(newOne);

  }
  return(
    <div className=" flex flex-col justify-center items-center min-h-screen bg-gray-100 ">
      <h1 className="text-2xl text-teal-600 mb-20 font-semibold text-center sm:text-4xl">To-Do List</h1>
      <div className="mb-5">
      
    <form onSubmit={submit} className="flex flex-col justify-center items-center sm:flex sm:flex-row ">
      <input type="text" name="enter" value={input||""} onChange={change} placeholder="Enter Task" className="text-xl p-2 mr-4 border-2 border-gray-500  outline-none rounded-lg mb-4 sm:text-2xl"></input>
      <button type="submit" className="text-md bg-teal-500 text-white hover:bg-teal-800 p-2 rounded-lg mb-4 sm:text-lg">ADD</button>
    </form>
    </div>
    <div>
    <ul className='flex flex-col justify-center items-start w-[80%] sm:w-full'>
      {task.map((tasks,index)=>(
        <li key={index} className="flex flex-col justify-center items-center mb-4 text-xl text-gray-800 capitalize mb-4 text-center sm:text-2xl  sm:flex sm:flex-row"><div className="mb-4"><input type="checkbox" className="mr-3 text-2xl scale-150 lg:scale-110 lg:text-xl" checked={tasks.checked} onChange={()=>strike(index)}></input><span className={tasks.checked?"line-through text-gray-400":""}>{tasks.text}</span></div><div><button onClick={()=>{removeIndex(index)}} className="ml-3 bg-teal-500 text-white hover:bg-teal-800 p-2 rounded-lg mb-4">Remove</button></div></li>
        ))}
    </ul>
    </div>
    <button onClick={()=>setTask([])} className="text-xl p-2 mt-5 bg-teal-500 text-white hover:bg-teal-800 p-2 rounded-lg lg:text-lg">Start New</button>
    </div>
  )
}