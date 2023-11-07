import './style/App.css'
import {Box, Button, Container, TextField} from "@mui/material";
import React from "react";

function App() {

  const buttonHandler = () => {
    window.api.invoke("openDialog", "test")
  }

  const launchHandler = () => {
    window.api.invoke("launchResonite")
  }

  return (
    <>
      <Container>
        <Box>
          <TextField size={"small"} variant="outlined" />
          <Button variant={"outlined"} onClick={buttonHandler}>Test Button</Button>
        </Box>

        <Button variant={"contained"} size={"large"} onClick={launchHandler}>起動</Button>
      </Container>
    </>
  )
}

export default App
