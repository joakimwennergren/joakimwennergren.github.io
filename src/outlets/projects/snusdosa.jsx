import { Typography, Box, Paper, Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery'
import Snusdosan1 from '../../static/projects/snusdosan1.jpeg';
import Snusdosan2 from '../../static/projects/snusdosan2.jpeg';
import Snusdosan3 from '../../static/projects/snusdosan3.jpeg';


export default function SnusDosa() {

    const isMobile = useMediaQuery('(max-width: 600px)');

    const Description = () => {
        return (
            <>
                <div class="bg-white">
                    <div class="pt-6">
                        <nav aria-label="Breadcrumb">
                            <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                                <li>
                                    <div class="flex items-center">
                                        <a href="#" class="mr-2 text-sm font-medium text-gray-900">Hem</a>
                                        <svg viewBox="0 0 16 20" width="16" height="20" fill="currentColor" aria-hidden="true" class="h-5 w-4 text-gray-300">
                                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex items-center">
                                        <a href="#" class="mr-2 text-sm font-medium text-gray-900">Projekt</a>
                                        <svg viewBox="0 0 16 20" width="16" height="20" fill="currentColor" aria-hidden="true" class="h-5 w-4 text-gray-300">
                                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                        </svg>
                                    </div>
                                </li>

                                <li class="text-sm">
                                    <a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">Smart snusdosa</a>
                                </li>
                            </ol>
                        </nav>

                        <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                            <img src={Snusdosan1} alt="Two each of gray, white, and black shirts laying flat." class="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden" />
                            <img src={Snusdosan2} alt="Model wearing plain black basic tee." class="col-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden" />
                            <img src={Snusdosan2} alt="Model wearing plain gray basic tee." class="col-start-2 row-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden" />
                            <img src={Snusdosan3} alt="Model wearing plain white basic tee." class="row-span-2 aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-3/4" />
                        </div>

                        <div class="mx-auto max-w-2xl pt-5 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                            <div class="lg:col-span-2 lg:border-r lg:border-gray-200 ">
                                <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Smart Snusdosa</h1>
                            </div>

                            <div class="py-2 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
                                <div className="prose">
                                    <p className="mb-4">
                                        Den smarta snusdosan är en teknikdriven produkt framtagen för att hjälpa användare att kontrollera sitt snusintag över tid.
                                        Genom att kombinera mekanik och trådlös kommunikation erbjuder dosan ett enkelt men kraftfullt sätt att reglera vanor och skapa medvetenhet kring konsumtionen.
                                    </p>

                                    <h1 className="mb-3 font-bold text-2xl">Funktionalitet</h1>
                                    <p className="mb-4">
                                        Snusdosan fungerar genom att automatiskt låsa sig efter att locket stängts. Den hålls låst under ett förinställt tidsintervall – till exempel 1 timme – och öppnas först när tiden har passerat. När locket åter stängs efter att en portion tagits, startar nästa nedräkning.
                                    </p>
                                    <p className="mb-4">
                                        Intervalltiden kan ställas in direkt via en mobilapp tack vare inbyggd Bluetooth-kommunikation. Detta ger användaren flexibilitet att anpassa dosan efter sina egna mål och behov.
                                    </p>

                                    <h1 className="mb-3 font-bold text-2xl">Hårdvara</h1>
                                    <p className="mb-4">Dosan innehåller ett specialdesignat kretskort med följande komponenter:</p>
                                    <ul className="list-disc list-inside mb-4 space-y-2">
                                        <li>Dialog DA14531 – En strömsnål Bluetooth 5.1 SoC för trådlös kommunikation med mobilen.</li>
                                        <li>Atmel XMEGA 16 MCU – Används för styrlogik och hantering av mekanik.</li>
                                        <li>Stegmotor – Driver låsmekanismen som öppnar och stänger dosan.</li>
                                        <li>Microbrytare – Detekterar om locket är öppet eller stängt.</li>
                                        <li>Vibrationsmotor – Ger haptisk feedback, exempelvis när dosan låses upp eller nedräkningen börjar.</li>
                                    </ul>

                                    <h1 className="mt-6 mb-3 font-bold text-2xl">Användningsområde</h1>
                                    <p className="mb-4">
                                        Produkten riktar sig till personer som vill trappa ned sitt snusande eller skapa mer struktur i sin konsumtion. Den smarta snusdosan kombinerar teknik med beteendeförändring för att ge användaren bättre kontroll över sina vanor.
                                    </p>

                                    <h1 className="mb-3 font-bold text-2xl">Framtidsplaner</h1>
                                    <p className="mb-4">
                                        För att förbättra både användarupplevelsen och produktens tillförlitlighet planeras flera uppgraderingar av den smarta snusdosan:
                                    </p>
                                    <ul className="list-disc list-inside mb-4 space-y-2">
                                        <li>
                                            <b>Hall-effektsensor istället för mikrobrytare</b> – För att detektera om locket är öppet eller stängt planeras en övergång från mekanisk mikrobrytare till en kontaktlös hall-effektsensor. Detta minskar slitage och ökar livslängden.
                                        </li>
                                        <li>
                                            <b>Byte av Bluetooth SoC</b> – En mer kraftfull och integrerad Bluetooth-lösning utvärderas för att ge förbättrad räckvidd, stabilare uppkoppling och bättre energieffektivitet.
                                        </li>
                                        <li>
                                            <b>Integrerad lösning utan separat MCU</b> – Genom att ersätta den separata Atmel XMEGA 16 med ett mer kapabelt SoC planeras en förenklad elektronikdesign. Detta minskar komponentkostnad, komplexitet och strömförbrukning.
                                        </li>
                                        <li>
                                            <b>Förbättrad mekanisk konstruktion</b> – Den fysiska utformningen av dosan ses över för att skapa en mer robust och tillverkningsvänlig konstruktion med förbättrad känsla i låsmekanismen.
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )

    }

    return (
        <>
            {Description()}
        </>
    );
}