import { useEffect,useState } from "react";


function Effect(){

const [count,setCount] = useState(0);


useEffect(()=>{
  console.log("Component rendered or count changed");
},[count]);

    return(

        <div>

            <h1>{count}</h1>

            <h1>Here showing the count also console log </h1>
            <button onClick={()=>setCount(count+1)}>Increese</button>

        </div>
    );
}

export default Effect;