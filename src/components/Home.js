import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useSelector, useDispatch } from "react-redux";
import UserCard from "./UserCard";
import { addUser } from "../features/Users";

const Home = (props) => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <div className="addUser">
        <InputText
          className="p-inputtext-sm"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name..."
          style={{ margin: "2px" }}
        />
        <InputText
          className="p-inputtext-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email..."
          style={{ margin: "2px" }}
        />
        <Button
          label="Add User"
          className="p-button-sm"
          style={{ marginLeft: "10px" }}
          onClick={() => {
            dispatch(
              addUser({
                name,
                email,
                id:
                  userList.length > 0
                    ? userList[userList.length - 1].id + 1
                    : 1,
              })
            );
          }}
        />
      </div>
      <div className="displayUsers" style={{ marginTop: "15px" }}>
        {userList.map((obj) => {
          return (
            <UserCard
              key={obj.id}
              name={obj.name}
              email={obj.email}
              id={obj.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
