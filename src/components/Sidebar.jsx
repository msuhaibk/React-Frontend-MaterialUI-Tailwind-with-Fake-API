import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import {
  Avatar,
  IconButton,
  Tooltip
} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

import { links } from '../data';
import { useStateContext } from '../contexts/ContextProvider';
import WestIcon from '@mui/icons-material/West';


const Sidebar = () => {
  const { loggedInUser, setLoggedInUser, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const user = {
    avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1021.jpg",
    name: loggedInUser.user ? loggedInUser.user : "Guest User"
  }
  const navigate = useNavigate()

  const handleLogOut = () => {
    setLoggedInUser({});
    navigate("/login");
    console.log("logedouy");
  }

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  const activeLink = 'nav-tab-active flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'nav-tab flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    // 
    <div className={activeMenu ? "w-72 fixed sidebar bg-white" : "w-0"}>
      <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10" style={{ position: "relative" }}>
        {activeMenu ? (
          <>
            <div className="flex justify-between items-center">
              <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                <span style={{ fontSize: "30px" }}>Creed&Bear</span>
              </Link>

              {screenSize <= 900 ? (<div style={{ marginTop: "10px" }}><IconButton title="Menu" onClick={handleActiveMenu}><WestIcon /></IconButton></div>) : (<></>)}

            </div>
            <div className="mt-10 ">
              {links.map((item, index) => (
                <div key={index}>
                  {item.links.map((link) => (
                    <NavLink
                      to={`/${link.url}`}
                      key={link.name}
                      onClick={handleCloseSideBar}
                      className={({ isActive }) => (isActive ? activeLink : normalLink)}
                    >
                      {link.icon}
                      <span className="capitalize ">{link.name}</span>
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>


            <div className='user-profile' style={{ width: "100%" }}>
              <div className='users-list' style={{ height: "100px", width: "100%", display: "flex" }}>
                <Avatar
                  alt={user.name}
                  src={user.avatar}
                  sx={{ width: 56, height: 56 }}
                />
                <div>
                  <b style={{ textTransform: "capitalize" }}> {user.name}</b><br />
                  {loggedInUser.user ? (<span>Logged In</span>) : (<span>Not Logged In</span>)}
                </div>
                <div>
                  <Tooltip title="Click to Logout">
                    <IconButton onClick={handleLogOut}>
                      <LogoutIcon />
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
            </div>



          </>
        ) : <></>}
      </div>
    </div>

  );
};

export default Sidebar;
