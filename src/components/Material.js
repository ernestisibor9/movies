import React from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";

function Material() {
  return (
    <div className="mt-5">
      <Grid container spacing={2} style={{ justifyContent: "center" }}>
        <Grid md={5}>
          <Card>
            <CardContent>
              <Typography variant="h5" style={{ textAlign: "center" }}>
                REGISTRATION FORM
              </Typography>
              <TextField
                variant="outlined"
                id="outlined-basic"
                label="FullName"
                helperText="Please enter full name"
                fullWidth
                color="warning"
                style={{ marginTop: "20px" }}
              />
              <TextField
                variant="outlined"
                id="outlined-basic"
                label="Username"
                helperText="Please enter username"
                fullWidth
                color="warning"
                style={{ marginTop: "20px" }}
              />
              <TextField
                variant="outlined"
                id="outlined-basic"
                label="Email"
                helperText="Please enter email"
                fullWidth
                color="warning"
                style={{ marginTop: "20px" }}
              />
              <TextField
                id="filled-basic"
                style={{ marginTop: "20px" }}
                helperText="Please enter password"
                label="Password"
                variant="filled"
                type="password"
                fullWidth
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Material;
