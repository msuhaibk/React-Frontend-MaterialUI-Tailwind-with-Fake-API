import React, { useEffect } from 'react';

import { useStateContext } from '../contexts/ContextProvider';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

const Navbar = () => {
  const { activeMenu, setActiveMenu, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">

      {screenSize <= 900 ? (<IconButton title="Menu" onClick={handleActiveMenu}><MenuIcon /></IconButton>) : (<></>)}

    <div style={{textAlign:"center"}}></div>

    </div>
  );
};

export default Navbar;
