import { useParams } from "react-router";
import { Typography, Grid, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Snusdosa from './projects/snusdosa';
import Entropy from './projects/entropy';
import LedMatrix from './projects/ledmatrix';
import Nametag from './projects/nametag';


export default function Projects() {

    let { projectId } = useParams();
    const isMobile = useMediaQuery('(max-width: 800px)');

    const RenderProject = () => {
        switch (projectId) {
            case "smart-snusdosa":
                return <Snusdosa />;
            case "entropy-gameengine":
                return <Entropy />;
            case "led-matris":
                return <LedMatrix />;
            case "namnskylt":
                return <Nametag />;
            default:
                return <Typography variant="h4">Projektet finns inte.</Typography>;
        }
    }

    if (isMobile) {
        return (
            <Box sx={{ padding: 2 }}>
                <a href="https://joakimwennergren.se" style={{ color: "#c951a7", textDecorationStyle: "dashed" }}><Typography component={'p'} sx={{ fontWeight: "bold", marginBottom: 2, }}>Gå tillbaka till startsidan</Typography></a>
                {RenderProject()}
            </Box>
        );
    }

    return (
        <>
            <Grid container>
                <Grid size={1} sx={{ textAlign: 'center', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center', }}>
                </Grid>
                <Grid size={10} sx={{
                    padding: 6, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc'
                }}>
                    <a href="https://joakimwennergren.se" style={{ color: "#c951a7", textDecorationStyle: "dashed" }}><Typography component={'p'} sx={{ fontWeight: "bold", marginBottom: 2, }}>Gå tillbaka till startsidan</Typography></a>
                    {RenderProject()}
                </Grid>
                <Grid size={1} sx={{ textAlign: 'center', padding: 2, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', }}>
                </Grid>
            </Grid>

        </>
    );
}