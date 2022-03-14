const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

const { userRouter } = require("./server/routers/userRouter");

const app = express();

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// application/json
app.use(bodyParser.json());

// .env 환경 변수 사용하기
dotenv.config();
// cors 사용: 자세히 알아보기
app.use(cors());

// > Routing
app.get("/", (req, res) => {
  res.send("backend root page");
});

app.use(userRouter);

// > open port
const port = 5000;
app.listen(port, () => console.log(`${port} is running... `));
