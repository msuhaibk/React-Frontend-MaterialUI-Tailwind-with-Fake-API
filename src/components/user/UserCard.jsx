import React from 'react'
import { Card, Typography, Grid, IconButton } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

const UserCard = (props) => {
  return (
    <div><Card
      className="users-list profile-card"
      style={{
        width: "80%",
        margin: "10px auto",
        marginTop: "10vh",
        padding: '40px',
        position: "relative",
        minHeight: "400px"
      }}
    >


      <IconButton onClick={props.handleCancel} size="large" style={{ position: "absolute", right: "0", top: "0" }}><CancelIcon style={{ width: "40px", height: "40px" }} /></IconButton>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <img src={props.avatar} style={{ width: "100%" }} alt={props.first_name} ></img>
          <Typography variant="h5" style={{ margin: "10px auto" }}>
            <b>
              @ {props.first_name} {props.last_name}
            </b>
            <br />
          </Typography>
          <p>I'm a dummy text to fill space to keep the design theme...</p>
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography variant="h5" style={{ margin: "10px auto" }}>
            Hi Visitor,<br /><br />
            I am <b>{props.first_name}</b> and here are some facts about me.<br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officiis nemo, explicabo blanditiis odio maxime corrupti voluptatem, sunt consequatur ut a aut sequi delectus qui optio eius modi illo ad.
            <br /><br />Contact me via email: <b>{props.email} </b>
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <div className="flex flex-row md:flex-col" style={{ alignItems: "center", height:"100%", justifyContent: "space-evenly" }}>
            <FacebookIcon />
            <LinkedInIcon />
            <PinterestIcon />
            <InstagramIcon />
          </div>
        </Grid>
      </Grid>
    </Card></div>
  )
}

export default UserCard