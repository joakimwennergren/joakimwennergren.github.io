import { useState } from 'react';
import { Typography, Grid, Box, Pagination } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery'

import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Email from '@mui/icons-material/Email';
import tunes from '../data/tunes';
import projects from '../data/projects';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Index() {

    const isMobile = useMediaQuery('(max-width: 900px)');

    // State for paginating projects
    const [currentProjectPage, setCurrentProjectPage] = useState(1);
    const totalPages = Math.ceil(projects.length / 2);
    const currentItems = projects.slice(
        (currentProjectPage - 1) * 2,
        currentProjectPage * 2
    );

    const handleChange = (event, value) => {
        setCurrentProjectPage(value);
    };

    // State for paginating music
    const [currentMusicPage, setCurrentMusicPage] = useState(1);
    const totalMusicPages = Math.ceil(tunes.length / 5);
    const currentMusicItems = tunes.slice(
        (currentMusicPage - 1) * 5,
        currentMusicPage * 5
    );

    const handleMusicChange = (event, value) => {
        setCurrentMusicPage(value);
    };

    const AboutMe = () => {

        const content = () => {
            return (
                <>
                    <Typography variant='h5' sx={{ fontWeight: "bold", marginBottom: 1, color: "#444", }}>Om mig</Typography>
                    <Typography component={'p'} sx={{ marginBottom: 2 }}>Jag är en passionerad systemutvecklare från Sverige med ett stort intresse för både mjukvara, hårdvara och musik. På dagarna jobbar jag med systemutveckling, men på fritiden bygger jag gärna egna projekt - allt från inbyggda system och kretskort till appar, spelmotorer och ljudexperiment.</Typography>
                    <Typography component={'p'} sx={{ marginBottom: 2 }}>Teknik har alltid varit en kreativ drivkraft för mig. Jag gillar att förstå hur saker fungerar på djupet - att skriva effektiv kod, lösa problem nära hårdvaran, och samtidigt skapa verktyg som verkligen gör nytta.</Typography>
                    <Typography component={'p'}>För mig är systemutveckling mer än ett yrke - det är ett sätt att tänka, lära och uttrycka sig.</Typography>
                </>
            )
        }

        if (isMobile) {
            return (
                <Box sx={{ padding: 2, borderBottom: '1px solid #ccc' }}>
                    {content()}
                </Box>
            )
        } else {
            return (
                <Grid container>
                    <Grid size={1} sx={{ textAlign: 'center', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center', }}>
                    </Grid>
                    <Grid size={10} sx={{
                        padding: 6, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc'
                    }}>
                        {content()}
                        <Box sx={{ display: "flex", justifyContent: "end", marginTop: 2 }}>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                <Box><Typography variant='h6' sx={{ fontWeight: "bold", marginBottom: 1, color: "#444" }}>Kontakta mig via</Typography></Box>
                                <Box sx={{ flexDirection: "row", display: "flex", justifyContent: "end" }}>
                                    <a href="https://www.linkedin.com/in/joakim-wennergren/" style={{ color: "#c951a7", textDecoration: "none" }}><Box sx={{ borderRadius: "50%", border: "solid 1px #c951a7", padding: 1, width: 42, height: 42, display: "flex", justifyContent: "center", alignItems: "center", marginRight: 2 }}><LinkedIn size={24} /></Box></a>
                                    <a href="https://github.com/joakimwennergren" style={{ color: "#c951a7", textDecoration: "none" }}><Box sx={{ borderRadius: "50%", border: "solid 1px #c951a7", padding: 1, width: 42, height: 42, display: "flex", justifyContent: "center", alignItems: "center", marginRight: 2 }}><GitHub size={24} /></Box></a>
                                    <a href="mailto:hej@joakimwennergren.se" style={{ color: "#c951a7", textDecoration: "none" }}><Box sx={{ borderRadius: "50%", border: "solid 1px #c951a7", padding: 1, width: 42, height: 42, display: "flex", justifyContent: "center", alignItems: "center", }}><Email size={24} /></Box></a>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={1} sx={{ textAlign: 'center', padding: 2, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', }}>
                    </Grid>
                </Grid>
            )
        }
    }

    const ProjectsAndMusic = () => {

        const ProjectsContent = () => {
            return (
                <>
                    <Typography variant='h5' sx={{ fontWeight: "bold", marginBottom: 2, color: "#444" }}>Projekt</Typography>
                    {currentItems.map((item, index) => (
                        <Box sx={{ padding: 2, marginBottom: 2, border: "solid 1px #ddd", borderRadius: 1 }} key={"project+" + index}>
                            <a href={item.link} style={{ color: "#c951a7", textDecorationStyle: "dashed" }}><Typography component={'p'} sx={{ fontWeight: "bold", marginBottom: 0.5 }}>{item.title}</Typography></a>
                            <img src={item.image} style={{ width: "100%", marginBottom: 10, marginLeft: item.offset }}></img>
                            <Typography component={'p'} sx={{ fontSize: 15 }}>{item.description}</Typography>
                        </Box>
                    ))}
                    <Pagination count={totalPages} page={currentProjectPage} onChange={handleChange} />
                </>
            )
        }

        const MusicContents = () => {
            return (
                <>
                    <Typography variant='h5' sx={{ fontWeight: "bold", marginBottom: 2, color: "#444" }}>Musik</Typography>
                    {currentMusicItems.map((item, index) => (
                        <Box sx={{ marginBottom: 2, borderBottom: "solid 1px #ddd", paddingBottom: 2 }} key={"tune+" + index}>
                            <a href={"/tunes/" + item.title} style={{ color: "#c951a7", textDecorationStyle: "dashed" }}><Typography component={'p'} sx={{ fontWeight: "bold", marginBottom: 1 }}>{item.title}</Typography></a>
                            <AudioPlayer showJumpControls={false} src={"https://joakimwennergren.se/" + item.title.replace(/\s+/g, '').toLowerCase() + ".wav"} />
                        </Box >
                    ))
                    }
                    <Pagination count={totalMusicPages} page={currentMusicPage} onChange={handleMusicChange} />
                </>
            )
        }
        if (isMobile) {
            return (
                <>
                    <Box sx={{ padding: 2, backgroundColor: '#f5f5f5' }}>
                        {ProjectsContent()}
                    </Box >
                    <Box sx={{ padding: 2, }}>
                        {MusicContents()}
                    </Box >
                </>
            )
        } else {
            return (
                <Grid container>
                    <Grid size={1} sx={{ textAlign: 'center', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center', }}>
                    </Grid>
                    <Grid size={5} sx={{ padding: 6, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>
                        {ProjectsContent()}
                    </Grid>
                    <Grid size={5} sx={{ padding: 6, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>
                        {MusicContents()}
                    </Grid>
                    <Grid size={1} spacing={10} sx={{ textAlign: 'center', padding: 2, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>
                    </Grid>
                </Grid>
            )
        }
    }

    return (
        <>
            {AboutMe()}
            {ProjectsAndMusic()}
        </>
    );
}