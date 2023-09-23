import React from "react";
// import { useState } from "react";

const MyForm = ({ formData, newValues, addUser, selectedColor }) => {

    // const [selectedColor, setSelectedColor] = useState();
  return (
    <div className="container">
      <h1 className="heading">To 
      Do APPLICATION....</h1>
      <h2 className="head">Your Info Here...</h2>
      <label htmlFor="" style={{margin: "-0.8rem", fontSize: "1.5rem"}}>Your Name Here</label><br></br><br></br>
      <input
        className="inputs inp"
        value={formData.name}
        name="name"
        onChange={newValues}
        placeholder="Enter your name"
      /><br></br><br></br>
      <label htmlFor="" style={{margin: "-0.8rem", fontSize: "1.5rem"}}>Your Age Here</label><br></br><br></br>
      <input
        className="inputs inp"
        value={formData.age}
        name="age"
        onChange={newValues}
        placeholder="Enter your age"
      /><br></br><br></br>
      <label htmlFor="" style={{margin: "-0.8rem", fontSize: "1.5rem"}}>Your Status Here</label><br></br><br></br>
      <input
        className="inputs inp"
        value={formData.status}
        name="status"
        onChange={newValues}
        placeholder="Your status please"
      /><br></br><br></br>
         {/* <label>Choose Background Color:</label>
        <input
          type="color"
          value={selectedColor}
          onChange={abc}
          name="color"
          
        />*/}
        <br></br><br></br> 

      <button className="btn" onClick={() => addUser(formData)}>submit</button>


        </div>


      
    
  );
};

export default MyForm;
