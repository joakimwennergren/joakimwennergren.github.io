import { useParams } from "react-router";
import tunes from '../data/tunes';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Tunes() {

    let { tuneId } = useParams();

    const RenderPlayer = () => {
        const cleanTuneId = tuneId.replace(/\s+/g, '');

        if (!tunes.find((tune) => tune.title.replace(/\s+/g, '').toLowerCase() == cleanTuneId.toLocaleLowerCase())) {
            return <Typography variant="h4">Låten finns inte.</Typography>;
        }

        return tunes.map((tune, index) => {
            console.log("https://joakimwennergren.se/" + tune.title.replace(/\s+/g, '').toLowerCase() + ".wav")
            if (tune.title.replace(/\s+/g, '').toUpperCase() === cleanTuneId.toUpperCase()) {
                return (
                    <AudioPlayer key={"tune" + index} showJumpControls={false} src={"https://joakimwennergren.se/" + tune.title.replace(/\s+/g, '').toLowerCase() + ".wav"} />
                )
            }
        });
    }

    if (isMobile) {
        return (
            <Box sx={{ padding: 2 }}>
                <a href="https://joakimwennergren.se" style={{ color: "#c951a7", textDecorationStyle: "dashed" }}><Typography component={'p'} sx={{ fontWeight: "bold", marginBottom: 2, }}>Gå tillbaka till startsidan</Typography></a>
                <Typography variant='h4' sx={{ fontWeight: "bold", marginBottom: 2, color: "#444" }}>{tuneId}</Typography>
                {RenderPlayer()}
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
                    <Typography variant='h4' sx={{ fontWeight: "bold", marginBottom: 2, color: "#444" }}>{tuneId}</Typography>
                    {RenderPlayer()}
                </Grid>
                <Grid size={1} sx={{ textAlign: 'center', padding: 2, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', }}>
                </Grid>
            </Grid>
        </>
    );
}
