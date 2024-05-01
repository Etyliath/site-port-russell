const mongoose = require("mongoose");

const clientOptions = {
  dbname: "api-port-russell"
};

exports.initClienDbConnection = async () => {
  try {
    /*
        On essai de connecter la base mongodb avec la variable d'enviremment URL_MONGO
        */
    await mongoose.connect(process.env.URL_MONGO, clientOptions);
    console.log("connected db");
  } catch (error) {
    console.log(error);
    throw error;
  }
};
