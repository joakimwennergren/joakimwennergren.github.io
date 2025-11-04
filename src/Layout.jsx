import { Outlet } from "react-router";
import Layers from "./static/layers.png";
import WaveSound from "./static/wave-sound.png";
import { Github, Mail, Linkedin } from 'feather-icons-react';

export default function Layout() {

  const Header = () => {
    return (
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-blue-500">Systemutvecklare</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
            Joakim Wennergren
          </p>

          <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-3 items-stretch min-h-[24rem]">

            <div className="relative flex flex-col h-full">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl"></div>
              <div className="relative flex flex-col h-full overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-6 pb-3 sm:px-10 sm:pt-8 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Projekt</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Jag är en passionerad systemutvecklare från Sverige med ett stort intresse för både mjukvara och hårdvara.
                  </p>
                </div>
                <div className="@container relative flex-grow  w-full max-lg:mx-auto max-lg:max-w-sm flex items-end justify-center mb-10">
                  <img className="w-40" src={Layers} alt="Ideas" />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl"></div>
            </div>

            <div className="relative flex flex-col h-full">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl"></div>
              <div className="relative flex flex-col h-full overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-6 sm:px-10 sm:pt-8">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Musik</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Renoise är mitt främsta verktyg när jag gör chiptunes och annan spelmusik.
                  </p>
                </div>
                <div className="@container relative flex-grow  w-full max-lg:mx-auto max-lg:max-w-sm flex items-end justify-center mb-10">
                  <img className="w-40" src={WaveSound} alt="Ideas" />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl"></div>
            </div>

            <div className="relative flex flex-col h-full">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
              <div className="relative flex flex-col h-full overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-6 pb-3 sm:px-10 sm:pt-8 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Teknik och systemutveckling</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Teknik har alltid varit en kreativ drivkraft för mig. Jag gillar att förstå hur saker fungerar på djupet - att skriva effektiv kod, lösa problem nära hårdvaran, och samtidigt skapa verktyg som verkligen gör nytta.
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    För mig är systemutveckling mer än ett yrke - det är ett sätt att tänka, lära och uttrycka sig.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
            </div>
          </div>
        </div>
      </div>

    )
  }

  const Footer = () => {

    const CurrentYear = () => {
      return new Date().getFullYear();
    }

    return (
      <div className="text-sm text-center pt-6 bg-gray-100 flex flex-row justify-center items-center pb-6">
        Copyright &copy; {CurrentYear()} Joakim Wennergren
        <div className="flex flex-row justify-end ml-3">
          <a href="https://www.linkedin.com/in/joakim-wennergren/" className="text-blue-500 no-underline">
            <div className="p-1 w-6 h-6 flex justify-center items-center mr-2">
              <Linkedin />
            </div>
          </a>
          <a href="https://github.com/joakimwennergren" className="text-blue-500 no-underline">
            <div className="p-1 w-6 h-6 flex justify-center items-center mr-2">
              <Github />
            </div>
          </a>
          <a href="mailto:mail@joakimwennergren.se" className="text-blue-500 no-underline">
            <div className="p-1 w-6 h-6 flex justify-center items-center">
              <Mail />
            </div>
          </a>
        </div>
      </div>
    )
  }

  return (
    <>
      {Header()}
      <Outlet />
      {Footer()}
    </>
  );
}