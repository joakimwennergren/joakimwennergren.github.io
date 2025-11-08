import { useEffect, useState } from "react";
import { useParams } from "react-router";
import API_BASE from "../data/api.js";
import Tune from "../components/tune.jsx";

export default function Tunes() {

    let { tuneSlug } = useParams();
    const [tune, setTune] = useState(null);

    async function fetchtune() {
        try {
            const res = await fetch(`${API_BASE}/music/${tuneSlug}`);
            return await res.json();
        } catch (err) {
            console.error('Error fetching tune:', err);
        }
    }

    useEffect(() => {
        console.log("Fetching tune with slug:", tuneSlug);
        const loadData = async () => {
            const fetchedtune = await fetchtune();
            setTune(fetchedtune);
        };

        loadData();
    }, [tuneSlug]);

    return (
        <>
            {tune ? <Tune tune={tune} /> : <p>Låten finns inte..</p>}
        </>
    );
}