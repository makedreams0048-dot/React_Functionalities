import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>

      {loading && <p>Loading...</p>}

      {!loading &&
        users.map((user) => (
          <p key={user.id}>
            {user.name} — {user.email}
          </p>
        ))}
    </div>
  );
}

export default Users;
