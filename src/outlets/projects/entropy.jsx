import { Typography, Box, Paper, Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery'
import Svampjakt from '../../static/projects/svampjakt.jpg';


export default function Entropy() {

    const isMobile = useMediaQuery('(max-width: 600px)');

    const Description = () => {
        return (
            <>
                <Typography component={'h1'} sx={{ marginBottom: 2, fontWeight: "bold", fontSize: 32 }}>Entropy Spelmotor</Typography>
                <Typography component={'p'} sx={{ marginBottom: 2 }}>
                    Spelmotorn är ett långsiktigt utvecklingsprojekt som kombinerar hög prestanda, plattformsoberoende och ett modernt komponentbaserat arkitekturtänk. Motorn är utformad för att ge utvecklare full kontroll över rendering, logik och resurshantering, samtidigt som den är flexibel och scriptbar.
                </Typography>

                <Typography component={'h1'} sx={{ marginBottom: 2, fontWeight: "bold" }}>Teknik</Typography>
                <Typography component={'p'} sx={{ marginBottom: 2 }}>
                    Motorn är byggd från grunden i C++/C och använder sig av Vulkan API för avancerad och effektiv rendering. Den är designad för låg nivå och maximal kontroll, samtidigt som den erbjuder moderna ramverk för struktur och utbyggbarhet.
                </Typography>

                <Typography component={'h1'} sx={{ marginBottom: 2, fontWeight: "bold" }}>Funktionalitet</Typography>
                <ul>
                    <li><b>Vulkan API</b> – Ger tillgång till låg-nivå GPU-funktioner för hög prestanda och kontroll.</li>
                    <li><b>C++/C</b> – Motorn är skriven i C++ och C för effektiv minneshantering och maximal portabilitet.</li>
                    <li><b>Scriptbar med C#</b> – Genom en inbyggd C#-runtime kan spelspecifik logik skrivas separat från motorkoden.</li>
                    <li><b>Flecs ECS</b> – Ett kraftfullt Entity Component System används för flexibel och modulär spelarkitektur.</li>
                </ul>

                <Typography component={'h1'} sx={{ marginBottom: 2, fontWeight: "bold" }}>Plattformar</Typography>
                <Typography component={'p'} sx={{ marginBottom: 2 }}>
                    Motorn är utvecklad med multiplattformsstöd i åtanke och fungerar på följande operativsystem:
                </Typography>
                <ul>
                    <li>Windows</li>
                    <li>macOS</li>
                    <li>Linux</li>
                    <li>iOS</li>
                    <li>Android</li>
                </ul>

                <Typography component={'h1'} sx={{ marginBottom: 2, fontWeight: "bold" }}>Utveckling</Typography>
                <Typography component={'p'} sx={{ marginBottom: 2 }}>
                    Projektet har utvecklats under 2–3 års tid och är resultatet av ett långsiktigt engagemang för att bygga en stabil, kraftfull och skalbar spelmotor från grunden. Fokus har legat på kontroll, prestanda och modern arkitektur.
                </Typography>
                <Typography component={'h1'} sx={{ marginBottom: 2, fontWeight: "bold" }}>Bilder</Typography>
                <img src={Svampjakt} style={{ width: "33%" }}></img>
            </>
        )
    }

    return (
        <>
            {Description()}
        </>
    );
}