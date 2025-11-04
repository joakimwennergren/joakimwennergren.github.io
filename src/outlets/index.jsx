import { useState } from 'react';
import { Typography, Grid, Box, Pagination } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery'
import tunes from '../data/tunes';
import projects from '../data/projects';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Index() {

    const isMobile = useMediaQuery('(max-width: 900px)');

    // State for paginating projects
    const [currentProjectPage, setCurrentProjectPage] = useState(1);
    const totalPages = Math.ceil(projects.length / 2);
    const currentItems = projects.slice(
        (currentProjectPage - 1) * 2,
        currentProjectPage * 2
    );

    const handleChange = (event, value) => {
        setCurrentProjectPage(value);
    };

    // State for paginating music
    const [currentMusicPage, setCurrentMusicPage] = useState(1);
    const totalMusicPages = Math.ceil(tunes.length / 6);
    const currentMusicItems = tunes.slice(
        (currentMusicPage - 1) * 6,
        currentMusicPage * 6
    );

    const handleMusicChange = (event, value) => {
        setCurrentMusicPage(value);
    };

    const ProjectsAndMusic = () => {

        const ProjectsContent = () => {
            return (
                <>
                    {currentItems.map((item, index) => (
                        <div class="relative flex flex-col  xl:max-w-xl  md:max-w-2xl md:mx-auto mb-4">
                            <div class="absolute inset-px  bg-white "></div>
                            <div class="relative flex flex-col h-full overflow-hidden">
                                <div class="px-8 pt-6 pb-3 sm:px-10 sm:pt-8 sm:pb-0">
                                    <a href={"#/projects/" + item.link} class="text-blue-500"><p class="mt-2 text-lg font-medium tracking-tight  max-lg:text-center">{item.title}</p></a>
                                    <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        {item.description}
                                    </p>
                                </div>
                                <div class="@container relative flex-grow w-full max-lg:mx-auto max-lg:max-w-sm flex items-center justify-center mb-10 pt-6 p-10">
                                    <img class="w-auto" src={item.image} alt="Ideas" />
                                </div>
                            </div>
                            <div class="pointer-events-none absolute inset-px shadow-sm outline rounded-xl outline-black/5 "></div>
                        </div>
                    ))}
                    <div class="mx-auto md:max-w-2xl">
                        <Pagination count={totalPages} page={currentProjectPage} onChange={handleChange} sx={{ marginBottom: 2 }} />
                    </div>
                </>
            )
        }

        const MusicContents = () => {
            return (
                <>
                    {currentMusicItems.map((item, index) => (
                        <div class="relative flex flex-col  xl:max-w-xl  md:max-w-2xl md:mx-auto mb-4">
                            <div class="absolute inset-px  bg-white "></div>
                            <div class="relative flex flex-col h-full overflow-hidden">
                                <div class="px-5 pt-5 pb-5">
                                    <a href={"#/tunes/" + item.title} class="text-red-500"><p class="text-md font-medium tracking-tight">{item.title}</p></a>
                                </div>
                                <AudioPlayer showJumpControls={false} src={"https://joakimwennergren.se/" + item.title.replace(/\s+/g, '').toLowerCase() + ".wav"} />
                            </div>
                            <div class="pointer-events-none absolute inset-px shadow-sm outline rounded-xl outline-black/5 "></div>
                        </div>
                    ))
                    }
                    <div class="mx-auto md:max-w-2xl">
                        <Pagination count={totalMusicPages} page={currentMusicPage} onChange={handleMusicChange} sx={{ marginBottom: 2 }} />
                    </div>

                </>
            )
        }
        if (isMobile) {
            return (
                <>
                    <Box sx={{ padding: 2 }}>
                        {ProjectsContent()}
                    </Box >
                    <Box sx={{ padding: 2, }}>
                        {MusicContents()}
                    </Box >
                </>
            )
        } else {
            return (
                <Box className="mx-auto xl:max-w-7xl  md:max-w-7xl pt-10 sm:px-7 flex flex-col lg:flex-row gap-10">
                    {/* Left column */}
                    <Box className="flex-1">
                        {ProjectsContent()}
                    </Box>

                    {/* Right column */}
                    <Box className="flex-1">
                        {MusicContents()}
                    </Box>
                </Box>
            )
        }
    }

    return (
        <>
            {ProjectsAndMusic()}
        </>
    );
}