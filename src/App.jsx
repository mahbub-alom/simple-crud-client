import "./App.css";

function App() {
  const handleAddUsers = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("user added successfully");
          form.reset()
        }
      });
  };

  return (
    <>
      <h1>Simple Crud</h1>
      <form onSubmit={handleAddUsers}>
        <input type="text" name="name" placeholder="name" />
        <br />
        <input type="email" name="email" id="" placeholder="email" />
        <br />
        <input type="submit" value="add user" />
      </form>
    </>
  );
}

export default App;
