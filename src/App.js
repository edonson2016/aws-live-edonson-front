import React, {useState, useEffect} from "react";

function App() {

  async function addEmployee(newEmployee) {
    try{
      const response = await fetch("http://localhost:3001/api", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEmployee),
      });
      console.log(response);
    } catch(err) {
      console.log(err);
    }
  }

  
  const submitHandler = (e) => {

    e.preventDefault()
    const newEmployee = {
      empId: e.target.empId.value,
      fname: e.target.fname.value,
      lname: e.target.lname.value,
      pri_skill: e.target.pri_skill.value,
      location: e.target.location.value
    }

    addEmployee(newEmployee).then(() => {
      console.log(newEmployee)
    })
  }

  return (
    <div>
      <div>
        <form onSubmit={submitHandler}>
        <input type="text" name = "empId" />
        <input type="text" name = "fname" />
        <input type="text" name = "lname" />
        <input type="text" name = "pri_skill" />
        <input type="text" name = "location" />
        <input type="submit"/>
        </form>
      </div>
    </div>
  );
}

export default App;
