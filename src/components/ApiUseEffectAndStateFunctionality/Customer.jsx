import { useEffect,useState } from "react";

function Customer(){

     const[users,setUsers] = useState([]);
     const[loadding,setLoadding]= useState(true);

     
     useEffect(()=>{
         fetch("https://jsonplaceholder.typicode.com/users")
         .then((response)=>response.json())
         .then((data)=>{
       
            setUsers(data);
            setLoadding(false)

         });
         
     },[]);

    return(
        <div>
            <h2>Here loadding Customers Data</h2>

            {loadding && <p>Loadding....</p>}

            {!loadding && users.map((user)=>(
                <p key={user.id}>

                     {user.name} - {user.email}
                </p>
            ))}

        </div>
    );
}

export default Customer;