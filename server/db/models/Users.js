const { UserModel } = require("../schemas/User");

class User {
  static async create({ newUser }) {
    console.log("models create.....");
    const createNewUser = await UserModel.create(newUser);
    return createNewUser;
  }
}

module.exports = { User };
