const mongosse = require("mongoose");

const clientSchema = new mongosse.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date_created: {
    type: Date,
    required: true,
  },
});

const clientModel = new mongosse.model("Clientes", clientSchema);
module.exports = clientModel;
