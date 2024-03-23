import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const User = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("user deleted successfully");
          const reaming = users.filter((user) => user._id !== id);
          setUsers(reaming);
        }
      });
  };

  return (
    <div>
      <h2>users: {users.length}</h2>
      {users.map((user) => (
        <p key={user._id}>
          {user.name}:{user.email}
          <Link to={`/user/${user._id}`}>
            <button>Update</button>
          </Link>
          <button onClick={() => handleDelete(user._id)}>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default User;
