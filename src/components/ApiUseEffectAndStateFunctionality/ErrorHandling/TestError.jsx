import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,  setError] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       });
//   }, []);


useEffect(()=>{

      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response)=>{
           if(!response.ok){
              throw  new Error("Api Field");
           }
           return response.json();
      })
      .then((data)=>{
         
         setUsers(data);
         setLoading(false);       
      })
      .catch((err)=>{

           setError(err);
           setLoading(false);  
         
      })
},[]);


  return (
    <div>
      <h2>User List</h2>

      {loading && <p>Loading...</p>}

      {error && <p style={("color:red")}>Errpr: {error}</p>}

      {!loading && !error &&
        users.map((user) =>(
          <p key={user.id}>
            {user.name} — {user.email}
          </p>
        ))}
    </div>
  );
}

export default Users;
