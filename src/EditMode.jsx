import PropTypes from 'prop-types';

export default function EditMode({exitBtn, saveBtn, setSaveBtn, setExitBtn, setEditText, setIsEditMode, darkMode}){
  
    function editForm(formData){
        if(exitBtn){
            setIsEditMode(false)
        } 
        
        if(saveBtn){
            let text = String(formData.get("editInput"))
            if(text.length>0){
            setEditText(text)
            setIsEditMode(false)
            
            }
        
        }
        
     
        
        }
        
        return(
            <form className={`wrap flex gap-4 items-center flex-wrap px-4`} action={editForm}>
            <input className={`py-3 pl-4 ${darkMode && "bg-[#212f5a]"} ${darkMode && "text-white"} rounded-md outline-none lg:px-4`}  type="text" placeholder='Write your task' name='editInput' />
            <button className='w-8 h-8' name='save' onClick={()=>setSaveBtn(true)}><i className={`fa-solid fa-check text-xl ${darkMode ? "bg-[#212f5a]": "bg-white"}  text-green-400 cursor-pointer rounded-full p-2 w-8 flex justify-center items-center h-8`}></i></button>
           <button className='w-8 h-8' name='exit' onClick={()=>setExitBtn(true)}><i className={`fa-regular fa-circle-xmark text-xl text-red-500 cursor-pointer ${darkMode ? "bg-[#212f5a]": "bg-white"}  p-2 rounded-full  flex justify-center items-center`}></i></button>
            </form>
         ) 
        }



EditMode.propTypes = {
    exitBtn: PropTypes.bool.isRequired,
    saveBtn: PropTypes.bool.isRequired,
    setSaveBtn: PropTypes.func.isRequired,
    setExitBtn: PropTypes.func.isRequired,
    setEditText: PropTypes.func.isRequired,
    setIsEditMode: PropTypes.func.isRequired,
    darkMode:PropTypes.bool.isRequired,
};