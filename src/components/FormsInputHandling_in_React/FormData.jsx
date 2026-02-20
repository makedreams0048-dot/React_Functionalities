import { useState } from "react";


function FormData(){

    const[text,setText]=useState("");

    return(

        <div>

            <h1 style={{ color:'red' }}> append the data below runtime</h1>

            <input type="text" placeholder="Enter Your Text" value={text} onChange={(e)=>setText(e.target.value)}/>

           <p> type your containt : {text} </p>

        </div>
    );

}

export default FormData;