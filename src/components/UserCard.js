import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useDispatch } from "react-redux";
import { deleteUser, updateEmail } from "../features/Users";
const UserCard = (props) => {
  const dispatch = useDispatch();
  const { name, email, id } = props;
  const [newEmail, setNewEmail] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        title={name}
        style={{
          width: "35rem",
          marginBottom: "2em",
          backgroundColor: "#3B3B98",
          color: "white",
        }}
      >
        <p className="m-0">{email}</p>
        <InputText
          className="p-inputtext-sm"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          placeholder="Email..."
          style={{ margin: "2px" }}
        />
        <Button
          label="Update Email"
          className="p-button-sm"
          style={{ marginLeft: "5px" }}
          onClick={() => {
            dispatch(updateEmail({ id, email: newEmail }));
          }}
        />
        <Button
          label="Delete User"
          icon="pi pi-trash"
          iconPos="right"
          className="p-button-sm p-button-danger"
          style={{ marginLeft: "5px" }}
          onClick={() => {
            dispatch(deleteUser({ id }));
          }}
        />
      </Card>
    </div>
  );
};

export default UserCard;
