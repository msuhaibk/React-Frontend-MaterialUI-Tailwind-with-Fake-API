import React, { useState, useContext } from "react";
import {
  Dialog,
  DialogTitle,
  Button,
  Grid,
} from "@mui/material";
import PublicContext from "../../contexts/PublicContext";
import { updateUser } from "../../api/updateUser";
import { useNavigate } from "react-router-dom";
import InputGrid from "./InputGrid";

const EditDialog = (props) => {
  const [fName, setFName] = useState(props.first_name);
  const [lName, setLName] = useState(props.last_name);
  const [email, setEmail] = useState(props.email);
  const [avatar, setAvatar] = useState(props.avatar);
  const { fetched, setFetched } = useContext(PublicContext);
  const id = props.id;

  const navigate = useNavigate();

  function handleSubmit() {
    const doUpdateUser = async () => {
      const result = await updateUser(id, fetched, fName, lName, email, avatar);
      setFetched(result);
      navigate("/users");
      props.handleEdit();
    };
    doUpdateUser();
  }

  const inputElement = {
    fName: ["First Name: ", fName, setFName],
    lName: ["Last Name: ", lName, setLName],
    email: ["E-mail: ", email, setEmail],
    avatar: ["Avatar: ", avatar, setAvatar],
  };

  return (
    <div>
      <Dialog
        onClose={props.handleClose}
        open={props.editDialogOpen}
        fullWidth
        maxWidth="xs"
        style={{ overflow: "hidden" }}
      >
        <DialogTitle>Update User Details</DialogTitle>
        {Object.keys(inputElement).map((k, i) => {
          return (
            <InputGrid
              key={i}
              label={inputElement[k][0]}
              defaultValue={inputElement[k][1]}
              placeholder={inputElement[k][0].slice(0, -2)}
              setFunc={inputElement[k][2]}
            />
          );
        })}

        <Grid container style={{ textAlign: "center" }}>
          <Grid item xs={6}>
            <Button
              variant="contained"
              // color=""
              fullWidth={true}
              style={{ paddingLeft: "5px", borderRadius: "0px" }}
              onClick={handleSubmit}
              disabled={fName === "" || lName === "" || email === ""}
              disableElevation
            >
              Update
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              style={{ borderRadius: "0px" }}
              color="error"
              fullWidth={true}
              onClick={props.handleEdit}
              disableElevation
            >
              Cancel
            </Button>
          </Grid>
        </Grid>


      </Dialog>
    </div>
  );
};

export default EditDialog;
