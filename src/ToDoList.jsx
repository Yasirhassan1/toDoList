import PropTypes from 'prop-types';
import React from 'react';
import EditMode from './EditMode';
export default function ToDoList(props) {
    let [checked, setChecked] = React.useState(false)
    let [isEditMode, setIsEditMode] = React.useState(false)
    let [exitBtn, setExitBtn] = React.useState(false)
    let [saveBtn, setSaveBtn] = React.useState(false)
    let [editText, setEditText] = React.useState("")
    function flipFlop(){
     setChecked((prevChecked)=>{
        return !prevChecked
     })

    }
function deleteItem(){
    props.setItems((prevItems)=>{
     return prevItems.filter((item)=>{
    return item.key !== props.keyy
})

    })
}

function editTask(){
   
setIsEditMode((prev)=>{
    return !prev
})

}
let p = ""
if(props.priority == 1){
    p = "Low"
}
else if(props.priority == 2){
    p = "Medium"
}
else{
    p = "High"
}

    
    return(
        <div className={`container flex flex-col gap-2 p-3 ${props.darkMode ? "bg-[#1B2647]": "bg-gray-200"} items-center rounded-md mt-3 ${isEditMode? "p-4": "px-4"}`}>
    <div className="wrap flex w-full items-center">
    <div className="wrap flex gap-4 w-full h-full p-4" onClick={flipFlop}>
    <input type="checkbox" checked = {checked} />
    <p className={`text-black text-sm ${props.darkMode && "text-white"}`}>{saveBtn? editText: props.text}</p>
    </div>
    <div className="wrap flex gap-4">
    <p className={`text-sm self-center ${props.darkMode && "text-white"}`}>{p}</p>
    <i className="fa-regular fa-pen-to-square cursor-pointer text-2xl  text-green-500 hover:text-green-600 transition-all" onClick={editTask}></i>
    <i className="fa-regular fa-trash-can cursor-pointer text-2xl  text-red-500 hover:text-red-600 transition-all" onClick={deleteItem}></i>
    </div>
</div>
{isEditMode && 

   <EditMode saveBtn = {saveBtn} exitBtn = {exitBtn} setSaveBtn = {setSaveBtn} setExitBtn = {setExitBtn} setEditText = {setEditText} setIsEditMode={setIsEditMode} darkMode={props.darkMode}/>
}
</div>
    )
}




ToDoList.propTypes = {
    text: PropTypes.string.isRequired,
    setItems: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    keyy: PropTypes.number.isRequired,
    priority: PropTypes.number.isRequired,
    darkMode: PropTypes.bool.isRequired,
};