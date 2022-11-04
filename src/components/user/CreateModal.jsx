import React, { useState, useContext } from "react";
import {
  Dialog,
  DialogTitle,
  Button,
  Grid,
} from "@mui/material";
import PublicContext from "../../contexts/PublicContext";
import { createUser } from "../../api/createUser";
import InputGrid from "./InputGrid";

const CreateDialog = (props) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const { fetched } = useContext(PublicContext);

  function handleSubmit() {
    const createNewUser = async () => {
      const result = await createUser(fetched, fName, lName, email, avatar);
      props.setFetched(result);
      props.handleCreate();
      console.log("USER CREATED",result);
    };
    createNewUser();
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
        open={props.createDialogOpen}
        fullWidth
        maxWidth="xs"
        style={{ overflow: "hidden" }}
      >
        <DialogTitle>Add New User</DialogTitle>
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

        <Grid container style={{textAlign:"center"}}>
          {/* <br/><br/> */}
          <Grid item xs={6}>
          <Button
            variant="contained"
            style={{  borderRadius:"0px" }}
            fullWidth={true}
            onClick={handleSubmit}
            disabled={fName === "" || lName === "" || email === ""}
            disableElevation
          >
            Submit
          </Button>
          </Grid>
          <Grid item xs={6}>
          <Button
            variant="contained"
            color="error"
            fullWidth={true}
            style={{paddingLeft:"5px", borderRadius:"0px"}}
            onClick={props.handleCreate}
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

export default CreateDialog;
