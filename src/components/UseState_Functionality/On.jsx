import { useState } from "react";


function On(){

    const[on,setOn] = useState(false);

    return(

        <div>

          <h1>On and Off functionality</h1>
 
          <button onClick={()=> setOn(!on)}>{on ? "on":"off"}</button>
         
          <p>{on ? "ON":"OFF"}</p>

        </div>
    );
}

export default On;