import { useEffect, useState } from "react";
import { useParams } from "react-router";
import API_BASE from "../data/api.js";
import Project from "../components/project.jsx";

export default function Projects() {

    let { projectSlug } = useParams();
    const [project, setProject] = useState(null);

    async function fetchProject() {
        try {
            const res = await fetch(`${API_BASE}/projects/${projectSlug}`);
            return await res.json();
        } catch (err) {
            console.error('Error fetching project:', err);
        }
    }

    useEffect(() => {
        console.log("Fetching project with slug:", projectSlug);
        const loadData = async () => {
            const fetchedProject = await fetchProject();
            setProject(fetchedProject);
        };

        loadData();
    }, [projectSlug]);

    return (
        <>
            <Project project={project ?? {}} />
        </>
    );
}