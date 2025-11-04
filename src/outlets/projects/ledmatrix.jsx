import LedMatrixBack from '../../static/projects/led_matrix_back.jpeg';
import LedMatrix2Done from '../../static/projects/led_matrix_2_done.jpeg';
import LedMatrix2Pcb from '../../static/projects/led_matrix_2_pcb.jpeg';

export default function LedMatrix() {

    const Description = () => {
        return (
            <>
                <Typography component={'h1'} sx={{ marginBottom: 2, fontWeight: "bold", fontSize: 32 }}>Led matris</Typography>
                <Typography component={'p'} sx={{ marginBottom: 2 }}>
                    LedMatrix är ett hårdvaruprojekt som kombinerar noggrant PCB-designarbete med effektiv LED-styrning för att skapa en högpresterande och programmerbar RGB-matrisdisplay. Projektet är utformat för att vara modulärt, energieffektivt och enkelt att integrera i både konstnärliga och tekniska tillämpningar.
                </Typography>

                <Typography component={'h1'} sx={{ marginBottom: 2, fontWeight: "bold" }}>Teknik</Typography>
                <Typography component={'p'} sx={{ marginBottom: 2 }}>
                    Systemet bygger på ett egenutvecklat PCB med en dedikerad drivare för att styra en array av RGB-lysdioder. Fokus ligger på låg strömförbrukning, exakt timing och hög ljusstyrka med minimal ghosting-effekt.
                </Typography>

                <Typography component={'h1'} sx={{ marginBottom: 2, fontWeight: "bold" }}>Funktionalitet</Typography>
                <ul>
                    <li><b>RGB LED-matris</b> – Flerfärgad LED-display med hög ljusstyrka och konfigurerbar upplösning.</li>
                    <li><b>Integrerad drivare</b> – Specialiserad styrkrets för att hantera multiplexering, färghantering och PWM-kontroll.</li>
                    <li><b>Effektiv energihantering</b> – Optimerad för användning med batteri eller lågspänningskällor.</li>
                </ul>

                <Typography component={'h1'} sx={{ marginBottom: 2, fontWeight: "bold" }}>Användningsområden</Typography>
                <Typography component={'p'} sx={{ marginBottom: 2 }}>
                    LedMatrix kan användas i allt från interaktiv konst och spel till IoT-enheter och statuspaneler. Projektets öppna design möjliggör enkel anpassning för olika projekt och formfaktorer.
                </Typography>

                <Typography component={'h1'} sx={{ marginBottom: 2, fontWeight: "bold" }}>Utveckling</Typography>
                <Typography component={'p'} sx={{ marginBottom: 2 }}>
                    Projektet har vuxit fram genom praktisk prototypning och iterativ utveckling. Fokus har legat på tillförlitlig hårdvara, enkel integrering och visuellt uttrycksfulla effekter.
                </Typography>

                <Typography component={'h1'} sx={{ marginBottom: 2, fontWeight: "bold" }}>Bilder</Typography>
                <img src={LedMatrixBack} style={{ width: "33%" }}></img>
                <img src={LedMatrix2Done} style={{ width: "33%" }}></img>
                <img src={LedMatrix2Pcb} style={{ width: "33%" }}></img>
            </>
        )
    }

    return (
        <>
            {Description()}
        </>
    );
}