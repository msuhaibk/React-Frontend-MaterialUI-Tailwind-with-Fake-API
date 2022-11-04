import React, { useEffect, useState, useContext } from "react";
import UsersListView from "../components/user/UsersListView";
import PublicContext from "../contexts/PublicContext";
import CreateDialog from "../components/user/CreateModal";
import DeleteDialog from "../components/user/DeleteModal";
import KpiCard from "../components/user/KpiCard";
import { Header } from '../components';
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const Users = () => {
  const { fetched, setFetched } = useContext(PublicContext);
  const [users, setUsers] = useState([]);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  const kpi = {
    total: fetched.total,
    per_page: fetched.per_page,
    total_pages: fetched.total_pages,
    new_ones: fetched.total_pages

  }

  if(users && users.length > 0)
  console.log("USERS-LIST",users);

  useEffect(() => {
    setUsers(fetched.data);
    setCheckedItems([])
  }, [fetched, fetched.total]);

  function handleCreate() {
    setCreateDialogOpen((prev) => !prev);
  }

  const handleDelete = () => {
    setDeleteDialogOpen((prev) => !prev);
  };

  return (
    <>
      {deleteDialogOpen && (
        <DeleteDialog
          deleteDialogOpen={deleteDialogOpen}
          handleDelete={handleDelete}
          items={checkedItems}
          setFetched={setFetched}
        />
      )}

      {createDialogOpen && (
        <CreateDialog
          handleCreate={handleCreate}
          createDialogOpen={createDialogOpen}
          setFetched={setFetched}
        />
      )}

      <div className="container mx-auto px-3 md:px-10">

        <div className="grid grid-cols-2 gap-4">

          <Header category="Page" title="Users" />

          <div style={{ textAlign: "right" }}>
            <Button className="add-button" onClick={handleCreate} size="medium" variant="contained" startIcon={<AddIcon />} disableElevation>
              Add User
            </Button>
          </div>

        </div>


        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700" style={{ marginLeft: "-14px" }}>
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-2">
              <a href="#" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Profile</a>
            </li>
            <li className="mr-2">
              <a href="#" className="inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500" >Dashboard</a>
            </li>
            <li className="mr-2">
              <a href="#" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Settings</a>
            </li>
            <li className="mr-2">
              <a href="#" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Contacts</a>
            </li>
            <li>
              <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
            </li>
          </ul>
        </div>

        <br />



        <KpiCard kpi={kpi} />

        <div>

          {users && (
            <UsersListView
              users={users}
              perPage={fetched.per_page}
              currPage={fetched.page}
              totalPages={fetched.total_pages}
              handleCreate={handleCreate}
              handleDelete={handleDelete}
              fetched={fetched}
              setFetched={setFetched}
              checkedItems={checkedItems}
              setCheckedItems={setCheckedItems}
            />
          )}
        </div>

        {/* </div> */}
      </div>
    </>
  );
};

export default Users;
