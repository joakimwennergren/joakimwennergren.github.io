import { Typography, Box, Paper, Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery'
import Svampjakt from '../../static/projects/svampjakt.jpg';
import EntropyOld from "../../static/projects/entropy_old.png";


export default function Entropy() {

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
                                    <a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">Entropy spelmotor</a>
                                </li>
                            </ol>
                        </nav>

                        <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                            <div alt="Two each of gray, white, and black shirts laying flat." class="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden bg-black" />
                            <img src={EntropyOld} alt="Model wearing plain black basic tee." class="col-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden" />
                            <img src={Svampjakt} class="col-start-2 row-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden" />
                            <div class="row-span-2 aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-3/4 bg-black" />
                        </div>

                        <div class="mx-auto max-w-2xl pt-5 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                            <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Entropy spelmotor</h1>
                            </div>

                            <div class="py-2 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
                                <div className="prose">
                                    <p className="mb-4">
                                        Spelmotorn är ett långsiktigt utvecklingsprojekt som kombinerar hög prestanda, plattformsoberoende och ett modernt komponentbaserat arkitekturtänk.
                                        Motorn är utformad för att ge utvecklare full kontroll över rendering, logik och resurshantering, samtidigt som den är flexibel och scriptbar.
                                    </p>

                                    <h1 className="mb-3 font-bold text-2xl">Teknik</h1>
                                    <p className="mb-4">
                                        Motorn är byggd från grunden i C++/C och använder sig av Vulkan API för avancerad och effektiv rendering.
                                        Den är designad för låg nivå och maximal kontroll, samtidigt som den erbjuder moderna ramverk för struktur och utbyggbarhet.
                                    </p>

                                    <h1 className="mb-3 font-bold text-2xl">Funktionalitet</h1>
                                    <ul className="list-disc list-inside mb-4 space-y-2">
                                        <li><b>Vulkan API</b> – Ger tillgång till låg-nivå GPU-funktioner för hög prestanda och kontroll.</li>
                                        <li><b>C++/C</b> – Motorn är skriven i C++ och C för effektiv minneshantering och maximal portabilitet.</li>
                                        <li><b>Scriptbar med C#</b> – Genom en inbyggd C#-runtime kan spelspecifik logik skrivas separat från motorkoden.</li>
                                        <li><b>Flecs ECS</b> – Ett kraftfullt Entity Component System används för flexibel och modulär spelarkitektur.</li>
                                    </ul>

                                    <h1 className="mb-3 font-bold text-2xl">Plattformar</h1>
                                    <p className="mb-4">
                                        Motorn är utvecklad med multiplattformsstöd i åtanke och fungerar på följande operativsystem:
                                    </p>
                                    <ul className="list-disc list-inside mb-4 space-y-1">
                                        <li>Windows</li>
                                        <li>macOS</li>
                                        <li>Linux</li>
                                        <li>iOS</li>
                                        <li>Android</li>
                                    </ul>

                                    <h1 className="mb-3 font-bold text-2xl">Utveckling</h1>
                                    <p className="mb-4">
                                        Projektet har utvecklats under 2–3 års tid och är resultatet av ett långsiktigt engagemang för att bygga en stabil, kraftfull och skalbar spelmotor från grunden.
                                        Fokus har legat på kontroll, prestanda och modern arkitektur.
                                    </p>
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