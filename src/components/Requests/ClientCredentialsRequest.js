// import React, { useState, useEffect } from "react";
import { Container } from "@mui/system";
import {
  Button,
  Typography,
  Box,
  Stack,
  TextField,
  // MenuItem,
} from "@mui/material";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import InputLabel from "@mui/material/InputLabel";
// import axios from "axios";
// import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";

import BorderedSection from "../utils/BorderedSection";

function ClientCredentialsRequest() {
 

  // const [sex, setSex] = React.useState("");

  // const handleSexChange = (event) => {
  //   setSex(event.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h6" gutterBottom>
          Request Management: Credentials Request
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{}} id="customerForm">
          

          <Stack direction="row">
            <BorderedSection title="Personal Details">
            <TextField
                label="Employee Code"
                id="empcode"
                name="empcode"
                margin="normal"
                size="small"
                required
                fullWidth
              />
              <TextField
                label="Employee Name"
                id="empname"
                name="empname"
                margin="normal"
                size="small"
                required
                fullWidth
              />
              <TextField
                label="Email"
                id="email"
                name="email"
                margin="normal"
                size="small"
                required
                fullWidth
              />
              {/* <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="sex_id">Sex</InputLabel>
                <Select
                  id="sex"
                  value={sex}
                  label="Sex"
                  required
                  onChange={handleSexChange}
                >
                  <MenuItem value={"male"}>Male</MenuItem>
                  <MenuItem value={"female"}>Female</MenuItem>
                </Select>
              </FormControl> */}

              <TextField
                label="Address"
                id="adress"
                name="address"
                margin="normal"
                size="small"
                required
                multiline
                minRows="3"
                fullWidth
              />
              <TextField
                label="Phone Number"
                id="phone"
                name="phone"
                margin="normal"
                size="small"
                required
                fullWidth
              />

              <Container maxWidth="sm">
                <Stack direction="row" spacing={3}>
                  <Button type="button" variant="contained">
                    Save Request
                  </Button>
                  <Button type="button" variant="contained">
                    Edit Request
                  </Button>
                  <Button type="button" variant="contained">
                    Submit Request
                  </Button>
                </Stack>
              </Container>
            </BorderedSection>
          </Stack>
        </Box>

        <Divider variant="middle" />
      </Container>
    </>
  );
}

export default ClientCredentialsRequest;
