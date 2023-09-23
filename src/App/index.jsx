import React, { useEffect, useState } from "react";
import MyForm from "./components/MyForm";
import UsersList from "./components/UsersList";
import './index.css';

const oldValues = {
  name: "",
  age: 0,
  status: "",
};

const App = () => {
  const [formData, setFormData] = React.useState(oldValues);

  const gettingDataFromLS = () => {
    let dataFromLS = localStorage.getItem("data");
    console.log(dataFromLS, "from getting func");
    if (dataFromLS) return JSON.parse(dataFromLS);
    else {
      return [];
    }
  };

  const [users, setUsers] = useState(gettingDataFromLS);

  const newValues = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  // const [selectedColor, setSelectedColor] = useState();
  // // const abc = (e) => {changeBackgroundColor(e.target.value)};
  
  

  // const changeBackgroundColor = (color) => {
  //   setSelectedColor(color);
  // };
  // const abc =(e) =>{
  //  changeBackgroundColor (e.target.value);
  // }

  // <div
  //       style={{
  //         backgroundColor: selectedColor,
  //         padding: '20px',
  //         marginTop: '20px',
  //       }}
  //     ></div>



  const addUser = (values) => {
    // console.log(values);

    let tempUser = {
      ...values,
      id: new Date(),
      bgcolor: "grey",
    };
    // console.log(tempUser, "here is the values comming from form");

    setUsers([...users, tempUser]);
  };

  const removeItem = (id) => {
    setUsers(users.filter((x) => x.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(users));
  }, [users]);

  const orangeColor = (id) => {
    // console.log(id)

    let newUsers = users.map((user) => {
      return user.id === id ? { ...user, bgcolor: "orange" } : user;
    });

    setUsers(newUsers);
  };

    const blueColor = (id) => {
    // console.log(id)

    let newUsers = users.map((user) => {
      return user.id === id ? { ...user, bgcolor: "blue" } : user;
    });

    setUsers(newUsers);
  };

      const greenColor = (id) => {
    // console.log(id)

    let newUsers = users.map((user) => {
      return user.id === id ? { ...user, bgcolor: "green" } : user;
    });

    setUsers(newUsers);
  };
  

  

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <MyForm
        formData={formData}
        newValues={newValues}
        addUser={addUser}
      />
      <h3 className="heading" style={{marginTop: '1rem', textAlign: "center", marginBottom: '-2rem'}}>DATA ARRAY...</h3>    
      <div style={{fontSize: "2rem", padding: "20px", textAlign: "center", marginBottom: "2rem", marginTop: "-15px"}}>  
      
        {users.length > 0 ? (
        <UsersList style={{gap: "10px"}}
          users={users}
          // selectedColor={selectedColor}n
          removeItem={removeItem}
          orangeColor={orangeColor}
          greenColor={greenColor}
          blueColor={blueColor}
        />
      ) : (
        "No users at the moment"
      )}
      </div>

           
    </div>
  );
};

export default App;
