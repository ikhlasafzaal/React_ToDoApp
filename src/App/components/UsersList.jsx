import React from "react";

const UsersList = ({ users, removeItem, orangeColor, greenColor,blueColor }) => {
  return (
    <div style={{ marginTop: "30px" }}>
      {users.map((x) => (
        <div
          key={x.id}
          style={{
            backgroundColor: x.bgcolor,
            marginBottom: "5px",
            padding: "3px",
            borderRadius: "10px",
          }}
        >
          {x.name} - {x.age} - {x.status} --- 
          <span
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => removeItem(x.id)}
          >
                REMOVE 
          </span>
          <span
            style={{ color: "black", cursor: "pointer", marginLeft: "5px" }}
            onClick={() => greenColor(x.id)}
          >
            -- green |
          </span>
          <span
            style={{ color: "black", cursor: "pointer", marginLeft: "5px" }}
            onClick={() => blueColor(x.id)}
          >
            blue |
          </span>
          <span
            style={{ color: "black", cursor: "pointer", marginLeft: "5px" }}
            onClick={() => orangeColor(x.id)}
          >
            orange
          </span>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
