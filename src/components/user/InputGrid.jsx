import React from "react";
import { Grid, Typography, TextField} from "@mui/material";

const InputGrid = (props) => {

  return (
    <>
      <Grid container style={{ padding: "5px", paddingLeft: "20px" }}>
        <Grid item xs={4} style={{ margin: "10px auto" }}>
          <Typography style={{ margin: "10px auto", paddingLeft: "5px" }}>
            {props.label}
          </Typography>
        </Grid>
        <Grid item xs={8} style={{ margin: "10px auto" }}>
          <TextField
            variant="outlined"
            defaultValue={props.defaultValue}
            placeholder={props.placeholder}
            onChange={(e) => props.setFunc(e.target.value)}
          ></TextField>
        </Grid>
      </Grid>
    </>
  );
};

export default InputGrid;
