const mongosse = require("mongoose");

// Client Model
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
});

const clientModel = new mongosse.model("Client", clientSchema);
module.exports = clientModel;
