const clientModel = require("../model/clientModel");

class ClientControllers {
  // This function selects all clients
  async selectAll(req, res) {
    try {
      const clientData = await clientModel.find();
      if (clientData !== null) {
        res.status(200).json(clientData);
      } else {
        res.status(404).json("Don't exist clients informations");
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
      if (clientData !== null) {
        res.status(200).json(clientData);
      } else {
        res.status(404).json("this client doens't exist");
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

  // This function updates one client by ID
  async update(req, res) {
    try {
      const id = req.params.id;
      const clientData = await clientModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(clientData);
    } catch (error) {
      res.status(500).json(`Error: ${error}`);
    }
  }

  // This function deletes one client by ID
  async delete(req, res) {
    try {
      const id = req.params.id;
      const clientData = await clientModel.findByIdAndDelete(id);
      res.status(200).json({
        resultado: "Exclusão realizada com sucesso",
      });
    } catch (error) {
      res.status(500).json(`Error: ${error}`);
    }
  }
}

module.exports = ClientControllers;
