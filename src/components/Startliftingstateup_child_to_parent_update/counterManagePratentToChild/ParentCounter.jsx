import { useState } from "react";

import Counter from "./Counter";


function ParentCounter(){

    const [count,setCount] = useState(0);
    
    return(

        <div>

            <h3>Here showing my count</h3>
            <h1>{count}</h1>


                <Counter
                
                increese={()=>setCount(count+1)}
                decreese={()=>setCount(count-1)}
                reset={()=>setCount(0)}
                
                />

            
            
            
        </div>
    );
}

export default ParentCounter;