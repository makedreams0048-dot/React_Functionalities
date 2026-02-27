import { useState } from "react";

function AddCustomer(){

 const [name,setName] = useState("");
 const [email,setEmail] = useState("");
 const [message,setMessage] = useState("");
 const [savedUser,setSavedUser] = useState(null);

 const handleSubmit = (e) =>{

    e.preventDefault();

    const userData ={
        name:name,
        email:email,
    }

    fetch("https://jsonplaceholder.typicode.com/users",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(userData),
    })
      .then((response)=>response.json())
      .then((data)=>{

        setSavedUser(data); // store returned user
        setMessage("User added successfully 🎉");

        setName("");
        setEmail("");
      })
      .catch(()=>{
        setMessage("Error adding user ❌");
      });
 }

 return(

    <div>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <br/>

        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <br/>

        <button type="submit">Submit</button>

      </form>

      {message && <p>{message}</p>}

      {savedUser && (
        <div>
          <h3>Saved User</h3>
          <p>Name: {savedUser.name}</p>
          <p>Email: {savedUser.email}</p>
          <p>ID: {savedUser.id}</p>
        </div>
      )}

    </div>
 );
}

export default AddCustomer;