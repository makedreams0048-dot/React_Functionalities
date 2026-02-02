import { useState } from "react";


function FormTask(){

    const[inputText,setInputText] = useState("");
    const[submittedText,setSubmittedText] = useState("");

    return(

         <div>
              
             <input type="text" placeholder="Enter Your Text" value={inputText} onChange={(e)=>setInputText(e.target.value)}/>

             <button onClick={()=>setSubmittedText(inputText)} >Submit</button>

             
           {submittedText && (
                 <p>You submitted: {submittedText}</p>
           )}

         </div>

    );
}

export default FormTask;