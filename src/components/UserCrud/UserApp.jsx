import { useState, useEffect } from "react";

function UserApp() {

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [editId, setEditId] = useState(null);

  // GET users
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ADD user
  const addUser = async () => {
    await fetch("http://localhost:5000/add-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, phone })
    });

    fetchUsers();
    setName("");
    setEmail("");
    setPhone("");
  };

  // DELETE user
  const deleteUser = async (id) => {
    await fetch(`http://localhost:5000/delete-user/${id}`, {
      method: "DELETE"
    });

    fetchUsers();
  };


    // EDIT button click
  const editUser = (user) => {
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    setEditId(user._id);
  };

  // UPDATE user
  const updateUser = async () => {
    await fetch(`http://localhost:5000/update-user/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, phone })
    });

    fetchUsers();
    setName("");
    setEmail("");
    setPhone("");
    setEditId(null);
  };



  return (
    <div>

      <h2>User App</h2>

      <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />

       {editId ? (
        <button onClick={updateUser}>Update User</button>
      ) : (
        <button onClick={addUser}>Add User</button>
      )}

      <hr />

      {users.map((user)=>(
        <div key={user._id}>
          <p>{user.name} - {user.email} - {user.phone}</p>

          <button onClick={()=>editUser(user)}>Edit</button>
          <button onClick={()=>deleteUser(user._id)}>Delete</button>
        </div>
      ))}

    </div>
  );
}

export default UserApp;
