import React, { useEffect, useState, useContext } from "react";
import { getUser } from "../../api/getUser";
import { useNavigate, useParams } from "react-router-dom";
import PublicContext from "../../contexts/PublicContext";
import EditDialog from "./UpdateModal";
import DeleteDialog from "./DeleteModal";
import UserCard from "./UserCard";
import { Button, Grid } from "@mui/material";


const User = () => {
  const params = useParams();
  const id = parseInt(params.id);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const { fetched } = useContext(PublicContext);

  console.log("USER-DETAILS",user);

  const handleCancel = () => {
    navigate('/users');
  };
  

  const handleEdit = () => {
    setEditDialogOpen((prev) => !prev);
  };

  const handleDelete = () => {
    setDeleteDialogOpen((prev) => !prev);
  };

  useEffect(() => {
    const doGetUser = async () => {
      const result = await getUser(id, fetched);
      setUser(result);
    };
    doGetUser();
  }, [fetched, id]);

  return (
    <div>
      {editDialogOpen && (
        <EditDialog
          editDialogOpen={editDialogOpen}
          first_name={user.first_name}
          last_name={user.last_name}
          email={user.email}
          id={id}
          avatar={user.avatar}
          handleEdit={handleEdit}
        ></EditDialog>
      )}

      {deleteDialogOpen && (
        <DeleteDialog
          deleteDialogOpen={deleteDialogOpen}
          handleDelete={handleDelete}
          items={[id]}
        />
      )}
      <UserCard
        first_name={user.first_name}
        last_name={user.last_name}
        email={user.email}
        avatar={user.avatar}
        handleCancel={handleCancel}
      />
      <br></br>
      <Grid container spacing={6} style={{ textAlign: "center" }}>
      <Grid item xs={6}>
        <Button variant="outlined" onClick={handleEdit}>
          Update
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button variant="outlined" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </Grid>
    </Grid>
    </div>
  );
};

export default User;
