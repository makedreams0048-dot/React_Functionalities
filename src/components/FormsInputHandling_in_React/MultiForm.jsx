import { useState } from "react";


function MultiForm(){

    const[text,setText] = useState("");
    const[submitText,setSubmitText] = useState("");


return(
    <div>

    <input type="text" placeholder="Enter Your Data" value={text} onChange={(e)=>setText(e.target.value)}/>

    <button onClick={()=>setSubmitText(text)}>Submit</button>
      
{submitText && (
  <p>This is my Submitted Text: {submitText}</p>
)}


    </div>
);

}

export default MultiForm;