const mongoose = require("mongoose");
const keys = require("../keys");

// this function connects to the database
const connectToDB = async () => {
  try {
    await mongoose.connect(keys.database.url());
    console.log(`Conexão realizada com suceso!!`);
  } catch (err) {
    console.log(`Conexão não realizada. Erro: ${err}`);
  }
};

module.exports = connectToDB;
