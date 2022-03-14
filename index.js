const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const { userRouter } = require("./server/routers/userRouter");

const app = express();

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// application/json
app.use(bodyParser.json());

// .env 환경 변수 사용하기
dotenv.config();
app.use(cors());

// > Routing
app.get("/", (req, res) => {
  res.send("안녕하세요, 레이서 프로젝트 API 입니다.");
});

app.use(userRouter);

// ! db connect test
// mongoose
//   .connect(
//     `mongodb+srv://admin:1234@simple-board-cluster.tsykx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
//   )
//   .then(() => {
//     console.log("db connect");
//   })
//   .catch((e) => {
//     console.log(e.message);
//   });

// > open port
const port = 5000;
app.listen(port, () => console.log(`${port} is running... `));
