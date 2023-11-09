import {Box, Button, Card, CardActions, CardContent, Container, Typography} from "@mui/material";
import React from "react";

const Home = () => {
    return (
        <Container sx={{paddingTop: "1em", overflowY: "scroll", height: "calc(100vh - 48px)", paddingBottom: "100px"}}>
            <Typography variant="h4" gutterBottom>
                Resonite 更新情報
            </Typography>
            <Box sx={{display: "flex", flexDirection: "column", gap: "1em"}}>
                <Card>
                    <CardContent>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                            2023/11/08 14:44
                        </Typography>
                        <Typography variant="h5" component="div">
                            2023.11.8.335
                        </Typography>
                        <Typography variant="body2">
                            A whole bunch of bugfixes, many of them for ProtoFlux and did a fair bit of work on on
                            the display nodes and a bit on input ones to make them a bit better. There's more to do
                            still, but hopefully this helps!

                            Also you can now drag/drop actual direct values in some cases now. It's testing the
                            waters a bit with that, right now you can't grab those values in the inspector yet, I'll
                            have to add a thing for that later and see what fits there nicely, but it's a start.

                            New Features:
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            続きを読む...
                        </Button>
                    </CardActions>
                </Card>
                <Card>
                    <CardContent>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                            2023/11/07 14:29
                        </Typography>
                        <Typography variant="h5" component="div">
                            2023.11.7.274
                        </Typography>
                        <Typography variant="body2">
                            First build that I made on my laptop while in the US!

                            I'm sorry it took so long, it took a bit to sort out the build issues, go through our
                            dependencies and update them, but now I'll be able to make builds way faster that everything
                            is working again, plus we're a fair bit closer automating the builds completely in the
                            future as well. There's been a lot of changes in the background too to cleanup and improve
                            our build process, which you can't directly see, but that will make stuff easier for us
                            going forward.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            続きを読む...
                        </Button>
                    </CardActions>
                </Card>

                <Card>
                    <CardContent>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                            2023/11/07 14:29
                        </Typography>
                        <Typography variant="h5" component="div">
                            2023.11.7.274
                        </Typography>
                        <Typography variant="body2">
                            First build that I made on my laptop while in the US!

                            I'm sorry it took so long, it took a bit to sort out the build issues, go through our
                            dependencies and update them, but now I'll be able to make builds way faster that everything
                            is working again, plus we're a fair bit closer automating the builds completely in the
                            future as well. There's been a lot of changes in the background too to cleanup and improve
                            our build process, which you can't directly see, but that will make stuff easier for us
                            going forward.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            続きを読む...
                        </Button>
                    </CardActions>
                </Card>

            </Box>
        </Container>
    )
}

export default Home