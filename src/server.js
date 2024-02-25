require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const connectToDB = require("./config/database/connect");
const clientRoutes = require("./routes/clientRoutes");

connectToDB();
app.use(express.json());

// All Requests

// Selects
app.use(clientRoutes.selectAllClients);
app.use(clientRoutes.selectClientByID);

// Insert
app.use(clientRoutes.insertClient);

// Update
app.use(clientRoutes.updateClient);

// Delete
app.use(clientRoutes.deleteClient);

app.listen(port, console.log(`servidor online e rodando na porta ${port}`));
