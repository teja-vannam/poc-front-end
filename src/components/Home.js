import React from "react";
import Typography from '@mui/material/Typography';
import Container from "@mui/system/Container";


function Home() {
  return (
    <Container>
      <Typography variant="h1" align="center" color="black" sx={{ fontWeight: "bold", textDecoration: "underline" }}>
        <span style={{ color: 'green' }}>Cisco</span>
      </Typography>
    </Container>
  )
}

export default Home;