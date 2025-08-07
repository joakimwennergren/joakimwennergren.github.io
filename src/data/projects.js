import Snusdosa from "../static/projects/snusdosa.jpg";
import EntropyOld from "../static/projects/entropy_old.png";
import SmartDisplay from "../static/projects/smart_display_painting.jpeg";
import Phone from "../static/projects/phonepcb.jpeg";
import LedMatrix from "../static/projects/ledmatrix.jpg";
import UvBox from "../static/projects/uvbox.jpeg";

const projects = [
    {
        title: "Smart snusdosa",
        description: "En smart snusdosa som låser sig i intervall där användaren får ta en snus 1 gång varje timme. Blåtanduppkopplad till en mobilapp.",
        image: Snusdosa,
        link: "projects/smart-snusdosa",
    },
    {
        title: "Entropy spelmotor",
        description: "Spelmotorn är ett långsiktigt utvecklingsprojekt som kombinerar hög prestanda, plattformsoberoende och ett modernt komponentbaserat arkitekturtänk.",
        image: EntropyOld,
        offset: -10,
        link: "projects/entropy-gameengine",
    },
    {
        title: "Uv exponeringsenhet",
        description: "En låda med UV-lysrör som används för att exponera kretskort.",
        image: UvBox,
        offset: -10,
        link: "projects/entropy-gameengine",
    },
    {
        title: "Telefon",
        description: "En ombyggd telefon. med ett 2G modem och en atmel MCU. Kan ta emot och ringa samtal.",
        image: Phone,
        link: "projects/phone",
    },
    {
        title: "Smart display",
        description: "En skärm med ram som visar väder och tid",
        image: SmartDisplay,
        link: "projects/smart-display",
    },
    {
        title: "LED matris",
        description: "Enkel led matris",
        image: LedMatrix,
        link: "projects/led-matris",
    },
]

export default projects;