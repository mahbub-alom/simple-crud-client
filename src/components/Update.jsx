import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    const user = { name, email };
    fetch(`http://localhost:5000/users/${loadedUser?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if(data.modifiedCount>0){
            alert("user updated successfully")
        }
      });
  };

  return (
    <div>
      <h1>Updated User of {loadedUser.name}</h1>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="name"
          defaultValue={loadedUser.name}
          placeholder="name"
        />
        <br />
        <input
          type="email"
          name="email"
          id=""
          defaultValue={loadedUser.email}
          placeholder="email"
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
