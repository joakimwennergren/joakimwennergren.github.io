import Snusdosa from "../static/projects/snusdosa.jpg";
import EntropyOld from "../static/projects/entropy_old.png";
import SmartDisplay from "../static/projects/smart_display_painting.jpeg";
import Phone from "../static/projects/phonepcb.jpeg";
import LedMatrix from "../static/projects/ledmatrix.jpg";
import UvBox from "../static/projects/uvbox.jpeg";
import Namnskylt from "../static/projects/namnskylt.png";

const projects = [
    {
        title: "Namnskylt",
        description: "En namnskylt med e-paper display och wifi/bluetooth som visar användarens namn, närmsta chef och sektion.",
        image: Namnskylt,
        link: "namnskylt",
    },
    {
        title: "Smart snusdosa",
        description: "En smart snusdosa som låser sig i intervall där användaren får ta en snus 1 gång varje timme. Blåtanduppkopplad till en mobilapp.",
        image: Snusdosa,
        link: "smart-snusdosa",
    },
    {
        title: "Entropy spelmotor",
        description: "Spelmotorn är ett långsiktigt utvecklingsprojekt som kombinerar hög prestanda, plattformsoberoende och ett modernt komponentbaserat arkitekturtänk.",
        image: EntropyOld,
        offset: -10,
        link: "entropy-gameengine",
    },
    {
        title: "UV exponeringsenhet",
        description: "En låda med UV-lysrör som används för att exponera kretskort.",
        image: UvBox,
        offset: -10,
        link: "uv-exponeringsenhet",
    },
    {
        title: "Telefon",
        description: "En ombyggd telefon. med ett 2G modem och en atmel MCU. Kan ta emot och ringa samtal.",
        image: Phone,
        link: "phone",
    },
    {
        title: "Smart display",
        description: "En skärm med ram som visar väder och tid",
        image: SmartDisplay,
        link: "smart-display",
    },
    {
        title: "LED matris",
        description: "Enkel led matris",
        image: LedMatrix,
        link: "led-matris",
    },
]

export default projects;