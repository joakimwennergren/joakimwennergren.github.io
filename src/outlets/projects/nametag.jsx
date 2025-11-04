import Namnskylt1 from '../../static/projects/namnskylt_1.jpg';
import Namnskylt2 from '../../static/projects/namnskylt_2.jpg';
import Namnskylt3 from '../../static/projects/namnskylt_3.jpg';
import Namnskylt4 from '../../static/projects/namnskylt_4.jpg';

export default function Nametag() {

    const Description = () => {
        return (
            <>
                <div className="bg-white">
                    <div className="pt-6">
                        <nav aria-label="Breadcrumb">
                            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                                <li>
                                    <div className="flex items-center">
                                        <a href="#" className="mr-2 text-sm font-medium text-gray-900">Hem</a>
                                        <svg viewBox="0 0 16 20" width="16" height="20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                        </svg>
                                    </div>
                                </li>
                                <li className="text-sm">
                                    <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">Namnskylt</a>
                                </li>
                            </ol>
                        </nav>

                        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                            <img src={Namnskylt1} alt="Two each of gray, white, and black shirts laying flat." className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden" />
                            <img src={Namnskylt2} alt="Model wearing plain black basic tee." className="col-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden" />
                            <img src={Namnskylt3} alt="Model wearing plain gray basic tee." className="col-start-2 row-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden" />
                            <img src={Namnskylt4} alt="Model wearing plain white basic tee." className="row-span-2 aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-3/4" />
                        </div>

                        <div className="mx-auto max-w-2xl pt-5 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Namnskylt</h1>
                            </div>

                            <div className="py-2 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
                                <div className="prose">
                                    <p className="mb-4">
                                        E-Paper Namnskylt är ett modernt och energieffektivt hårdvaruprojekt som kombinerar trådlös kommunikation med lågströms e-pappersteknik.
                                        Syftet är att skapa en dynamisk, uppkopplad namnskylt som automatiskt visar aktuell information såsom namn, chef, sektion och tid –
                                        och i framtiden även status från Microsoft Teams.
                                    </p>

                                    <h1 className="mb-3 font-bold text-2xl">Teknik</h1>
                                    <p className="mb-4">
                                        Systemet baseras på en <b>ESP32-C3</b> med integrerat Wi-Fi och Bluetooth Low Energy, vilket möjliggör enkel uppkoppling och datauppdatering.
                                        Den energieffektiva <b>e-paper-displayen</b> ger hög kontrast och utmärkt läsbarhet även i starkt ljus, samtidigt som den behåller innehållet utan strömförbrukning.
                                    </p>

                                    <h1 className="mb-3 font-bold text-2xl">Funktionalitet</h1>
                                    <ul className="list-disc list-inside mb-4 space-y-2">
                                        <li><b>Dynamisk informationsvisning</b> – Visar namn, närmaste chef, sektion och aktuell tid.</li>
                                        <li><b>Trådlös uppdatering</b> – Wi-Fi och BLE används för att hämta och synkronisera data.</li>
                                        <li><b>Teams-integration (planerad)</b> – Visar användarens tillgänglighetsstatus direkt på displayen.</li>
                                        <li><b>Låg strömförbrukning</b> – E-paper-tekniken kräver endast energi vid uppdatering, vilket ger lång batteritid.</li>
                                    </ul>

                                    <h1 className="mb-3 font-bold text-2xl">Användningsområden</h1>
                                    <p className="mb-4">
                                        Projektet är särskilt lämpat för kontorsmiljöer, konferenser och mässor där personalstatus och tillgänglighet behöver synas tydligt.
                                        Tack vare sin trådlösa uppkoppling och modulära design kan systemet enkelt integreras i större nätverk eller IoT-lösningar.
                                    </p>

                                    <h1 className="mb-3 font-bold text-2xl">Utveckling</h1>
                                    <p className="mb-4">
                                        Projektet har utvecklats iterativt med fokus på enkel användning, driftsäkerhet och låg effektförbrukning.
                                        Nästa steg i utvecklingen innefattar integration med Microsoft Graph API för automatisk hämtning av Teams-status,
                                        samt förbättrad energihantering vid trådlös uppdatering.
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