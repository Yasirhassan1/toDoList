import React, { useEffect, useState, useRef } from "react";
import ToDoList from "./ToDoList";
import PririorityContainer from "./PririorityContainer";
import GeminiSection from "./GeminiSection.JSX";
import pic from "./assets/logo.png";
function App() {
    
  const [items, setItems] = useState([]);
   // Store task objects (e.g., { text, priority })
   let [darkMode, setDarkMode] = React.useState(false)
  const [priority, setPriority] = useState(1); // Track selected priority
  const containerRef = useRef(null);
  let [allTasks, setAllTasks] = React.useState("")

  // Add a new task and sort items by priority
  function formSubmit(formData) {
    if (formData.get("inn")) {
      const newItem = {
        text: formData.get("inn").charAt(0).toUpperCase() + formData.get("inn").slice(1),
        priority:priority,
        key: items.length
        
      };

      // Add the new task and sort by descending priority
      setItems((prevItems) =>
        [...prevItems, newItem].sort((a, b) => b.priority - a.priority)
      );
    
      
    }
  }

  // Scroll to the bottom when items are updated
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [items]);
  useEffect(() => {
    setAllTasks(
      items.map((item, index) => {
        return `Task: ${index + 1}+ ${item.text}`;
      })
    );
  }, [items]);
  

  // Clear all tasks
  function removeAllTasks() {
    setItems([]);
  }

  function removePre(prio){
    setItems((prevItems)=>{
        return prevItems.filter((item)=>{
            return item.priority != prio
        })
    })
  }



  return (
    <div className={`container w-full  ${darkMode ? "bg-[#121b35]": "bg-white"} pt-16 h-full transition-all duration-500 p-4 flex flex-col  pb-8 shadow-lg gap-4 md:w-[500px] md:mt-4 md:h-fit md:rounded-md md:pt-4`}>
     <div className="wrap w-full flex gap-4 items-center self-center">
  <img className="w-8 h-8" src={pic} alt="Logo" />
  <h4 className="self-center text-purple-700">ToDo List</h4>
  <div 
    className={`toggleBtn w-11 h-6 rounded-2xl bg-gray-400 px-[2px] flex transition-all duration-500 items-center ml-auto ${darkMode && "justify-end"}`} 
    onClick={() => setDarkMode((prev) => !prev)}
  >
    <div className="round bg-gray-300 w-5 h-5 rounded-full"></div>
  </div>
</div>

      <form
        className="flex flex-col gap-4 mt-4 relative"
        action={formSubmit}>
        <div className="inputContainer flex gap-4">
          <input
            className={`px-4 py-4 pr-32 rounded-lg transition-all w-full ${darkMode ? "bg-[#1B2647]": "bg-gray-200"} ${darkMode && "text-white"} outline-none`}
            required
            placeholder="Write a task"
            type="text"
            name="inn"
          />
          <button
            type="submit"
            className="px-8 py-4 absolute right-0 bg-green-500 rounded-md text-white h-fit self-center hover:bg-green-600 transition-all"
          >
            +ADD
          </button>
        </div>
      </form>
    
      {/* Priority Selector */}
      <PririorityContainer priority={priority} setPriority={setPriority}  darkMode = {darkMode}/>
      {items.length>0 &&    <GeminiSection task = {allTasks} darkMode = {darkMode}/>}

      {/* Task List */}
      <div
        className="wrap flex flex-col transition-all gap h-fit max-h-[300px] overflow-y-scroll md:max-h-[200px]"
        ref={containerRef}
      >
        {items.map((item, index) => (
          <ToDoList
            key={index}
            keyy = {item.key}
            text={item.text}
            priority={item.priority}
            items={items}
            setItems={setItems}
            darkMode = {darkMode}
          />
        ))}
      </div>

      {/* Remove All Button */}
      {items.length > 0 && (
        <div className="btnContainer flex gap-2">

           <button
          className="bg-red-400 text-xs rounded-md py-2 text-white hover:bg-red-500 transition-all"
          onClick={()=>{removePre(1)}}
        >
          Remove All Low Pririorities
        </button>
        <button
          className="bg-red-400 text-xs rounded-md py-2 text-white hover:bg-red-500 transition-all"
          onClick={()=> {removePre(2)}}
        >
          Remove All Medium Pririorities
        </button>
       
        <button
          className="bg-red-400 text-xs rounded-md py-2 text-white hover:bg-red-500 transition-all"
          onClick={()=> {removePre(3)}}
        >
          Remove All High Pririorities
        </button>
        <button
          className="bg-red-400 text-xs rounded-md py-2 text-white hover:bg-red-500 transition-all"
          onClick={removeAllTasks}
        >
          Remove All Tasks
        </button>
        </div>
      )}
    </div>
  );
}

export default App;
