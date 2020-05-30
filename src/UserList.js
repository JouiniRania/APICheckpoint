import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const UserList=()=> {
  const [data, setdata] = useState(['']);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setdata(res.data);
    });
  }, []);
  console.log(data);
  return (
    <div className="col-12">
        {data.map((item) => {
          return (
            <tr>
              <td style={{ width: 300 , color:'grey', textDecorationStyle:'solid' }}>
                {item.name}
              </td>
              <td style={{ width: 300, color:'black', textDecorationStyle:'dotted' }}>
                {item.email}
              </td>
              <td style={{ color:'red', textDecorationStyle:'dotted' }}>
                {item.phone}
              </td>
            </tr>
          );
        })}
    </div>
  );
}
export default UserList