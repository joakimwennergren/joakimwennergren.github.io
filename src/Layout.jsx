import {
  Typography,
  CssBaseline,
  Grid,
  Box
} from '@mui/material';
import { Outlet } from "react-router";
import useMediaQuery from '@mui/material/useMediaQuery';
import Idea from "./static/idea.png";
import Music from "./static/musical-notes.png";
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Email from '@mui/icons-material/Email';

export default function Layout() {

  const isMobile = useMediaQuery('(max-width: 800px)');

  const Header = () => {
    return (
      <div class="bg-gray-50 py-12 sm:py-16">
        <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-center text-base/7 font-semibold text-blue-400">Systemutvecklare</h2>
          <p class="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
            Joakim Wennergren
          </p>

          <div class="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-3 items-stretch min-h-[24rem]">

            <div class="relative flex flex-col h-full">
              <div class="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl"></div>
              <div class="relative flex flex-col h-full overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div class="px-8 pt-6 pb-3 sm:px-10 sm:pt-8 sm:pb-0">
                  <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Projekt</p>
                  <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Jag är en passionerad systemutvecklare från Sverige med ett stort intresse för både mjukvara och hårdvara.
                  </p>
                </div>
                <div class="@container relative flex-grow  w-full max-lg:mx-auto max-lg:max-w-sm flex items-end justify-center mb-10">
                  <img class="w-40" src={Idea} alt="Ideas" />
                </div>
              </div>
              <div class="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl"></div>
            </div>

            <div class="relative flex flex-col h-full">
              <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl"></div>
              <div class="relative flex flex-col h-full overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div class="px-8 pt-6 sm:px-10 sm:pt-8">
                  <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Musik</p>
                  <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Renoise är mitt främsta verktyg när jag gör chiptunes och annan spelmusik.
                  </p>
                </div>
                <div class="@container relative flex-grow  w-full max-lg:mx-auto max-lg:max-w-sm flex items-end justify-center mb-10">
                  <img class="w-40" src={Music} alt="Ideas" />
                </div>
              </div>
              <div class="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl"></div>
            </div>

            <div class="relative flex flex-col h-full">
              <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
              <div class="relative flex flex-col h-full overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div class="px-8 pt-6 pb-3 sm:px-10 sm:pt-8 sm:pb-0">
                  <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Teknik och systemutveckling</p>
                  <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Teknik har alltid varit en kreativ drivkraft för mig. Jag gillar att förstå hur saker fungerar på djupet - att skriva effektiv kod, lösa problem nära hårdvaran, och samtidigt skapa verktyg som verkligen gör nytta.
                  </p>
                  <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    För mig är systemutveckling mer än ett yrke - det är ett sätt att tänka, lära och uttrycka sig.
                  </p>
                </div>
              </div>
              <div class="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
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
      <Box sx={{ fontSize: 14, textAlign: 'center', padding: 2, borderTop: isMobile ? '1px solid #ccc' : "none", backgroundColor: '#f5f5f5', display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        Copyright &copy; {CurrentYear()} Joakim Wennergren
        <Box sx={{ flexDirection: "row", display: "flex", justifyContent: "end", marginLeft: 3 }}>
          <a href="https://www.linkedin.com/in/joakim-wennergren/" style={{ color: "#c951a7", textDecoration: "none" }}><Box sx={{ padding: 1, width: 24, height: 24, display: "flex", justifyContent: "center", alignItems: "center", marginRight: 2 }}><LinkedIn size={16} /></Box></a>
          <a href="https://github.com/joakimwennergren" style={{ color: "#c951a7", textDecoration: "none" }}><Box sx={{ padding: 1, width: 24, height: 24, display: "flex", justifyContent: "center", alignItems: "center", marginRight: 2 }}><GitHub size={16} /></Box></a>
          <a href="mailto:mail@joakimwennergren.se" style={{ color: "#c951a7", textDecoration: "none" }}><Box sx={{ padding: 1, width: 24, height: 24, display: "flex", justifyContent: "center", alignItems: "center", }}><Email size={16} /></Box></a>
        </Box>
      </Box>
    )
  }

  return (
    <>
      <CssBaseline />
      {Header()}
      <Outlet />
      {Footer()}
    </>
  );
}