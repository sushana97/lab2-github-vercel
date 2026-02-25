const express = require("express");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    const now = new Date().toISOString();
    res.send(`Sushana Uthayachandran WEB322 ${now}`);
});

// Example GET Route
app.get("/about", (req, res) => {
    res.send("This is my GitHub + Vercel Lab 2 deployment.");
});

// Handle 404
app.use((req, res) => {
    res.status(404).send("Page Not Found");
});

// IMPORTANT for Vercel
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
