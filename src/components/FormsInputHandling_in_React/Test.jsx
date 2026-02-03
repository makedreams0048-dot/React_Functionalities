import { useState } from "react";


function Task(){

     const[inputText,setInputText]=useState("");
     
     const[submitText,setSubmitText]=useState("");
     
    return(
        <div>

            <input type="text" placeholder="Enter your name" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
            <button onClick={()=>setSubmitText(inputText)}>Submit</button>


            {submitText && <p> You Type Data : {submitText }</p>}

        </div>
    );
}

export default Task;