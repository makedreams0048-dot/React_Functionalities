import { useState } from "react";


function Testing(){
 
const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[message,setMessage]=useState("");
const[error,setError]=useState(null);


const handleSubmit =(e)=>{

    e.preventDefault();

     const usersData={
        name:name,
        email:email,
     };

     fetch("https://jsonplaceholder.typicode.com/users",{

        method:"POST",
        headers:{ "Content-type": "application/json"},
        data: JSON.stringify(usersData)
     })
     .then((resonse)=>{
        if(!resonse.ok){
            throw new Error("API Field");
        }
         return resonse.json(); // ✅ required
     })
     .then((data)=>{
        setMessage("Data Stored Sucessfully");
        setError(null);
        setName("");
        setEmail("");
     })
     .catch(err=>{
        setError("Api Getting issue when we add the user");
        setMessage("");
     });

}
    return(

        <div>

           <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)}/> <br /> <br />

            <input type="text" placeholder="Enter Your Name" value={email} onChange={(e)=>setEmail(e.target.value)}/><br /> <br />

            <button type="submit">Submit</button>

           </form>

                   {message && <p>{message}</p>}

                   {error && <p style={{color:"red"}}>{error}</p>}

        </div>


    );


}

export default Testing;