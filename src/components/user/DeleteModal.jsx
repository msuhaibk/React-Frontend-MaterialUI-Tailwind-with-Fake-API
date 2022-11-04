import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { deleteUser } from "../../api/deleteUser";
import PublicContext from "../../contexts/PublicContext";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";


export default function DeleteDialog(props) {
  const navigate = useNavigate()
  const { fetched, setFetched } = useContext(PublicContext);
  function handleSubmit() {
    const doDeleteUser = async () => {
      const result = await deleteUser(props.items, fetched);
      navigate("/users")
      setFetched(result);
      props.handleDelete()
    };
    doDeleteUser();
  }

  return (
    <div>
      <Dialog open={props.deleteDialogOpen}>
        <DialogTitle>Do you confirm to delete user(s)?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            This action cannot be reversed.
          </DialogContentText>
        </DialogContent>
        <DialogActions>


        <Grid container style={{textAlign:"center"}}>
          <Grid item xs={6}>
          <Button
            variant="contained"
            style={{  borderRadius:"0px" }}
            color="error"
            fullWidth={true}
            onClick={handleSubmit}
            disableElevation
          >
            Delete
          </Button>
          </Grid>
          <Grid item xs={6}>
          <Button
            variant="contained"
            // color=""
            fullWidth={true}
            style={{paddingLeft:"5px", borderRadius:"0px"}}
            onClick={props.handleDelete}
            disableElevation
          >
            Cancel
          </Button>
          </Grid>
        </Grid>


        </DialogActions>
      </Dialog>
    </div>
  );
}
