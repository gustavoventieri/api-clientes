require("dotenv").config();
const express = require("express");
const app = express();
const connectToDB = require("./config/database/connect");
const port = process.env.PORT;
connectToDB();
app.listen(port, console.log(`servidor online e rodando na porta ${port}`));
