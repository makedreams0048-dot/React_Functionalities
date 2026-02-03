import { useState } from "react";


function Age(){

    const[formData,setFormData]=useState({
        age:""
    });
    return(
    <div>
        
         <input type="text" placeholder="Enter You Age" value={formData.age} onChange={(e)=>setFormData({...formData,age:e.target.value})}/>

         <p>Your Age {formData.age}</p>

    </div>
    );

}

export default Age;