import { useState } from "react";


function Test(){

    const[formData,setFormData]=useState({
        name:"",
        email:""
    })

    return(

       <div>

            <input type="text" placeholder="Enter Your Name" value={formData.name}  onChange={(e) =>
             setFormData({ ...formData, name: e.target.value })
        }/>

             <input type="text" placeholder="Enter Your Email" value={formData.email}   onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }/>
           
         
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
       
           
      </div>

    );
}


export default Test;