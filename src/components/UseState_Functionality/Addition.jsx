import { useState } from "react";


function additions({ title }){


     const [count, setCount]= useState(0);

     return(

         <div>

            <h2>{ title }</h2>

            <h2> counts total{count}</h2>

            <button onClick={()=> setCount(count+1)}>add</button>
            <button onClick={()=> setCount(count-1)}>Sub</button>
            <button onClick={()=> setCount(0)}>Reset</button>
         </div>

     );


}


export default additions;