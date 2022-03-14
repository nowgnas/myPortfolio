const uuid = require("uuid");
const { User } = require("../db");

class userAuthService {
  static async addUser({ name, email, password }) {
    console.log("add User.....");
    // TODO: email 중복 확인하기

    // > addUser
    const id = uuid.v4();
    console.log(id);

    // TODO password는 hash된 값으로 바꿔야 함
    const newUser = { id, name, email, password };

    // > db에 저장하기
    const createNewUser = await User.create({ newUser });
    console.log("db에 사용자가 정상적으로 등록되었습니다.");

    return createNewUser;
  }
}

module.exports = { userAuthService };
