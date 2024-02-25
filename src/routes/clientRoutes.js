const routes = require("express").Router();
const ClientControllers = require("../controller/clientControllers");
const clientControllers = new ClientControllers();

// This route select all the clientes
const selectAllClients = routes.get(
  "/clients/selectall",
  clientControllers.selectAll
);

// This route select one client by ID
const selectClientByID = routes.get(
  "/clients/selectbyid/:id",
  clientControllers.selectByID
);

// This route creates one or more clients
const insertClient = routes.post("/clients/insert", clientControllers.insert);

const updateClient = routes.patch(
  "/clients/update/:id",
  clientControllers.update
);

// This route deletes one client by ID
const deleteClient = routes.delete(
  "/clients/delete/:id",
  clientControllers.delete
);

module.exports = {
  selectAllClients,
  insertClient,
  selectClientByID,
  updateClient,
  deleteClient,
};
