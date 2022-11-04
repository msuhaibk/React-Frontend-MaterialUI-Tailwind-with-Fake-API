import React from 'react';
import { Button } from '@mui/material';
import { Header } from '../components';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

const Blank = () => {

  const navigate = useNavigate();


  const handleUsers = () => {
    navigate('/users');
  };


  return (

    <div className="container mx-auto px-3 md:px-10">


      <Header category="Page" title="Blank Page" />

      <div style={{ display: "flex",flexDirection:"column", alignItems: "center", justifyContent: "center", minHeight: "90vh", width: "100%" }}>

        <p>
          Hi Visitor, <br /><br />

          I hope you're doing great! <br /><br />

          This is a Blank Page.<br />
          If you'd like to see the <b>Users Page</b>, Please kindly select the Users Tab. <br /><br />
          Regards,<br />
          Mohammad Suhaib Khan<br />
          +971 58 210 0261
        </p>
<br/><br/>
        <Button onClick={handleUsers} size="medium" variant="contained" startIcon={<ArrowBack />} disableElevation>
          Users Page
        </Button>
      </div>
    </div>
  );
};

export default Blank;
