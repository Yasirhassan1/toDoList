import { GoogleGenerativeAI } from "@google/generative-ai";
import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
export default function GeminiSection({task, darkMode}){
    const genAI = new GoogleGenerativeAI("AIzaSyCKAq_L0SFpPElQb8lvpxN-YxQdr6IKGgE");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    let [response, setResponse] = React.useState("")
    let [show, setShow] = React.useState(false)
    let [showSuggestionWindow, setshowSuggestionWindow] = React.useState(false)

    async function getResponse(){
       let tas = "write a very short explaination how to do these tasks quickly. use bullet point form: "+task;
        try {
            const result = await model.generateContent(tas);
            const text = result.response.text();
            setResponse(text);
          } catch (error) {
            console.error("Error generating response:", error);
            setResponse("An error occurred while fetching the response.");
          } 

          setShow(true)
          setshowSuggestionWindow(true)
    }
    return(
     <div className="wrap flex flex-col gap-3 relative transition-all">
        {showSuggestionWindow && <ReactMarkdown className={`text-xs ${show && "p-4"} ${darkMode ? "bg-[#1B2647]": "bg-gray-300"} ${darkMode? "text-white": "text-black"} transition-all duration-500 rounded-md h-full max-h-[150px] overflow-y-scroll`}>{response}</ReactMarkdown>}
       {showSuggestionWindow &&  <i className={`absolute top-1 right-1 fa-regular fa-circle-xmark text-xl text-red-500 cursor-pointer p-2 rounded-full w-8 flex justify-center items-center h-8`} onClick={() => setshowSuggestionWindow(false)}></i>}
      
      <button className={`px-4 bg-[#1B2647] py-4 rounded-md cursor-pointer text-white hover:bg-gray-600 transition-all`} onClick={getResponse}>AI Suggestion</button>
     </div>
    )
}

GeminiSection.propTypes = {
    task: PropTypes.string.isRequired,
    darkMode: PropTypes.bool.isRequired,
  };