import { useEffect, useState } from "react";


function testUseEffect(){

    const[count,setCount]=useState(0);

    
     useEffect(() => {
    console.log("Component rendered or count changed");
  }, [count]);

    return(


        <div>
            <h2>Count when Button when I call console log showing count using useEffect</h2>
            <button onClick={()=>setCount(count+1)}>Count</button>

        </div>
    );

}

export default testUseEffect;