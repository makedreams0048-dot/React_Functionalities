import { useEffect, useState } from "react";

function ApiTestingData(){


     const[users , setUsers] = useState();
     const[loading , setLoading] = useState(true); 

     useEffect(()=>{

         fetch("https://jsonplaceholder.typicode.com/users")
         .then((response)=> response.json())
         .then((data)=>{

             setUsers(data);
             setLoading(false);
         },[]);

     });

    return(

        <div>

            <h1> Loading customer data</h1>

            {loading && <p>Loadding ...</p>}
            
            {!loading && 
            
            users.map((user)=>(
              
                <p key={user.id}>

                   {user.name} - {user.email}
                </p>
             ))
            
            }

        </div>


    );
}

export default ApiTestingData;