import { useParams } from "react-router";
import { Typography, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Snusdosa from './projects/snusdosa';
import Entropy from './projects/entropy';
import LedMatrix from './projects/ledmatrix';
import Nametag from './projects/nametag';
import UVbox from "./projects/uvbox";
import projects from "../data/projects";


export default function Projects() {

    const projectComponents = {
        "smart-snusdosa": Snusdosa,
        "entropy-gameengine": Entropy,
        //"led-matris": LedMatrix,
        "namnskylt": Nametag,
        //"uv-exponeringsenhet": UVbox,
    };

    let { projectId } = useParams();
    const ProjectComponent = projectComponents[projectId];

    return (
        <>
            <div class="container mx-auto px-6 lg:px-0">
                {ProjectComponent ? (
                    <ProjectComponent />
                ) : (
                    <h1 class="p-10 text-center">Projektet finns inte</h1>
                )}
            </div>
        </>
    );
}