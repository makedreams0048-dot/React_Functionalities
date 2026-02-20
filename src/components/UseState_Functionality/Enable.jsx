import { useState } from "react";

function Enable(){

    const[enable , setEnable] = useState(false);

    return(

        <div>

           <h1>Enable Content and Disable Content</h1>
           <button onClick={()=> setEnable(!enable)}>{enable?"Show":"Hide"}</button>
 
           <p>{enable ? "enabled":"disabled" }</p>
        </div>
    );
}

export default Enable;