import { useEffect, useState } from "react";


function ApiTest(){

     const[users,setUsers] = useState();
     const[loading,setLoading] = useState(true);

     useEffect(()=>{
             fetch("https://jsonplaceholder.typicode.com/users")
             .then((response) => response.json())
             .then((data)=>{
                setUsers(data);
                setLoading(false);
             },[]);
     })

    return(

          <div>

            <h2> Here Load Api via customer data</h2>
            <h3>User List</h3>

            {loading && <p>Loading ...</p>}
               
                
                {!loading &&
                users.map((user) => (
                    <p key={user.id}>
                    {user.name} — {user.email}
                    </p>
                ))}

          </div>
    );
}

export default ApiTest;