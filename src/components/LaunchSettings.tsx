import {Box, Button, Checkbox, Container, FormControlLabel, Paper, TextField, Typography} from "@mui/material";
import {usePersistent} from "../hooks/usePersistent.ts";
import {useResonite} from "../context/resonite.tsx";


const LaunchSettings = () => {
    const {
        doNotAutoLoadHome,
        loadAssembly,
        resetDash,
        setDoNotAutoLoadHome,
        setLoadAssembly,
        setDataPath,
        dataPath,
        skipIntroTutorial,
        setSkipIntroTutorial,
        setResetDash,
        tmpArgs,
        setTmpArgs
    } = useResonite();

    return (
        <Container
            sx={{overflowY: "scroll", height: "calc(100vh - 48px)", paddingTop: "0.5em", paddingBottom: "100px"}}>
            <Box sx={{display: "flex", flexDirection: "column", gap: "0.5em"}}>

                <Paper sx={{padding: "1em"}}>
                    <Typography variant={"h6"}>Data path</Typography>
                    <Typography gutterBottom>Resoniteの管理データを保存する場所を指定します。</Typography>

                    <Box sx={{display: "flex", gap: "1em", alignItems: "center"}}>
                        <TextField size={"small"} variant="outlined" label={"path"} sx={{flexGrow: 1}} value={dataPath}
                                   onChange={(e) => setDataPath(e.target.value)}/>
                        {/*<Button variant={"outlined"}>選択</Button>*/}
                    </Box>
                </Paper>
                <Paper sx={{padding: "1em"}}>
                    <Typography variant={"h6"}>SkipIntroTutorial</Typography>
                    <Typography gutterBottom>チュートリアルをスキップします</Typography>

                    <Box sx={{display: "flex", gap: "1em", alignItems: "center"}}>
                        <FormControlLabel control={<Checkbox checked={skipIntroTutorial} onChange={(e) => {
                            setSkipIntroTutorial(e.target.checked)
                        }}/>} label="SkipIntroTutorial"/>
                    </Box>
                </Paper>
                <Paper sx={{padding: "1em"}}>
                    <Typography variant={"h6"}>ResetDash</Typography>
                    <Typography gutterBottom>ダッシュメニューをリセットします</Typography>

                    <Box sx={{display: "flex", gap: "1em", alignItems: "center"}}>
                        <FormControlLabel control={<Checkbox checked={resetDash} onChange={(e) => {
                            setResetDash(e.target.checked)
                        }}/>} label="ResetDash"/>
                    </Box>
                </Paper>
                <Paper sx={{padding: "1em"}}>
                    <Typography variant={"h6"}>DoNotAutoLoadHome</Typography>
                    <Typography gutterBottom>Homeを自動で読み込まないようにします</Typography>

                    <Box sx={{display: "flex", gap: "1em", alignItems: "center"}}>
                        <FormControlLabel control={<Checkbox checked={doNotAutoLoadHome} onChange={(e) => {
                            setDoNotAutoLoadHome(e.target.checked)
                        }}/>} label="DoNotAutoLoadHome"/>
                    </Box>
                </Paper>
                <Paper sx={{padding: "1em"}}>
                    <Typography variant={"h6"}>LoadAssembly</Typography>
                    <Typography gutterBottom>追加のファイルを起動時にロードします</Typography>

                    <Box sx={{display: "flex", gap: "1em", alignItems: "center"}}>
                        <TextField size={"small"} variant="outlined" label={"path"} sx={{flexGrow: 1}}
                                   value={loadAssembly} onChange={(e) => {
                            setLoadAssembly(e.target.value)
                        }}/>
                    </Box>
                </Paper>
                <Paper sx={{padding: "1em"}}>
                    <Typography variant={"h6"} gutterBottom>追加引数</Typography>

                    <Box sx={{display: "flex", gap: "1em", alignItems: "center"}}>
                        <TextField size={"small"} variant="outlined" label={"args"} sx={{flexGrow: 1}}
                                   value={tmpArgs} onChange={(e) => {
                            setTmpArgs(e.target.value)
                        }}/>
                    </Box>
                </Paper>
            </Box>

            {/*<Typography>logspath</Typography>*/}
            {/*<TextField size={"small"} variant="outlined" label={"DataPath"} />*/}
            {/*<Button variant={"outlined"}>選択</Button>*/}

            {/*<Typography>cachepath</Typography>*/}
            {/*<TextField size={"small"} variant="outlined" label={"DataPath"} />*/}
            {/*<Button variant={"outlined"}>選択</Button>*/}

            {/*<Typography>invisible</Typography>*/}
            {/*<FormControlLabel control={<Checkbox defaultChecked />} label="Invisible" />*/}

            {/*<Typography>screen</Typography>*/}
            {/*<Typography>verbose</Typography>*/}
            {/*<Typography>cloudprofile</Typography>*/}
            {/*<Typography>loadassembly</Typography>*/}

            {/*<Typography>priorityworkers</Typography>*/}
            {/*<Typography>BackgroundWorkerCount</Typography>*/}

            {/*<Typography>generateprecache</Typography>*/}

            {/*<Typography>engienconfigfile: path</Typography>*/}
            {/*<Typography>unsafeModeWhiteList</Typography>*/}
            {/*<Typography>inputs</Typography>*/}
            {/*<Typography>autoStartWorlds</Typography>*/}
            {/*<Typography>autoJoinSessions</Typography>*/}
            {/*<Typography>noUI</Typography>*/}
            {/*<Typography>disableDesktop</Typography>*/}
            {/*<Typography>pathWhitelist</Typography>*/}
            {/*<Typography>OutputDevice openvr oculus</Typography>*/}
            {/*<Typography>StaticCamera360 </Typography>*/}
            {/*<Typography>Screen360 </Typography>*/}
        </Container>
    )
}

export default LaunchSettings