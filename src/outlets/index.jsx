import { useState, useEffect } from 'react';
import API_BASE from '../data/api';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/minimal-light-dark.css';

export default function Index() {

    // Get all projects
    async function fetchProjects() {
        try {
            const res = await fetch(`${API_BASE}/projects`);
            return await res.json();
        } catch (err) {
            console.error('Error fetching projects:', err);
        }
    }

    // Get all music
    async function fetchMusic() {
        try {
            const res = await fetch(`${API_BASE}/music`);
            return await res.json();
        } catch (err) {
            console.error('Error fetching music:', err);
        }
    }

    useEffect(() => {
        const loadData = async () => {
            const fetchedProjects = await fetchProjects();
            setProjects(fetchedProjects);

            const fetchedTunes = await fetchMusic();
            setTunes(fetchedTunes);
        };

        loadData();
        console.log("loadnig data..");
    }, []);

    // State for paginating projects
    const [projects, setProjects] = useState([]);
    const [currentProjectPage, setCurrentProjectPage] = useState(1);
    const itemsPerPage = 2;

    const totalPages = Math.ceil(projects.length / itemsPerPage);
    const currentItems = projects.slice(
        (currentProjectPage - 1) * itemsPerPage,
        currentProjectPage * itemsPerPage
    );

    const SetCurrentProjectPage = (value) => {
        setCurrentProjectPage(value);
    };

    // State for paginating music
    const [tunes, setTunes] = useState([]);
    const [currentMusicPage, setCurrentMusicPage] = useState(1);
    const itemsPerPageMusic = 6; // show 6 tunes per page

    const totalMusicPages = Math.ceil(tunes.length / itemsPerPageMusic);
    const currentMusicItems = tunes.slice(
        (currentMusicPage - 1) * itemsPerPageMusic,
        currentMusicPage * itemsPerPageMusic
    );

    const handleMusicChange = (value) => {
        setCurrentMusicPage(value);
        console.log("chaing page = ", value)
    };

    const ProjectsAndMusic = () => {

        const ProjectsContent = () => {
            return (
                <>
                    {currentItems.map((item, index) => (
                        <div className="relative flex flex-col  xl:max-w-xl  md:max-w-2xl md:mx-auto mb-4" key={`project-${index}`}>
                            <div className="absolute inset-px  bg-white "></div>
                            <div className="relative flex flex-col h-full overflow-hidden">
                                <div className="px-8 pt-6 pb-3 sm:px-10 sm:pt-8 sm:pb-0">
                                    <a href={`#/projects/${item.slug}`} className="text-blue-500"><p className="mt-2 text-lg font-medium tracking-tight  max-lg:text-center">{item.title}</p></a>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="@container relative flex-grow w-full max-lg:mx-auto max-lg:max-w-sm flex items-center justify-center mb-10 pt-6 p-10">
                                    <img className="w-auto" src={`/images/${item.front_image}`} alt="Ideas" />
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px shadow-sm outline rounded-xl outline-black/5 "></div>
                        </div>
                    ))}
                    <div className="mx-auto md:max-w-2xl mb-4">
                        <ResponsivePagination
                            current={currentProjectPage}
                            total={totalPages}
                            onPageChange={SetCurrentProjectPage}
                        />
                    </div>
                </>
            )
        }

        const MusicContents = () => {
            return (
                <>
                    {currentMusicItems.map((item, index) => (
                        <div className="relative flex flex-col  xl:max-w-xl  md:max-w-2xl md:mx-auto mb-4" key={`tune-${index}`}>
                            <div className="absolute inset-px  bg-white "></div>
                            <div className="relative flex flex-col h-full overflow-hidden">
                                <div className="px-4 sm:px-4 sm:pt-4 sm:pb-0 mb-4">
                                    <a href={`#/tunes/${item.slug}`} className="text-blue-500"><p className="text-lg font-medium tracking-tight  max-lg:text-center">{item.title}</p></a>
                                </div>
                                <AudioPlayer showJumpControls={false} src={`/music/${item.song}`} />
                            </div>
                            <div className="pointer-events-none absolute inset-px shadow-sm outline rounded-xl outline-black/5 "></div>
                        </div>
                    ))}
                    <div className="mx-auto md:max-w-2xl mb-4">
                        <ResponsivePagination
                            current={currentMusicPage}
                            total={totalMusicPages}
                            onPageChange={handleMusicChange}
                        />
                    </div>
                </>
            )
        }

        return (
            <div className="mx-auto xl:max-w-7xl  md:max-w-7xl pt-10 sm:px-7 flex flex-col lg:flex-row gap-10 px-6">
                {/* Left column */}
                <div className="flex-1">
                    {ProjectsContent()}
                </div>

                {/* Right column */}
                <div className="flex-1">
                    {MusicContents()}
                </div>
            </div>
        )

    }

    return (
        <>
            {ProjectsAndMusic()}
        </>
    );
}