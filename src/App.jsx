
import './App.css'

function App() {
  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email}
    console.log(user);
    fetch('http://localhost:5000/users/', {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    }).then(res => res.JSON())
    .then(data => console.log(data))
  }

  return (
    <>
      <h1>Simple Crud</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" />
        <br /><br />
        <input type="email" name="email" id="" />
        <br /><br />
        <input type="submit" value="Add User" />
      </form>
     
    </>
  )
}

export default App
