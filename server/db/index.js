const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const usr = process.env.username;
const pw = process.env.password;
const url = `mongodb+srv://${usr}:${pw}@simple-board-cluster.tsykx.mongodb.net/`;
const collectionName = "portfolio";

module.exports = () => {
  mongoose
    .connect(`${url}${collectionName}`)
    .then(() => console.log(`now db connecting ${collectionName}....`))
    .catch((e) => console.log(e.message));
};
