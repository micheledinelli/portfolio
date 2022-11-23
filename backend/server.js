require('dotenv').config();
const PORT = process.env.PORT;
const connection = require('./db.js');
const express = require("express");
const app = express();

// Cors
const cors = require("cors");
app.use(cors());

// Routes
const userRoutes = require('./routes/userRoutes');
const likeRoutes = require('./routes/likeRoutes');

connection();

app.use("/api/v1/author", userRoutes);
app.use("/api/v1/likes", likeRoutes);

app.get("/", (request, response) => {
    response.send("Hi there");
});

app.listen(PORT, () => {
    console.log(`Listen on the port ${PORT}`);
});