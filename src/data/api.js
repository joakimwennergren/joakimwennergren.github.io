const API_BASE =
    process.env.NODE_ENV === "development"
        ? "http://localhost:4000" // your dev backend
        : "https://joakimwennergren.se/api"; // production backend

export default API_BASE;