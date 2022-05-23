const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const database = await sqliteConnection();

    const checkUserExits = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );
    if (checkUserExits) {
      throw new AppError("email already exists");
    }
    const hashedPassword = await hash(password, 8);

    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?,?,?)",
      [name, email, hashedPassword]
    );

    return response.status("201").json("created user!");
  }
  async update(request, response) {
    const { name, email, password, old_password } = request.body;
    const { id } = request.params;

    const database = await sqliteConnection();
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);
    if (!user) {
      throw new AppError("User not found");
    }
    const userWithUpdateEmail = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );
    if (userWithUpdateEmail && userWithUpdateEmail.id !== user.id) {
      throw new AppError("this email is already in use");
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    if (password && !old_password) {
      throw new AppError("A senha antiga não foi informada!");
    } else {
      const checkOldPassword = await compare(old_password, user.password);
      if (!checkOldPassword) {
        throw new AppError("Usuário ou Senha Incorretos!");
      }
      user.password = await hash(password, 8);
    }
    await database.run(
      `
    UPDATE users SET 
    name = ?,
    email = ?,
    password = ?,
    updated_at = DATETIME('now')
    WHERE id = ?`,
      [user.name, user.email, user.password, id]
    );
    return response.status("200").json("data updated successfully!");
  }
}

module.exports = UsersController;
