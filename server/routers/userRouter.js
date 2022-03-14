const express = require("express");
const userRouter = express.Router();

const { userAuthService } = require("../services/userService");

userRouter.post("/api/users/register", async (req, res) => {
  console.log("userRouter.....");
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = await userAuthService.addUser({
      name,
      email,
      password,
    });
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = { userRouter };
