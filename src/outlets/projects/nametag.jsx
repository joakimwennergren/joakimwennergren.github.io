import { Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery'
import Namnskylt1 from '../../static/projects/namnskylt_1.jpg';
import Namnskylt2 from '../../static/projects/namnskylt_2.jpg';
import Namnskylt3 from '../../static/projects/namnskylt_3.jpg';

export default function Nametag() {

    const isMobile = useMediaQuery('(max-width: 600px)');

    const Description = () => {
        return (
            <>
                <Typography component={'h1'} sx={{ marginBottom: 2, fontWeight: "bold", fontSize: 32 }}>E-Paper Namnskylt</Typography>
                <Typography component={'p'} sx={{ marginBottom: 2 }}>
                    E-Paper Namnskylt är ett modernt och energieffektivt hårdvaruprojekt som kombinerar trådlös kommunikation med lågströms e-pappersteknik.
                    Syftet är att skapa en dynamisk, uppkopplad namnskylt som automatiskt visar aktuell information såsom namn, chef, sektion och tid –
                    och i framtiden även status från Microsoft Teams.
                </Typography>

                <Typography component={'h1'} sx={{ marginBottom: 2, fontWeight: "bold" }}>Teknik</Typography>
                <Typography component={'p'} sx={{ marginBottom: 2 }}>
                    Systemet baseras på en <b>ESP32-C3</b> med integrerat Wi-Fi och Bluetooth Low Energy, vilket möjliggör enkel uppkoppling och datauppdatering.
                    Den energieffektiva <b>e-paper-displayen</b> ger hög kontrast och utmärkt läsbarhet även i starkt ljus, samtidigt som den behåller innehållet utan strömförbrukning.
                </Typography>

                <Typography component={'h1'} sx={{ marginBottom: 2, fontWeight: "bold" }}>Funktionalitet</Typography>
                <ul>
                    <li><b>Dynamisk informationsvisning</b> – Visar namn, närmaste chef, sektion och aktuell tid.</li>
                    <li><b>Trådlös uppdatering</b> – Wi-Fi och BLE används för att hämta och synkronisera data.</li>
                    <li><b>Teams-integration (planerad)</b> – Visar användarens tillgänglighetsstatus direkt på displayen.</li>
                    <li><b>Låg strömförbrukning</b> – E-paper-tekniken kräver endast energi vid uppdatering, vilket ger lång batteritid.</li>
                </ul>

                <Typography component={'h1'} sx={{ marginBottom: 2, fontWeight: "bold" }}>Användningsområden</Typography>
                <Typography component={'p'} sx={{ marginBottom: 2 }}>
                    Projektet är särskilt lämpat för kontorsmiljöer, konferenser och mässor där personalstatus och tillgänglighet behöver synas tydligt.
                    Tack vare sin trådlösa uppkoppling och modulära design kan systemet enkelt integreras i större nätverk eller IoT-lösningar.
                </Typography>

                <Typography component={'h1'} sx={{ marginBottom: 2, fontWeight: "bold" }}>Utveckling</Typography>
                <Typography component={'p'} sx={{ marginBottom: 2 }}>
                    Projektet har utvecklats iterativt med fokus på enkel användning, driftsäkerhet och låg effektförbrukning.
                    Nästa steg i utvecklingen innefattar integration med Microsoft Graph API för automatisk hämtning av Teams-status,
                    samt förbättrad energihantering vid trådlös uppdatering.
                </Typography>

                <Typography component={'h1'} sx={{ marginBottom: 2, fontWeight: "bold" }}>Bilder</Typography>
                <img src={Namnskylt1} style={{ width: "33%" }}></img>
                <img src={Namnskylt2} style={{ width: "33%" }}></img>
                <img src={Namnskylt3} style={{ width: "33%" }}></img>
            </>
        )
    }

    return (
        <>
            {Description()}
        </>
    );
}