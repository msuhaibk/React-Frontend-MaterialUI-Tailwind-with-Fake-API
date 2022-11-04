import React from 'react';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';


export const links = [
  {
    links: [
      {
        name: 'Home',
        icon: <HomeOutlinedIcon />,
        url: 'blank'
        
      },
      {
        name: 'Dashboard',
        icon: <DashboardOutlinedIcon />,
        url: 'blank2'
      },
      {
        name: 'Customers',
        icon: <PeopleAltOutlinedIcon />,
        url: 'blank3'
      },
      {
        name: 'Users',
        icon: <PeopleAltOutlinedIcon />,
        url: 'users'
      },  
      {
        name: 'Projects',
        icon: <LayersOutlinedIcon />,
        url: 'blank4'
      },
      {
        name: 'Reports',
        icon: <InsightsOutlinedIcon />,
        url: 'blank5'
      },
    ],
  },
 ];

