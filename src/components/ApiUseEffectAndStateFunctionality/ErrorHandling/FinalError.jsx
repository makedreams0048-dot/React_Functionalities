import { useEffect, useState } from "react";


function FinalError(){

     const[users, setUsers] = useState();
     const[loading, setLoadding] = useState(true);
     const[error, setError] = useState(null);


     useEffect(()=>{
        
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            if(!response.ok){
               throw new Error("Api Field");
            }
            return response.json();
        })
        .then((data)=>{    
             setUsers(data);
             setLoadding(false);                 
        })
       .catch((err)=>{     
             setError(err);
             setLoadding(false);              
        })      
     },[]);

    return(

        <div>
            <h2>Here showing fianl error handling Data</h2>

            {/* {loadding && <p>Loadding..</p>}
            {error && <p style={("color:red")}>Error: {error} </p>} */}

            
       {loading && <p>Loading...</p>}

      {error && <p style={("color:red")}>Errpr: {error}</p>}
           
           {!loading && !error &&
           
             users.map((user)=>(

                <p key={user.id}>
                    {user.name}-{user.email}
                </p>
             ))}
        
             
        </div>
    );
}

export default FinalError;