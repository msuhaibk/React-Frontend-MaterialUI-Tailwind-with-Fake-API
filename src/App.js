
import './App.css';
import { React, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Users from "./pages/Users";
import UserCard from "./components/user/UserCardView";
import Login from "./pages/Login";
import { getUsers } from "./api/getAllUsers";


import { Navbar, Footer, Sidebar } from './components';

import { useStateContext } from './contexts/ContextProvider';

import PublicContext from "./contexts/PublicContext";

import Blank from './pages/Blank';


const Layout = (activeMenu) => (
  <div className="flex relative">
    <Sidebar />

    <div
      className={
        activeMenu
          ? 'min-h-screen md:ml-72 w-full  '
          : 'w-full min-h-screen flex-2 '
      }
    >
      <div className="fixed md:static bg-main-bg navbar w-full ">
        <Navbar />
      </div>

      <Outlet />

    </div>
  </div>
);


const App = () => {

  const [fetched, setFetched] = useState({});
  const { activeMenu } = useStateContext();


  useEffect(() => {
    const doGetUsers = async () => {
      const result = await getUsers("check");
      setFetched(result);
    };

    doGetUsers();
  }, []);


  return (
    <div >
      <PublicContext.Provider
        value={{ fetched, setFetched }}
      >
        <BrowserRouter>
          <div>
            <Routes>
              <Route element={<Layout activeMenu={activeMenu} />}>
                <Route path="/blank" element={<Blank />} />
                <Route path="/blank2" element={<Blank />} />
                <Route path="/blank3" element={<Blank />} />
                <Route path="/blank4" element={<Blank />} />
                <Route path="/blank5" element={<Blank />} />
                <Route exact path="/users" element={<Users />} />
                <Route exact path="/users/:id" element={<UserCard />} />
              </Route>

              <Route exact path="/login" element={<Login />} />
              <Route exact path="/" element={<Navigate to="/login" replace />} />
            </Routes>
            <Footer />
        </div>
      </BrowserRouter>
    </PublicContext.Provider>
    </div >
  );
};

export default App;
