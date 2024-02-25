const routes = require("express").Router();
const ClientControllers = require("../controller/clientControllers");
const clientControllers = new ClientControllers();

const selectAllClients = routes.get(
  "/clients/selectall",
  clientControllers.selectAll
);
const selectClientByID = routes.get(
  "clients/selectbyid/:id",
  clientControllers.selectByID
);
const insertClient = routes.post("/clients/insert", clientControllers.insert);

module.exports = {
  selectAllClients,
  insertClient,
  selectClientByID,
};
