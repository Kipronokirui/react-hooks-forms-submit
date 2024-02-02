import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submittedData, setSubmittedData]= useState([]);
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleSubmit(event){
    event.preventDefault();
    if (firstName.length > 0) {
      console.log("First Name found")
      const formData = {
        firstName: firstName,
        lastName: lastName,
      };
      const dataArray = [...submittedData, formData]
      setSubmittedData(dataArray);
      setFirstName("");
      setLastName("");
      setErrors([]);
    }else {
      setErrors(["First name is required!"]);
    }
  }
  const listofSubmissions = submittedData.map((data,index) =>{
    return(
      <div key={index}>
      {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
        <input type="text" value={lastName} onChange={handleLastNameChange} />
        <button type="submit">Submit</button>
      </form>
      {/* conditionally render error messages */}
      {errors.length > 0
        ? errors.map((error, index) => (
            <p key={index} style={{ color: "red" }}>
              {error}
            </p>
          ))
        : null}
      <h3>Submissions</h3>
      {listofSubmissions}
    </div>
  );
}

export default Form;
