import React, { useState } from "react";
import { loadCaptchaEnginge, validateCaptcha, LoadCanvasTemplateNoReload } from "react-simple-captcha";
import API_BASE from "../data/api";

const CommentForm = ({ slug }) => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [captcha, setCaptcha] = useState("");
    const [message, setMessage] = useState("");

    async function postProjectComment(projectSlug, name, content) {
        try {
            const res = await fetch(`${API_BASE}/projects/${projectSlug}/comments`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, content })
            });

            if (!res.ok) {
                const text = await res.text();
                throw new Error(`Failed to post comment: ${text}`);
            }

            return await res.json(); // return the newly added comment
        } catch (err) {
            console.error('Error posting comment:', err);
            throw err;
        }
    }

    // Load captcha on mount
    React.useEffect(() => {
        loadCaptchaEnginge(6); // generates a 6-character captcha
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent page reload

        if (!validateCaptcha(captcha)) {
            setMessage("❌ Fel captcha. Försök igen!");
            return;
        }

        if (comment.length < 10) {
            setMessage("❌ Kommentaren måste vara minst 10 tecken lång.");
            return;
        }

        if (comment.length > 500) {
            setMessage("❌ Kommentaren får inte vara längre än 500 tecken.");
            return;
        }

        if (name.length > 100) {
            setMessage("❌ Namnet får inte vara längre än 100 tecken.");
            return;
        }

        // Here you can handle sending data to a backend, API, etc.
        console.log("Submitted:", { name, comment });

        try {
            console.log("Posting comment to project:", slug);
            const newComment = await postProjectComment(slug, name, comment);
        } catch (err) {
            setMessage('Någoting gick fel vid skickandet av kommentaren.');
        } finally {
            // Reset form
            setName("");
            setComment("");
            setCaptcha("");
            setMessage("✅ Tack! Din kommentar har skickats.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ditt namn..."
                className="border border-gray-300 rounded-md p-2 w-full"
            />

            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full p-3 h-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                placeholder="Skriv din kommentar..."
            />
            <small className="text-gray-500">(Max 500 tecken)</small>

            <LoadCanvasTemplateNoReload />

            <input
                type="text"
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
                placeholder="Ange captcha"
                className="border border-gray-300 rounded-md p-2 w-full"
            />

            <div className="flex justify-end">
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Skicka kommentar
                </button>
            </div>

            {message && <p className="text-sm mt-2">{message}</p>}
        </form>
    );
};

export default CommentForm;