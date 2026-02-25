const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    const currentTime = new Date().toISOString();
    res.send("Sushana Uthayachandran WEB322 " + currentTime);
});

app.listen(PORT, () => {
    console.log("Server running at http://localhost:" + PORT);
});
