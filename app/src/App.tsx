import React, { useState } from "react";
import "./App.css";
import Components from "./Components";

function App() {
  const { Button, Input } = Components;
  const [formData, setFromdata] = useState({
    firstName: "",
    seondName: "",
    age: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFromdata((form) => ({
      ...form,
      [name]: value,
    }));
  };
  const onClick = () => {
    console.log(formData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Input
          label="First Name"
          type="text"
          placeholder="Enter your First name"
          name="firstName"
          onChange={handleChange}
        />
        <Input
          label="Second Name"
          type="text"
          placeholder="Enter your Second name"
          name="seondName"
          onChange={handleChange}
        />
        <Input
          label="Your Age"
          type="number"
          placeholder="Enter your age"
          name="age"
          onChange={handleChange}
        />
        <Button ButtonText="Submit" onClick={onClick} />
      </header>
    </div>
  );
}

export default App;
