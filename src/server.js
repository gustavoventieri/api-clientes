require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const connectToDB = require("./config/database/connect");
const clientRoutes = require("./routes/clientRoutes");

connectToDB();
app.use(express.json());

app.use(clientRoutes.selectAllClients);
app.use(clientRoutes.insertClient);
app.use(clientRoutes.selectClientByID);
app.listen(port, console.log(`servidor online e rodando na porta ${port}`));
