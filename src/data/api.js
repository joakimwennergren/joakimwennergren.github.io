const API_BASE =
    process.env.NODE_ENV === "development"
        ? "http://localhost:4000" // your dev backend
        : "https://joakimwennergren.se/api/v1/"; // production backend

export default API_BASE;