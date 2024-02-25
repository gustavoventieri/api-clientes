const clientModel = require("../model/clientModel");

class ClientControllers {
  // This function selects all clients
  async selectAll(req, res) {
    try {
      const clientData = await clientModel.find();
      console.log(clientData);
      if (clientData !== null) {
        res.status(200).json(clientData);
      } else {
        res.status(500).json("Don´t exist clients informations");
      }
    } catch (error) {
      res.status(500).json(`Error: ${error}`);
    }
  }
  // This function selects one client by ID
  async selectByID(req, res) {
    try {
      const id = req.params.id;
      const clientData = await clientModel.findById(id);
      console.log(clientData);
      if (clientData !== null) {
        res.status(200).json(clientData);
      } else {
        res.status(500).json("Don´t exist this client");
      }
    } catch (error) {
      res.status(500).json(`Error: ${error}`);
    }
  }

  // This function creates one or more clients
  async insert(req, res) {
    try {
      const clientData = await clientModel.create(req.body);
      res.status(200).json(clientData);
    } catch (error) {
      res.status(500).json(`Error: ${error}`);
    }
  }
}

module.exports = ClientControllers;
