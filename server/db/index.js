const mongoose = require("mongoose");
const dotenv = require("dotenv");

const { User } = require("./models/Users");
const dbConfig = require("../config/db");

dotenv.config();

const usr = process.env.username || dbConfig.username;
const pw = process.env.password || dbConfig.password;

const collectionName = "portfolio";
const url = `mongodb+srv://${usr}:${pw}@simple-board-cluster.tsykx.mongodb.net/${collectionName}?retryWrites=true&w=majority`;

mongoose.connect(url);
const db = mongoose.connection;

db.on("connected", () => {
  console.log(
    `\n\n******************\n now db connecting ${collectionName}....\n******************\n\n`
  );
});

db.on("error", (error) =>
  console.error("MongoDB 연결에 실패하였습니다...\n" + url + "\n" + error)
);

module.exports = { User };
