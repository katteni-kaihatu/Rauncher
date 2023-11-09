import {Button, Checkbox, Container, FormControlLabel, TextField, Typography} from "@mui/material";


const LaunchSettings = () => {
    return (
        <Container sx={{overflowY: "scroll", height: "calc(100vh - 48px)"}}>
            <h1>Launch Settings</h1>
            <Typography>datapath</Typography>

            <TextField size={"small"} variant="outlined" label={"DataPath"} />
            <Button variant={"outlined"}>選択</Button>

            <Typography>logspath</Typography>
            <TextField size={"small"} variant="outlined" label={"DataPath"} />
            <Button variant={"outlined"}>選択</Button>

            <Typography>cachepath</Typography>
            <TextField size={"small"} variant="outlined" label={"DataPath"} />
            <Button variant={"outlined"}>選択</Button>

            <Typography>invisible</Typography>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Invisible" />

            <Typography>screen</Typography>
            <Typography>verbose</Typography>
            <Typography>cloudprofile</Typography>
            <Typography>loadassembly</Typography>

            <Typography>priorityworkers</Typography>
            <Typography>BackgroundWorkerCount</Typography>

            <Typography>generateprecache</Typography>

            <Typography>engienconfigfile: path</Typography>
            <Typography>unsafeModeWhiteList</Typography>
            <Typography>inputs</Typography>
            <Typography>autoStartWorlds</Typography>
            <Typography>autoJoinSessions</Typography>
            <Typography>noUI</Typography>
            <Typography>disableDesktop</Typography>
            <Typography>pathWhitelist</Typography>

            <Typography>OutputDevice openvr oculus</Typography>
            <Typography>StaticCamera360 </Typography>
            <Typography>Screen360 </Typography>
        </Container>
    )
}

export default LaunchSettings