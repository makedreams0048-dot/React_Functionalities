import { useState } from "react";
import DataCounter from "./../Task1/DataCounter"


function DataParent(){

       const[count,setCount]=useState(0);
    
    return(
  
        <div>

            <h1>Showing Counter Data</h1>
            <p>{count}</p>

            <DataCounter 
            
             increese={()=>setCount(count+1)}
             decreese={()=>setCount(count-1)}
             reset={()=>setCount(0)}
            
            />

            
        </div>
    );
}

export default DataParent