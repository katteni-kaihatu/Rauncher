import './style/App.css'
import {Box, Button, Card, CardContent, Container, Fab, Tab, Tabs, TextField, Typography} from "@mui/material";
import React from "react";
import Home from "./components/Home.tsx";
import LaunchSettings from "./components/LaunchSettings.tsx";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import {ResoniteProvider, useResonite} from "./context/resonite.tsx";
import {DeleteForever} from "@mui/icons-material";

export function AppWrapper() {
    return (
        <ResoniteProvider>
            <App/>
        </ResoniteProvider>
    )
}

function App() {
    const r = useResonite();

    const buttonHandler = () => {
        window.api.invoke("openDialog", "test")
    }

    const launchHandler = () => {
        console.log(r.args, r.dataPath)
        window.api.invoke("launchResonite", {
            args: r.args,
            cwd: r.dataPath,
        })
    }

    const closeHandler = () => {
        window.api.invoke("closeResonite")
    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
            >
                <Tab label="Home"/>
                <Tab label="起動設定"/>
                <Tab label="MOD"/>
                <Tab label="Log"/>
            </Tabs>
            {value === 0 && (<Home></Home>)}
            {value === 1 && (<LaunchSettings></LaunchSettings>)}
            {/*<Container>*/}
            {/*  <Box>*/}
            {/*    <TextField size={"small"} variant="outlined" />*/}
            {/*    <Button variant={"outlined"} onClick={buttonHandler}>Test Button</Button>*/}
            {/*  </Box>*/}

            {/*  <Button variant={"contained"} size={"large"} onClick={launchHandler}>起動</Button>*/}
            {/*  <Button variant={"contained"} size={"large"} onClick={closeHandler}>終了</Button>*/}
            {/*</Container>*/}

            <Box sx={{position: "fixed", bottom: 10, right: 20}}>
                <Box sx={{display: "flex", flexDirection: "row", gap: "0.25em"}}>
                    <Fab variant="extended" color={"primary"} onClick={launchHandler}>
                        <RocketLaunchIcon sx={{mr: 1}}/>
                        起動
                    </Fab>
                    <Fab variant="extended" color={"error"} onClick={closeHandler}>
                        <DeleteForever sx={{mr: 1}}/>
                        強制終了
                    </Fab>
                </Box>
            </Box>
        </>
    )
}

export default App
