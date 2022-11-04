import React, { useState } from "react";
import {
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  TextField,
  IconButton,
  Pagination,
  Stack,
  Badge,
  Button,
  Chip,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import InputAdornment from "@material-ui/core/InputAdornment";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditDialog from "./UpdateModal";


const UsersListView = (props) => {
  const users = props.users;

  const [currPage, setCurrPage] = useState(props.currPage);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [currUser, setCurrUser] = useState({});

  const [searchQuery, setSearchQuery] = useState("");

  var filteredUsers = [...users].reverse();

  const filterData = (query, data) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) => d.first_name.toString().toLowerCase().includes(query) || d.last_name.toString().toLowerCase().includes(query));
    }
  };

  const dataFiltered = filterData(searchQuery, filteredUsers);

  const navigate = useNavigate();

  function handleClick(e, id) {
    let { checked } = e.target;
    if (checked) {
      props.setCheckedItems([...props.checkedItems, id]);
    } else {
      props.setCheckedItems(props.checkedItems.filter((item) => item !== id));
    }
  }

  function handleSingleDelete(id) {
    props.setCheckedItems([id]);
    props.handleDelete();
  }

  function handleCheckAll(e) {
    let { checked } = e.target;
    let idArr = users.map((elem) => elem.id);
    if (checked) {
      props.setCheckedItems([...props.checkedItems, ...idArr]);
    } else {
      props.setCheckedItems(
        props.checkedItems.filter((item) => !idArr.includes(item))
      );
    }
  }

  const handleEdit = () => {
    setEditDialogOpen((prev) => !prev);
  };

  const handleEditItem = (user) => {
    setCurrUser(user);
    handleEdit();
  };



  return (
    <>
      {editDialogOpen && (
        <EditDialog
          editDialogOpen={editDialogOpen}
          first_name={currUser.first_name}
          last_name={currUser.last_name}
          email={currUser.email}
          id={currUser.id}
          avatar={currUser.avatar}
          handleEdit={handleEdit}
        ></EditDialog>
      )}

      <Grid container justifyContent={"center"} style={{ margin: "40px auto 15px auto" }}>
        <Grid item={true} xs={6} style={{ textAlign: "left" }}>


          <Badge anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }} badgeContent={props.checkedItems.length} color="error">
            <Button disabled={props.checkedItems.length === 0} onClick={props.handleDelete} variant="outlined" color="error" size="small" className="delete-button" startIcon={<DeleteOutlineIcon />} disableElevation>
              Delete
            </Button>
          </Badge>

        </Grid>


        <Grid item={true} xs={6} style={{ textAlign: "right" }}>
          <form>
            <TextField
              id="search-bar"
              className="text"
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              value={searchQuery}
              variant="outlined"
              placeholder="Search"
              size="small"
              InputProps={{
                startAdornment: <InputAdornment position="start">
                  <SearchIcon style={{ color: 'lightgrey' }} />
                </InputAdornment>
              }}
            />
          </form>
        </Grid>


      </Grid>
      <List
        className="users-list"
      >
        <ListItem divider
          style={{ backgroundColor: "#F9FBFC", borderTopLeftRadius: "10px", height: "50px" }}

        >
          <ListItemIcon>
            <Checkbox
              edge="start"
              onChange={(e) => handleCheckAll(e)}
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon>
          <ListItemText >
            <Box
              component={Grid}
              container
              sm={0}
              md={12}
              item={true}
              display={{ xs: "none", sm: "block" }}
            >
              <Grid container spacing={2} >
                <Grid item={true} xs={0} md={2} style={{ margin: "10px auto" }} fontWeight={500}>
                  User
                </Grid>
                <Grid item={true} xs={3} md={2} style={{ margin: "10px auto" }} fontWeight={500}>
                  Status
                </Grid>
                <Grid item={true} xs={7} md={3} style={{ margin: "10px auto" }} fontWeight={500}>
                  Full Name
                </Grid>
                <Grid className="email" item={true} xs={0} md={5} style={{ margin: "10px auto" }} fontWeight={500}>
                  Email
                </Grid>
              </Grid>
              </Box>
          </ListItemText>
        </ListItem>
        {dataFiltered
          .slice(
            (currPage - 1) * props.perPage,
            currPage * (props.perPage - 1) + currPage
          )
          .map((user, i) => {
            return (
              <ListItem
                divider
                key={i}
                secondaryAction={
                  <>

                    <IconButton
                      edge="end"
                      aria-label="edit"
                      onClick={() => handleEditItem(user)}
                    >
                      <EditOutlinedIcon />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      style={{ paddingRight: "15px" }}
                      onClick={() => handleSingleDelete(user.id)}
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  </>
                }
                style={{ padding: "0px" }}
              >
                <ListItemIcon style={{ paddingLeft: "15px" }}>
                  <Checkbox
                    edge="start"
                    onChange={(e) => handleClick(e, user.id)}
                    checked={props.checkedItems.includes(user.id)}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemButton
                  role={undefined}
                  onClick={() => navigate(`/users/${user.id}`)}
                  dense
                  style={{ width: "100%" }}
                >
                  <ListItemText>
                    <Grid container spacing={2}>
                      <Grid item={true} container xs={6} md={2} >
                        <Grid item={true} xs={12} md="auto">
                          <Avatar
                            alt={user.first_name + user.last_name}
                            src={user.avatar}
                          />
                        </Grid>
                        <Grid item={true} xs={12} md="auto" className="px-0 md:px-2" style={{ display:"flex",alignItems:"center",justifyContent:"start" }} >
                          <b>{user.first_name}</b>
                        </Grid>
                      </Grid>
                      <Grid item={true} xs={6} md={2} style={{ margin: "10px auto" }}>

                        {Math.random() < 0.5
                          ? <Chip label="Buyer" color="primary" variant="outlined" />
                          : <Chip label="Seller" color="success" variant="outlined" />
                        }


                      </Grid>
                      <Grid item={true} xs={12} md={3} style={{ margin: "10px auto" }}>
                        {user.first_name + " " + user.last_name}
                      </Grid>
                      <Grid className="email" item={true} xs={12} md={5} style={{ margin: "10px auto" }}>
                        {user.email}
                      </Grid>
                    </Grid>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            );
          })}
        <Grid justifyContent={"center"} container style={{ margin: "10px auto" }}>
          <Grid item={true} xs={12}>
            <Stack spacing={2} style={{ margin: "auto" }}>
              <Pagination
                style={{ margin: "auto" }}
                page={currPage ? currPage : 1}
                count={props.totalPages}
                color="primary"
                onChange={(e, v) => {
                  setCurrPage(v);
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </List>
    </>
  );
};




export default UsersListView;
